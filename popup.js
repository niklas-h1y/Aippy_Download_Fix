document.getElementById('extract-btn').addEventListener('click', async () => {
    const statusDiv = document.getElementById('status');
    statusDiv.innerText = "Scanning page...";
    
    // Get the active tab in the current window
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tab) {
        statusDiv.innerText = "Error: No active tab.";
        return;
    }

    // Execute the DOM scanning script directly inside the target tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            // Scan for all iframes matching the active running game string
            const iframes = document.querySelectorAll('iframe[src*="aippy.live"]');
            let activeIframeSrc = null;

            for (let i = 0; i < iframes.length; i++) {
                const f = iframes[i];
                
                // Bypass hidden or invisible iframe elements
                const parentDiv = f.closest('div[style*="visibility"]');
                if (parentDiv) {
                    const style = parentDiv.getAttribute('style') || '';
                    if (style.includes('visibility: hidden') || style.includes('opacity: 0')) {
                        continue;
                    }
                }

                const rect = f.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                    activeIframeSrc = f.src;
                    break;
                }
            }

            if (activeIframeSrc) {
                // Open the isolated link in a clean, new tab
                window.open(activeIframeSrc, '_blank');
                return "Success";
            } else {
                return "No visible game frame found.";
            }
        }
    }, (results) => {
        // Handle results back in the extension window popup
        if (chrome.runtime.lastError) {
            statusDiv.innerText = "Error injecting script.";
        } else if (results && results[0] && results[0].result === "Success") {
            statusDiv.innerText = "Frame opened!";
        } else {
            statusDiv.innerText = results[0].result || "Failed to find frame.";
        }
    });
});
