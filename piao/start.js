var seuHead = document.getElementsByTagName('HEAD').item(0); 
var seuScript= document.createElement("script"); 
seuScript.type ="text/javascript"; 
seuScript.src = "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js";
seuScript.text= "";
seuHead.appendChild(seuScript);
console.log(321312);
function mmm(){
	$("#second5",window.frames["packageListFrame"].document).each(function() {
	    $(this).attr({'onclick':'setTimeout(getScore,1000)'});
	});
	$.get(chrome.extension.getURL('ExamResult.js'), function(data){
	var doc = window.frames["packageListFrame"].document;
    var seuHead = doc.getElementsByTagName('HEAD').item(0); 
	var seuScript= doc.createElement("script"); 
	seuScript.type ="text/javascript"; 
	seuScript.text= data;
	seuHead.appendChild(seuScript); 
});
}


setTimeout(mmm,1000);