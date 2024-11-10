async function partition(bar, l, r){
    let i = l - 1;
    bar[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        bar[j].style.background = 'yellow';
        await wait(delay);

        if(parseInt(bar[j].style.height) < parseInt(bar[r].style.height)){
            i++;
            swap(bar[i], bar[j]);
            // color 
            bar[i].style.background = 'orange';
            if(i != j) bar[j].style.background = 'orange';
            await wait(delay);
        }
        else{
            // color if not less than pivot
           bar[j].style.background = 'pink';
        }
    }
    i++; 
    await wait(delay);
    swap(bar[i], bar[r]); 
    console.log(`i = ${i}`, typeof(i));
    // color
    bar[r].style.background = 'pink';
    bar[i].style.background = 'green';

    // pauseChamp
    await wait(delay);
    
    // color
    for(let k = 0; k <bar.length; k++){
        if(bar[k].style.background != 'green')
            bar[k].style.background = 'cyan';
    }

    return i;
}

// int partition(int arr[], int l ,int r)
// {
//     int pivot = arr[r];
//     int i = l - 1;

//     for(int j = l; j < r; j++)
//     {
//         if(arr[j] < pivot)
//         {
//             i++;
//             swap(arr, i ,j);
//         }
//     }
//     swap(arr, i + 1, r);
//     return i + 1;
// }


async function quickSort(bar, l, r){
    if(l < r){
        let pivot_index = await partition(bar, l, r);
        await quickSort(bar, l, pivot_index - 1);
        await quickSort(bar, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <bar.length && r <bar.length){
            bar[r].style.background = 'green';
            bar[l].style.background = 'green';
        }
    }
}

// void quickSort(int arr[], int l, int r)
// {
//     if(l < r)
//     {
//         int pi = partition(arr, l, r);
//         quickSort(arr, l, pi - 1);
//         quickSort(arr, pi + 1, r);

//     }
// }

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let bar = document.querySelectorAll('.bar');
    let l = 0;
    let r = bar.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(bar, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});