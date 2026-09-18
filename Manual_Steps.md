- [ ] **Copy Bookmark**

  javascript:(function(){const iframes=document.querySelectorAll('iframe[src*="aippy.live"]');let activeIframe=null;for(let i=0;i<iframes.length;i++){const f=iframes[i];const parentDiv=f.closest('div[style*="visibility"]');if(parentDiv){const style=parentDiv.getAttribute('style')||'';if(style.includes('visibility: hidden')||style.includes('opacity: 0')){continue;}}const rect=f.getBoundingClientRect();if(rect.width>0&&rect.height>0){activeIframe=f;break;}}if(activeIframe&&activeIframe.src){const newWin=window.open('','_blank');if(newWin){newWin.document.write('<html><head><title>Aippy Live</title><style>html,body,iframe{margin:0;padding:0;width:100%;height:100%;overflow:hidden;border:none;}</style><script>try{localStorage.clear();sessionStorage.clear();}catch(e){}</script></head><body><iframe src="'+activeIframe.src+'"></iframe></body></html>');newWin.document.close();}}else{alert('Kein sichtbares Aippy-Spiel auf der Seite gefunden!');}})();

- [ ] **Create Bookmark**

- [ ] **Use Bookmark** [in any site that has a iframe to a site or intended: in a Aippy project]
