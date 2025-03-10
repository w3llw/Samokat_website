//Акардион вопросов и ответов
let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach(acco => {
    acco.onclick = () => {
        accordions.forEach(subAcco => { subAcco.classList.remove('active') });
        acco.classList.add('active');
    }
});


//calculatot
let search = document.querySelector('.calculator');

document.querySelector('.bx.bx-calculator').onclick = () => {
    search.classList.toggle('active');
}

function calculateCost() {
    // Получаем значение из поля ввода
    const kilometers = document.getElementById('kilometers').value;

    // Устанавливаем базовую стоимость за километр
    const pricePerKilometer = 50;

    // Вычисляем общую стоимость
    const totalCost = kilometers * pricePerKilometer;

    // Отображаем результат
    document.getElementById('result').textContent = `Общая стоимость: ${totalCost} рублей`;
}

//popup
function showPopup() {
    document.getElementById('myPopup').style.display = 'block';
    document.body.classList.add('dimmed');
}

function closePopup() {
    document.getElementById('myPopup').style.display = 'none';
    document.body.classList.remove('dimmed');
}

