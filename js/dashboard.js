
window.addEventListener('load',()=>{
    var x = document.createElement('link');
    x.rel = "stylesheet"
    x.href =  chrome.runtime.getURL("css/dashboard.css")
    document.head.appendChild(x)


    //remove logo bc its not a transparent background wtf
    let firstlogos =  document.getElementsByClassName("ic-sidebar-logo")
    let first = firstlogos[0]
    console.log(first)
})