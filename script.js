let fields = document.querySelectorAll(".fields");
let isGameStarted = false;
const posOne = "image/0.png";
const posTwo = "image/1.png";

let currentPos = [];

createFields();
function startGame()
{
    if (!isGameStarted)
    {
        isGameStarted = true;
        randomSort();
    }
}

function randomSort()
{
    for(let i = 0; i < 3; i++)
    {
        Exchange(getRandomInt(25));
    }
}

fields.forEach(field => field.addEventListener("click", click));
function click(e)
{
    if (isGameStarted)
    {
        let i = 0;
        while (fields[i] !== this)
            i++;
        Exchange(i);
    }
}

function Exchange(x)
{
    let new_x = x;
    while(new_x >= 5) {
        new_x = new_x - 5;
    }
    for(let i = 0; i <= 24; i++)
    {
        if (i % 5 === new_x)
        {
            let image = choose(i);
            deleteAllChild(fields[i]);
            fields[i].appendChild(image);
        }
    }
    xReplace(x);
    changePlaces(x, x);
    if (isWin()) {
        isGameStarted = false;
        setTimeout("alert('Вы выиграли!')", 200);
    }
}

function changePlaces(first, sec) {
    for (first; first <= sec; first++) {
        let image = choose(first);
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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

function choose(i)
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
    return image;
}

function isWin()
{
    let win = true
    currentPos.forEach(field => {
        if (field !== false)
            win = false
    })
    return win;
}

function xReplace(x)
{
    let newX = 0;
    let newY = 4;
    while(newX <= 20 && newY <= 24)
    {
        if (x >= newX && x<= newY)
        {
            changePlaces(newX, newY);
            break;
        }
        else
        {
            newX += 5;
            newY += 5;
        }
    }
}
