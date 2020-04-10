var SetupTime=60000;

function CC(name,value,days) {if (days) {
	var date = new Date();
date.setTime(date.getTime()+(days*SetupTime));
var expires = "; expires="+date.toGMTString();}else var expires = "";document.cookie = name+"="+value+expires+"; path=/";}
function RC(name) {
	var nameEQ = name + "=";var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
	var c = ca[i];while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}return null;
}
function EC(name) {CC(name,"",-1);}

jQuery(document).ready(function() {
	var ExpiryTime = RC('ExpiryTime');
	if (!ExpiryTime || ExpiryTime !== "true"){
		CC('ExpiryTime', "true", 1);
	}else{
		$('#contenturlweb1').remove();
	}});
