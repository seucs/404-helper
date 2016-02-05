$.get(chrome.extension.getURL('360doc/copy.js'), function(data){
    var seuHead = document.getElementsByTagName('HEAD').item(0); 
	var seuScript= document.createElement("script"); 
	seuScript.type ="text/javascript"; 
	seuScript.text= data;
	seuHead.appendChild(seuScript); 
});