var x = document.createElement('link');
x.rel = "stylesheet"
x.href =  chrome.runtime.getURL("css/dashboard.css")
document.head.appendChild(x)
