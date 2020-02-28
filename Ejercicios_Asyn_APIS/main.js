
//elements 
const[input, button, counters]=document.querySelectorAll('input', 'button', 'counters');
//funciones 

function count(miliseconds){
    return new Promise(()=>{setTimeout(resolve, miliseconds)}




    )
}

function addCounter(seconds){

    const counter=document.createElement('li');
    counter.textContent=`0/${seconds}`;

    const interval=setInterval(()=>{

        c++;
        console.log(`counter: ${c}/${seconds}`);
        counter.textContent=`counter: ${c}/${seconds}`
    },1000)

    counters.appendChild(counter);

    function stopCounter(){
        clearInterval(interval);
        counter.remove;
    }

    count(seconds*1000).then(()=>{


        clearInterval(interval);
        counter.remove;
    })
}

//events

input.onkeyup=(e)=>{

    const seconds=e.target.value;
    button.textContent= seconds ? `Contar ${seconds} segundos` :'Contar';

    if(e.key==='Enter'){

        button.onclick();
    }
}
