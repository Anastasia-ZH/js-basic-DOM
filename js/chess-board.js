const container = document.getElementById('app');
const arr = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const figures = ['&#9814', '&#9816', '&#9815', '&#9813', '&#9812', '&#9815', '&#9816', '&#9814', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817'];

function isOdd(num) {
    return num % 2;
}

function generateBox(element = null) {     //дефолтное значение, чтоб функия не ругалась что значение пустое
    let box = document.createElement('div');
    box.style.width = '50px';
    box.style.height = '50px';
    if (element) {
        box.innerHTML = element;
    }
    return box;
}


function generateLetters() {
    let row = document.createElement('div');
    row.className = 'row';
    for (let i = 0; i < 9; i++) {
        row.appendChild(generateBox(arr[i]));
    }
    return row;
}

function generateBoard() {
    let container = document.createElement('div');
    container.className = 'container';
    for (let i = 0; i < 8; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.appendChild(generateBox(8 - i));  //генерируются цифры 1-8

        if (isOdd(i)) {
            row.className = 'row odd';
        }

        for (let j = 0; j < 8; j++) {
            let box = generateBox();
            box.className = 'box';
            row.appendChild(box);
        }

        container.appendChild(row);
    }
    container.appendChild(generateLetters());

    return container;
}

container.appendChild(generateBoard());


let boxes = document.getElementsByClassName('box');

function setFig(elements, color = 'white') {
    for (let i = 0; i < 16; i++) {
        elements[i].innerHTML = figures[i];
        elements[i].style.color = color;
        if (color === 'white') {
            elements[i].style.textShadow = '1px 1px 2px black, 0 0 1em red'
            console.log(elements[i]);
        }
    }
}

setFig(boxes, 'black')
boxes = Array.from(boxes).reverse()

setFig(boxes)



