//swap funtion for sorting
function swap(x, y) 
{
    let temp = x.style.height;
    x.style.height = y.style.height;
    y.style.height = temp;
    
}

// disables button while sorting
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

//enables button while sorting
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

//disables size slider while sorting
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

//enables size slider while sorting
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

//disables new array button
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

//enables new array button
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

//async funtion to animate sorting
function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let delay = 260

//spped input from slider
let delayElement = document.querySelector('#speed_input');

//event litsener to update delay time
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

//array size input from slider
let arraySize = document.querySelector('#arr_sz');

//event litsener to update bars
arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
});

let array = [];

createNewArray();

//funtion to create new array
function createNewArray(noOfBars = 60) {
    // deleting old bars to create new array
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

//deleting function to delete old array
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});