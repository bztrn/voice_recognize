// Test browser support
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
 
//caso não suporte esta API DE VOZ            
if (window.SpeechRecognition === null) {
	document.getElementById('unsupported').classList.remove('hidden');
}else {
	//......
}

var recognizer = new window.SpeechRecognition();

var transcript = document.getElementById("transcript");
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();


recognizer.onresult = function(event){
	transcript.textContent = "";
	for (var i = event.resultIndex; i < event.results.length; i++) {
		if(event.results[i].isFinal){
			transcript.textContent = event.results[i][0].transcript;
		}else{
        	transcript.textContent += event.results[i][0].transcript;
		}
	}
	msg.voice = voices[10]; // Note: some voices don't support altering params
	msg.voiceURI = 'native';
	msg.volume = 1; // 0 to 1
	msg.text = transcript.textContent;
	msg.lang = 'pt-BR';

	msg.onend = function(e) {
	  console.log('Finished in ' + event.elapsedTime + ' seconds.');
	};

	speechSynthesis.speak("Você disse: " + msg);



}