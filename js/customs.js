var age = +prompt('Введите ваш возраст');
var z = confirm('Вы курите ?  Да(ОК)  НЕТ(Отмена)');
if ( age < 18 ) {
    if ( z === false ) {
        alert('Так держать !!!');
    } 
    else if ( z === true ) {
        alert('Маме расскажу !!!');
    }
} 
else if (age => 18) {
    if ( z === true ) {
        alert('Ну и зря !!!');
    } 
    else if ( z === false ) {
        alert('Молодец, и не надо !!!');
    }
}