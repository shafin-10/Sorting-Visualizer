async function selection(){
    const bar = document.querySelectorAll(".bar");
    for(let i = 0; i < bar.length; i++){
        let min_index = i;
        bar[i].style.background = 'yellow';
        for(let j = i+1; j < bar.length; j++){
           
            bar[j].style.background = 'red';

            await wait(delay);
            if(parseInt(bar[j].style.height) < parseInt(bar[min_index].style.height)){
                if(min_index !== i){
                    
                    bar[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                
                bar[j].style.background = 'cyan';
            }   
        }
        await wait(delay);
        swap(bar[min_index], bar[i]);
        
        bar[min_index].style.background = 'cyan';
        
        bar[i].style.background = 'green';
    }
}

// for(int i = 0; i < n - 1 ; i++)
//  {
//      for(int j = i + 1; j < n; j++)
//      {
//          if(a[j] < a[i])
//              swap(a[i] , a[j]);
//      }
//  }

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});