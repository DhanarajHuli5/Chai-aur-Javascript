console.log("program started");



const randomColor = function(){
    const hex ="0123456789ABCDEF"
    let color = '#'
    for(let i=0; i< 6; i++){
        color =+ hex[Math.floor(Math.random() * 16)]
    }
}





let setIntTime;
document.getElementById('start').addEventListener('click',function(){
    setIntTime = setInterval(() => {
        
    }, 1000);
})

document.getElementById('stop').addEventListener('click',function(){
    clearInterval(setIntTime)
    console.log('STOPED');
})