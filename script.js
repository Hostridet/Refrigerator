let fields = document.querySelectorAll(".fields");
let isGameStarted = false;
const posOne = "image/0.png";
const posTwo = "image/1.png";

let currentPos = [];

createFields();
//начало игры: перемешивание всех полей и разрешение нажатие наполя
function startGame()
{
    isGameStarted = true;
    randomSort();
}
//Псевдо-рандомно меняет поля
function randomSort()
{
    for(let i = 0; i < 1; i++)
    {
        Exchange(getRandomInt(25));
    }
}
function refresh(){

}
fields.forEach(field => field.addEventListener("click", click));
function click(e)
{
    console.log(0 % 5);
    if (isGameStarted)
    {
        let i = 0;
        while (fields[i] !== this)
            i++;
        console.log(currentPos);
        Exchange(i);
    }
}
//смена элементов по выбранному элементу матрицы
function Exchange(x)
{
    let new_x = x;
    while(new_x > 5) {
        new_x = new_x - 5;
    }
    for(let i = 0; i <= 24; i++)
    {
        if (i % 5 === new_x)
        {
            if (currentPos[i] === "-")
            {
                console.log(currentPos[i]);
                let image = createImage(posTwo);
                deleteAllChild(fields[i]);
                fields[i].appendChild(image);
                currentPos[i] = "+";
            }
            if (currentPos[i] === "+")
            {
                let image = createImage(posOne);
                deleteAllChild(fields[i]);
                fields[i].appendChild(image);
                currentPos[i] = "-";
            }
        }
    }
    if ((x >= 0) && (x <= 4))
        changePlaces(0, 4);
    if ((x >= 5) && (x <= 9))
        changePlaces(5, 9);
    if ((x >= 10) && (x <= 14))
        changePlaces(10, 14);
    if ((x >= 15) && (x <= 19))
        changePlaces(15, 19);
    if ((x >= 20) && (x <= 24))
        changePlaces(20, 24)
}
function changePlaces(first, sec) {
    for (first; first <= sec; first++) {
        let image = createImage(posTwo);
        deleteAllChild(fields[first]);
        fields[first].appendChild(image);
    }
}
function deleteAllChild(item)
{
    while (item.firstChild)
    {
        item.removeChild(item.lastChild);
    }
}
//Рандомное число в диапазоне от 0 до max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//создание полей
function createFields()
{
    fields.forEach(field => {
        deleteAllChild(field);
        fullElements(field);
    });
    isGameStarted = false;
    for (let i = 0; i <= 24; i++)
        currentPos[i] = "-";
}
function fullElements(item)
{
    let image = createImage(posOne);
    item.appendChild(image);
}
function createImage(pos)
{
    let image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("src", pos);
    return image;
}
