var fs=require("fs");
// fs.mkdir("afs",(e)=>{
//     if(e)throw e;
//     console.log("Floder created");
// })
fs.writeFile("afs/text.txt","Hi!",(e)=>{
    if(e) {console.log(e);}
    else{
        console.log("data written")
    }
})
fs.appendFile("afs/text.txt","How are you ?",(e)=>{
    if(e) {console.log(e);}
    else{
        console.log("data appended")
    }
})
fs.readFile("afs/text.txt","utf-8",(e,d)=>{
    if(e){throw e}
    else{
        console.log(d);
    }
})
fs.copyFile("afs/text.txt","temp.txt",(e)=>{
    if(e){throw e}
    else{
        console.log("data copied");
    }
})
fs.rename("afs/text.txt","afs/my.txt",(e)=>{
    if(e){throw e}
    else{
        console.log("Done");
    }
})
fs.unlink("afs/my.txt",(e)=>{
    if(e){throw e;}
    else{
        console.log("deleted");
    }
})
fs.rmdir("afs",(e)=>{
    if(e){console.log(e)}
    else{
        console.log("folder deleted");
    }
})
// deleted
// Done
// data copied
// Hi! are you ?
// data appended
// data written