import React from 'react'

function PageLink (props) {
    props
}

// нужна функция, проверяющая на какой странице находимся сейчас и 
// от этого рендерит все старые(или 3 старых) плюс кнопку следующая и назад 
// функция должна связываться со стором
// вероятно реализуется это через объект роутера Location
// вначале получаем location, потом на основе этого 
// фетчим данные, сохранем в главный стор 
// сохраняем id в beersPage с ключом location.pathname
// на основе стора beersPage рендерим пагинацию
// в beerList исправить отрисовку данных.