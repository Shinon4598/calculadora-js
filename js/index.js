const boton= document.querySelector('.tema');
const calculadora = document.querySelector('.appBg');
const arit = document.querySelectorAll('.arit');
const pantalla = document.querySelector('#pantalla');
var num=false;
function tema() {
    num = !num;
    if(num){
        aplicarEstilo('#301918', '#E0756D', '#614E4D');        
    }else{
        aplicarEstilo('#E0756D', '#301918', '#301918');
    }
}
function aplicarEstilo(bgCalc, bgBtn, bgPant) {
    calculadora.style.backgroundColor = bgCalc;
    boton.style.backgroundColor = bgBtn;
    pantalla.style.backgroundColor = bgPant;
    arit.forEach(element => {
        element.style.backgroundColor = bgBtn;
    });
}






