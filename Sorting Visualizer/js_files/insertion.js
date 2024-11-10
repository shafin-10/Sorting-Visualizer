async function insertion(){
    const bar = document.querySelectorAll(".bar");
    bar[0].style.background = 'red';
    for(let i = 1; i < bar.length; i++){
        let j = i - 1;
        let cur = bar[i].style.height;
      
       bar[i].style.background = 'red';

        await wait(delay);

        while(j >= 0 && (parseInt(bar[j].style.height) > parseInt(cur))){
            // color
            bar[j].style.background = 'red';
            bar[j + 1].style.height = bar[j].style.height;
            j--;

            await wait(delay);

            // color
            for(let k = i; k >= 0; k--){
                bar[k].style.background = 'green';
            }
        }
        bar[j + 1].style.height = cur;
        bar[i].style.background = 'green';
    }
}

// for(int i = 1 ; i < n; i++)
//     {
//       int cur = a[i];
//      int j = i - 1;
//      while(cur < a[j] && j >= 0)
//       {
//          a[j + 1] = a[j];
//         j--;
//        }
//       a[j + 1] = cur;
// }

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
