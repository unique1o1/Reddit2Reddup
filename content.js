var index = window.location.href.indexOf(".com");
var url=window.location.href.slice(index+4);

var redirect="https://www.reddup.co"+url;

window.location.href = redirect;