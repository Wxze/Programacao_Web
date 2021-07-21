function ler(){
    var msg = new SpeechSynthesisUtterance();
    var input = document.getElementById("inp-default");
    msg.text = input.value;
    window.speechSynthesis.speak(msg);
}