setTimeout(()=>{
    console.log("in the timeout");
    clearInterval(num)
},3000);
const num=setInterval(()=>{
    console.log("in the interval")
},1000);


console.log(__filename)
console.log(__dirname)