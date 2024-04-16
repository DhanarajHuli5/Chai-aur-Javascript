console.log("program started");




let setIntTime;
document.getElementById('start').addEventListener('click',function(){
    setIntTime = setInterval(() => {
        console.log(Date.now());
    }, 1000);
})

document.getElementById('stop').addEventListener('click',function(){
    clearInterval(setIntTime)
    console.log('STOPED');
})