const fs=require('fs');

fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }

})


fs.writeFile('./docs/blog1.txt','hello world',()=>{
    console.log('file was written...')
})




if(!fs.existsSync('./newone')){
fs.mkdir('./newone',(err)=>{
    if(err)
    {console.log(err)}
    console.log('folder created ...')
})
}else{
    fs.rmdir('./newone',(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('folder deleted..')
        }
    })
}




if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted..')
    })
}