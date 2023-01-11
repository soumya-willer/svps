console.clear();

var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
okpt("401 Restricted Access");
// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
   browserName = "Opera";
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
   browserName = "Microsoft Internet Explorer";
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
   browserName = "Chrome";
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
   browserName = "Safari";
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
    browserName = "Firefox";
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
    browserName = nAgt.substring(nameOffset,verOffset);
    if (browserName.toLowerCase()==browserName.toUpperCase()) {
       browserName = navigator.appName;
    }
}
if ((browserName == "Microsoft Internet Explorer" && history.length > 0) || (browserName != "Microsoft Internet Explorer" && history.length > 1)) {
   $(".button").text("Back");
} else {
   $(".button").text("Close");
}

console.log('Browser name  = '+browserName);

$(".button").click(function(){
   window.history.back();
   window.close();
});