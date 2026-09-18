# Advanced Setup: Browser Extension Guide 🛠️

If you are developing frequently in Aippy and want a seamless, one-click solution to bypass iframe download restrictions without using manual bookmarklets, you can install this project as a custom browser extension.

Because this extension uses high-level browser permissions (`activeTab` and `scripting`), it can automatically scan the page DOM, loop through embedded frames, locate the active running game window, and break it out into a clean tab instantly.

---

## 💻 Desktop Setup (Chrome, Brave, Edge, Opera)

1. **Download the Project:** Click the green **Code** button at the top of this repository page and select **Download ZIP**. Extract the ZIP file into a folder on your computer.
2. **Open Extensions Page:** Open your browser and navigate to `chrome://extensions/` (or `edge://extensions/` if using Edge).
3. **Enable Developer Mode:** Toggle the **Developer mode** switch in the top-right corner to **ON**.
4. **Load the Extension:** Click the **Load unpacked** button in the top-left corner.
5. **Select Folder:** Select the extracted folder containing your `manifest.json`, `popup.html`, and `popup.js` files.

🚀 *The extension icon will now appear in your browser toolbar! Just click it while viewing any Aippy project page.*

---

## 📱 Mobile Setup (Android / Tablet)

Standard mobile browsers like Google Chrome do not support extensions, but you can run this tool on mobile by using an extension-friendly browser:

1. **Download a Compatible Browser:** Go to your mobile App Store and download **Kiwi Browser** (Free, open-source, and fully supports desktop extensions).
2. **Download the ZIP:** Open this GitHub repository page inside your mobile browser, tap the green **Code** button, and select **Download ZIP**.
3. **Open Extensions Portal:** In Kiwi Browser, tap the **three vertical dots** in the top-right corner, select **Extensions**, and switch **Developer mode** to **ON**.
4. **Install the ZIP:** Tap the **`+(from .zip/.crx/.user.js)`** button in the top-left corner. 
5. **Select File:** Your mobile file manager will open. Go to your Downloads folder and select the `Aippy_Download_Fix-main.zip` file you just downloaded.

🚀 *Kiwi Browser will instantly install the tool! To use it, open an Aippy project preview, tap the three dots in the corner, scroll down to the bottom, and tap **Aippy Extractor**.*

---
*Note: This extension runs entirely locally inside your browser cache and does not collect, track, or upload any personal user data.*
