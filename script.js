
let texto = document.querySelector('.inputCript');
let aviso = document.querySelector('.aviso');
let letrasMaiuscula = /[A-Z]/;
let texto2 = document.querySelector('.outdescrip');
let image = document.querySelector('.backImage');
let mensagem = document.querySelector('.input2');
let copia = document.querySelector('.copiar');
let retanguloMobile = document.querySelector('.mobileRe');
let formMobile = document.querySelector('.mobileFor');

texto.addEventListener("keypress", function(e) {
    
    if(!checarInput(e)) {
      e.preventDefault();
      aviso.innerHTML = '<img src="images/exclama.svg" />Somente letras minusculas e sem caracteres especiasi';
      aviso.style = 'display: inline-flex;';
      
    } else {
        aviso.style = 'display: none;';
    }
});
function checarInput(e) {
    let char = String.fromCharCode(e.keyCode);
    
    let pattern = '[a-z/ ]';
    if (char.match(pattern)) {
       
        return true;
    }
}
function criptografar(item) {
    let inputText = texto.value; 
   
    let newTexto = inputText.replace(letra, (item) =>{
        let lista = cripto[item];
        let itemLista = lista.replace(/(?:^|\s)\S/g, (elemento) =>{
            return elemento;
        });
        return itemLista;
        
    });
    texto.value = '';
    texto2.innerHTML = newTexto;
    texto2.style.display = 'block';
    image.style.display = 'none';
    mensagem.style.display = 'none';
    copia.style.display = 'block';
    formMobile.style.height = '1249px';
    retanguloMobile.style = 'min-height: 343px';

    
}

function descriptografar(item) {
    let inputText = texto.value; 
     
    let newTexto2 = inputText.replace(letra2, (item) =>{
        let lista2 = descripto[item];
        let itemLista2 = lista2.replace(/(?:^|\s)\S/g, (elemento) =>{
            return elemento;
        });
        return itemLista2;
        
    });

   
    texto2.innerHTML = newTexto2;
    console.log(newTexto2)
    texto2.style.display = 'block';
    image.style.display = 'none';
    mensagem.style.display = 'none';
    copia.style.display = 'block';
    formMobile.style.height = '1249px';
    retanguloMobile.style = 'min-height: 343px';
}

function copy() {

    let area  = texto2;
    
    area.select();
    document.execCommand('copy');

    alert("Copied!");
}



let cripto = {e:"enter", i:"imes", a:"ai", o:"ober", u:"ufat"};
let letra = /e|i|a|o|u/gi;

let descripto = {enter:"e", imes:"i", ai:"a", ober:"o", ufat:"u"};
let letra2 = /enter|imes|ai|ober|ufat/gi;

