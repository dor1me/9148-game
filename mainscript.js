// document.querySelector('.block').onmousemove
// function(event) {   
//     console.log(event); // вывод в консоль
// }

// document.querySelector('.x').innerHTML = event.offsetX;
// document.querySelector('.y').innerHTML = event.offsetY;
// document.querySelector('.block').onmousemove = function(event) {
//     event = event || window.event; // кроссбраузерность
//     console.log(event); // вывод в консоль
//     document.querySelector('.x').innerHTML = event.offsetX;
//     document.querySelector('.y').innerHTML = event.offsetY;
// }
const proverka = "execution"

function anon(){
    let word = prompt("Вход в систему, докажите что вы не робот")
    if (word==proverka){
        alert("Отлично!")
    }
    else{
        alert("Неправильно! Возвращайтесь к своей работе!")
    }
}
