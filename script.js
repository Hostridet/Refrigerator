let fields = document.querySelectorAll(".fields");
let isGameStarted = false;
const posOne = "image/0.png";
const posTwo = "image/1.png";

let currentPos = [];

createFields();
//начало игры: перемешивание всех полей и разрешение нажатие наполя
function startGame()
{
    if (!isGameStarted)
    {
        isGameStarted = true;
        randomSort();
    }
}
//Псевдо-рандомно меняет поля
function randomSort()
{
    for(let i = 0; i < 3; i++)
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
        Exchange(i);
    }
}
//смена элементов по выбранному элементу матрицы
function Exchange(x)
{
    let new_x = x;
    while(new_x >= 5) {
        new_x = new_x - 5;
    }
    console.log(new_x);
    for(let i = 0; i <= 24; i++)
    {
        if (i % 5 === new_x)
        {
            let image;
            if(currentPos[i] === false)
            {
                image = createImage(posTwo);
                currentPos[i] = true;
            }
            else if (currentPos[i] === true)
            {
                image = createImage(posOne);
                currentPos[i] = false;
            }
            deleteAllChild(fields[i]);
            fields[i].appendChild(image);
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

    changePlaces(x, x);
}
function changePlaces(first, sec) {
    for (first; first <= sec; first++) {
        let image;
        if (currentPos[first] === false) {
            image = createImage(posTwo);
            currentPos[first] = true;
        }
        else if (currentPos[first] === true) {
            image = createImage(posOne);
            currentPos[first] = false;
        }
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
        currentPos[i] = false;
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
