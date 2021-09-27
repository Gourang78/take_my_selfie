var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){

    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function run(event){

    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;

}

function speak(){

    var synth = window.speechSynthesis;
    speak_data = "Taking Your Selfie In 5 Seconds";
    var utterSpeech = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterSpeech);
    Webcam.attach(camera);
    setTimeout(function()
    {

        take_snapshot();
        save();

    },5000);

}

camera = document.getElementById("webcam");
Webcam.set({

    width:360,
    height:360,
    image_format:'jpeg',
    jpeg_quality:90

});

function take_snapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("selfie").innerHTML = "<img id='selfie_img' src='"+data_uri+"'>";

    });

}

function save(){

    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();

}
