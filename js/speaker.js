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

//Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
recognizer.continuous = true;

recognizer.onresult = function(event){
	transcript.textContent = "";
	for (var i = event.resultIndex; i < event.results.length; i++) {
		if(event.results[i].isFinal){
			transcript.textContent = event.results[i][0].transcript;
		}else{
        	transcript.textContent += event.results[i][0].transcript;
		}
	}
}