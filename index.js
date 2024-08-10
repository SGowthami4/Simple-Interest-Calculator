document.addEventListener("DOMContentLoaded",function(){
    const button=document.getElementById("cal-btn")
    button.addEventListener('click',function(){
        const principalAmount=document.getElementById('PA').valueAsNumber;
        const rateOfInterest=document.getElementById('IR').valueAsNumber;
        const noOfYears=document.getElementById('years').valueAsNumber;

        if (principalAmount && rateOfInterest && noOfYears){
            const simpleInterest=(principalAmount*rateOfInterest*noOfYears)/100;
            console.log(simpleInterest);
            const result=document.getElementById("final");
            result.textContent="After "+noOfYears+" years, your investment will be worth $"+(principalAmount+simpleInterest) + ".00 with simple interest.";

    
        }
        else{
            alert("Please enter Principal amount, rate of interest and number of years")

        }


    })
})