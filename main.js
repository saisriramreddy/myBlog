var SpeechRecognition = window.webkitSpeechRecongnition;

var recongnition = new SpeechRecognition();

function start()
{
    document.getElementsById("textbox").innerHTML = "";
    recongnition.start();
    
}
recongnition.oneresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content=="take my selfie"){
        console.log("taking selfie in 5 seconds");
        speak();
    } 
    
}
function speak(){
    var synth=window.SpeechSynthesis;
    Speak_data="taking selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(Speak_Data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout (function(){
        take_snapshot();
        save();
    },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:260,
    
    image_format:'jpeg',jpeg_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img> id="selfie_image" src="' + data_uri + ' "/>';
    });
}
functionsave(){
    link=document.getElementById("link"); image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}""