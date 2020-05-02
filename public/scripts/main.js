
// slider Animation
var sliderMensageImage = document.querySelector('.sliderMensage__image');
var sliderMensageInput = document.querySelector('.sliderMensage__input');

function handleSliderMensageInput() {
    
    var index = sliderMensageInput.value;
    
    sliderMensageImage.setAttribute('src', './images/carta' + index + '.png');

}
handleSliderMensageInput();
sliderMensageInput.addEventListener('input', handleSliderMensageInput);

//slider Tabla de propiedades 
var buttonImage=document.querySelector('.especificaciones__image');
var buttonTableD=document.querySelector('.dimensiones');
var buttonTableP=document.querySelector('.poliester');
var buttonTableA=document.querySelector('.algodon');
var buttonIzq=document.querySelector('.btnIzq');
var buttonDer=document.querySelector('.btnDer');
var  quality = 1;

function handleButtonD(){

    quality++;
    buttonImage.setAttribute('src', './images/peluche' +  quality + '.png');
    if(quality==6){
        quality=0;
    }
    switch (quality) {
        case 2:
            document.getElementById("especificaciones__change").innerHTML= "20cmx35cm";
            break;

        case 3:
            document.getElementById("especificaciones__change").innerHTML= "30cmx20cm";
            break;        
        
        case 4:
            document.getElementById("especificaciones__change").innerHTML= "40cmx30cm";
            break;

        case 5:
            document.getElementById("especificaciones__change").innerHTML= "20cmx40cm";
            break; 
            
        case 6:
            document.getElementById("especificaciones__change").innerHTML= "40cmx30cm";
            break;         
        
        case 1:
            document.getElementById("especificaciones__change").innerHTML= "20cmx35cm";
            break;  
    }

}
function handleButtonI(){

    quality--;
    buttonImage.setAttribute('src', '/images/peluche' +  quality + '.png');
    if(quality==0){
        quality=6;
    }
    switch (quality) {
        case 2:
            document.getElementById("especificaciones__change").innerHTML= "20cmx35cm";
            break;

        case 3:
            document.getElementById("especificaciones__change").innerHTML= "30cmx20cm";
            break;        
        
        case 4:
            document.getElementById("especificaciones__change").innerHTML= "40cmx30cm";
            break;

        case 5:
            document.getElementById("especificaciones__change").innerHTML= "20cmx40cm";
            break; 
            
        case 6:
            document.getElementById("especificaciones__change").innerHTML= "40cmx30cm";
            break;         
        
        case 1:
            document.getElementById("especificaciones__change").innerHTML= "20cmx35cm";
            break;  
    }

    console.log(quality);
}
handleButtonD();
handleButtonI();
buttonDer.addEventListener('click', handleButtonD);
buttonIzq.addEventListener('click', handleButtonI);
