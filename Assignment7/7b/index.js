// TODO watch directory, print contents of files which were modified while server was running
 
const fs=require('fs')
 const http=require('http')
 const fileNameRegex=/[\w*\\*]*\w+\.\w+/ // will be used to only match files being edited, not created (as files created in subfolder return folder/subfolder path)
 let fileContentsCache={} // dict for faster access
    const dir="dir_to_watch"
    fs.watch('dir_to_watch',{recursive:true}, (eventType, filename) => {       
        
        if(eventType=="change" &&  (String(filename)).match(fileNameRegex)){
            filePath=dir+"\\"+filename
            const options={
                encoding:"utf8"
            }
            
            fs.readFile(filePath,options,(err,data)=>{
                if(err ){
                    console.log(filePath)
                    console.log(err)
                }
                else{
                    prevData=fileContentsCache[filePath] // use cache to determine if file actually changed or if the listener is showing 1 change multiple times
                    if(prevData===data){
                        //ignore since it seems to print the changes multiple times
                    }
                    else{
                        fileContentsCache[filePath]=data
                        console.log(`Filename:${filePath}`)
                        console.log(`Contents:${data}`)
                    }
                   
                }
            })
           
        }
        })
