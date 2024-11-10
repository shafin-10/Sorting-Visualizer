async function bubble() {

    const bar = document.querySelectorAll(".bar");
    for(let i = 0; i < bar.length-1; i++){
        
        for(let j = 0; j < bar.length-i-1; j++){
            
            bar[j].style.background = 'red';
            bar[j+1].style.background = 'red';
            if(parseInt(bar[j].style.height) > parseInt(bar[j+1].style.height)){
                
                await wait(delay);
                swap(bar[j], bar[j+1]);
            }
            bar[j].style.background = 'cyan';
            bar[j+1].style.background = 'cyan';
        }
        bar[bar.length-1-i].style.background = 'green';
    }
    bar[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});