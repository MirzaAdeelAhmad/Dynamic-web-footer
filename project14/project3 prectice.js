

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) =>{
    counter.innerHTML = "0";
    // console.log(counter);

    const totalCounting = () =>{
        var totalNumber = +counter.getAttribute("data-target");
        var startingNumber = Number(counter.innerHTML);
        var incr = totalNumber/100;
         if(startingNumber < totalNumber){
            counter.innerHTML = `${startingNumber + incr}`;
            setTimeout(totalCounting, 20)
         }
         else{
            counter.innerHTML = totalNumber;
         }
 

    }

    totalCounting();
    
})


