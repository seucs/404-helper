$.get(chrome.extension.getURL('xk/profession.js'), function(data){
    var seuHead = document.getElementsByTagName('HEAD').item(0); 
	var seuScript= document.createElement("script"); 
	seuScript.type ="text/javascript"; 
	seuScript.text= data;
	seuHead.appendChild(seuScript); 
});


$.get(chrome.extension.getURL('jquery.js'), function(data){
    var seuHead = document.getElementsByTagName('HEAD').item(0); 
	var seuScript= document.createElement("script"); 
	seuScript.type ="text/javascript"; 
	seuScript.text= data;
	seuHead.appendChild(seuScript); 
});
