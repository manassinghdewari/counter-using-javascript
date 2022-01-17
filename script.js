const  counters=document.querySelectorAll('.counter');
counters.forEach((counter)=>{
    console.log(counter);
    setTimeout(function() {},10000);
    counter.innerHTML=0;
    const updateCounter=()=>{
        const targetCount=+counter.getAttribute('data-target');
        //the data we got in targetCount is a string so for performing operation we have to convert it into a Number.
        //+means it converts string into number.noe targetCount is a number.
        const startingCount=Number(counter.innerHTML);
        const incr=targetCount/100;
        if(startingCount<targetCount){
            counter.innerHTML=`${startingCount+incr}`;
            setTimeout(updateCounter,10);
        }
    }
    updateCounter();
    
})

//several method to convert  a string into a number
//var n=+str;
//the number constructor
//var n=Number(str);
//the parse float function
//var n=parseFloat(str)

// drag and drop

const draggables=document.querySelectorAll('.draggable');
const containers=document.querySelectorAll('.container');

draggables.forEach(draggable=>{
    draggable.addEventListener('dragstart',()=>{
        draggable.classList.add('dragging');
    })
    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove('dragging');
    })
})

containers.forEach(container=>{
    container.addEventListener('dragover',e=>{
        //e.preventDefault() method 
        e.preventDefault();
        const afterElement=getDragAfterElement(container,e.clientY);
        const draggable=document.querySelector('.dragging');
        console.log(afterElement);
        if(afterElement==null)
        {
            //append -for appending dragging element
            container.appendChild(draggable);
        }
        else{
            container.insertBefore(draggable,afterElement);
        }
    })
})

function getDragAfterElement(container,y)
{
    const draggableElements=[...container.querySelectorAll('.draggable:not(.dragging)')]
    return draggableElements.reduce((closest,child)=>{
        const box=child.getBoundingClientRect();
        const offset=y-box.top-box.height/2;
        console.log(offset);
        if(offset<0&&offset>closest.offset)
          return {offset:offset,element:child}
        else
        return closest;
    },{offset:Number.NEGATIVE_INFINITY}).element;
}
