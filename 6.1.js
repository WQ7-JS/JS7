function gd(url){url = url.replace(/https?:\/\/(www.)?/i, '');if (url.indexOf('/') === -1){return url;}return url.split('/')[0];}
var str = gd(location.href).split("").join("aeiou");
if (str in zy){
var randomLink2 = Math.floor(Math.random() * acceptedWebsites.length);
var randomLink3 = Math.floor(Math.random() * acceptedWebsites.length);
var randomLink4 = Math.floor(Math.random() * acceptedWebsites.length);
var randomLink5 = Math.floor(Math.random() * acceptedWebsites.length);
var randomads = Math.floor(Math.random() * acceptedWebsites.length);
$(window).load(function() {
	setTimeout(function(){$('#IDAdsIFrame').attr('src', acceptedWebsites[randomads]);}, 1);
	setTimeout(function(){$('#MainPopupIframe').attr('src', acceptedWebsites[randomLink2]);}, 15000);
setTimeout(function(){$('#MainPopupIframe').attr('src', acceptedWebsites[randomLink3]);}, 25000);
setTimeout(function(){$('#MainPopupIframe').attr('src', acceptedWebsites[randomLink4]);}, 50000);
setTimeout(function(){$('#MainPopupIframe').attr('src', acceptedWebsites[randomLink5]);}, 75000);
});}else{
	setTimeout(function(){$('body').remove();}, 500);
}
