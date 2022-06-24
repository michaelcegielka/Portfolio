
const texts = ['HEY, WELCOME!', 'HEJ, WELCOME!','SALUT, BIENVENUE',  
            '嘿，欢迎    ', '안녕하세요, 환영합니다   ', 
            'HALLO, WILLKOMMEN','HOLA, BIENVENIDA', 
            'Привет, добро пожаловать','Haai, welkom','Ehi, benvenuto','Хеј, добродошли',
            'Hei, tervetuloa','Szia, Isten hozott','Hej, witaj',
            'Merhaba, Hoş Geldiniz','مرحبًا    ','Ei, benvingut',
            'Hej, välkommen','Хуш омадед', 'Uy, abrasaen', 'Hei, laipni lūdzam', 'Hey, fáilte roimh chách'];

const fonts = ['Courier New', 'Gill Sans', 'Ubuntu', 'custom01', 'Helvetica']

let count = 0;
let fCount = 0;
let index = 0;
let currentText = '';
let currentFont = '';
let letter = '';

(function type() {
    if(count == texts.length){
        count = 0;
    }
    if(fCount == fonts.length){
        fCount = 0;
    }
    currentText = texts[count];
    currentFont = fonts[fCount];
    
    document.querySelector('.hey').style.fontFamily = currentFont;
    if(index == 0){     
        document.querySelector('.hey').style.fontSize = getRandomIntEM( 2, 5);
    }
    letter = currentText.slice(0, ++index);


    document.querySelector('.hey').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        fCount++;       
        
    }
    setTimeout(type, 200);
}());



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
function getRandomIntEM(min, max){
     return getRandomInt(min, max) + 'em';
}