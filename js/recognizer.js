// Test browser support
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
 
//caso não suporte esta API DE VOZ            
if (window.SpeechRecognition === null) {
	document.getElementById('unsupported').classList.remove('hidden');
}else {
	//......
}

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = 'native';




var transcript = document.getElementById("transcript");

recognizer.onresult = function(event){
	transcript.textContent = "";
	for (var i = event.resultIndex; i < event.results.length; i++) {
		if(event.results[i].isFinal){
			transcript.textContent = event.results[i][0].transcript;
		}else{
        	transcript.textContent += event.results[i][0].transcript;
		}
	}
	msg.text = transcript.textContent;
	msg.lang = 'pt-BR';
	speechSynthesis.speak("Você disse: " + msg);



}