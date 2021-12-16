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