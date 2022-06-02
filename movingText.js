const texts = ['HEY, WELCOME!', 'HEJ, WELCOME!','SALUT, BIENVENUE',  '嘿，欢迎    ', '안녕하세요, 환영합니다   ', 'HALLO, WILLKOMMEN','HOLA, BIENVENIDA', 'Привет, добро пожаловать'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if(count == texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.hey').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 200);
}());