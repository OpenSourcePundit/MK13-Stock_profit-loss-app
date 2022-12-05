const input = document.querySelectorAll('.input');
const tellMeBtn = document.querySelector('#tell-me-btn');
const output = document.querySelector('.output');

function checkProfit(buyPrice,currentPrice){
    if(buyPrice<currentPrice)
    return true;
    else
    return false;
    
}
function findValue(a,b,qty){
    console.log("here value")
    //for true case ie profit: a=initial value b=final value;
    //for false case ie loss: a=final value b=initial value;
 return (b-a)*qty;
}
function findPercent(a,b){
    console.log("here value")
    //for true case ie profit: a=initial value b=final value;
    //for false case ie loss: a=final value b=initial value;
    return (b-a)/a*100;
}

function tellMe(){
    if(input[0].value === input[2].value){
        output.innerHTML ="NO Pain NO Gain..!! NO GAIN..NO PAIN..!!";
    }
    else
{
    if(checkProfit(input[0].value,input[2].value)){
        var value = findValue(input[0].value,input[2].value,input[1].value);
        var percentage = findPercent(input[0].value,input[2].value);
        output.innerHTML = "Profit|Absolute Profit: "+value+"|Profit percent: "+percentage;;
    }
    else{
        const value = findValue(input[2].value,input[0].value,input[1].value);
        const percentage = findPercent(input[0].value,input[2].value);
        output.innerHTML = "Loss|Absolute Loss: "+value+"|Loss percent: "+percentage;
    }
}

}

tellMeBtn.addEventListener('click',tellMe);