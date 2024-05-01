const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};



function goBlank() {
    var page = new ABC({
    "type": "blank"
})
page.setType("blank")
page.setUrl(window.location.href)
page.open()
window.location.replace("https://google.com")
};
// This script below is made by
//  _____             _   _      _                      _    
// |  ___|__   __ _  | \ | | ___| |___      _____  _ __| | __
// | |_ / _ \ / _` | |  \| |/ _ \ __\ \ /\ / / _ \| '__| |/ /
// |  _| (_) | (_| | | |\  |  __/ |_ \ V  V / (_) | |  |   < 
// |_|  \___/ \__, | |_| \_|\___|\__| \_/\_/ \___/|_|  |_|\_\
//   

class ABC {
constructor(config = {}) {
this.type = config.type || "blank"
this.url = config.url || "about:blank"
}
setType(type) {
if (!type) return;
this.type = type
}
setUrl(url) {
if (!url) return;
this.url = url
}
getCode() {
return `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`
}
open() {
if (this.type == "blank") {
try {
var page = window.open()
page.document.body.innerHTML = `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`
} catch {
}
} else if (this.type == "blob") {
try {
var page = new Blob([`<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`], {type: "text/html"})
window.open(URL.createObjectURL(page))
} catch {
}
} else if (this.type == "overwrite") {
try {
document.body.innerHTML = `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`
} catch {
}
}
}
}
