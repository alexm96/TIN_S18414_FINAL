const sampleObject={
    name:"Alex",
    job:"student",
    salary:2000,
    yearlySalary:function(){
        return this.salary*12
    },
    setSalary:function(newSal){
        this.salary=newSal
    }    
    ,
    setJob:function(newJob){
        this.job=newJob
    }
}
printObject=(sampleObject)=>{
    for(let property in sampleObject){
        value=sampleObject[property]
        console.log(property)
        console.log(typeof value)
        console.log("----")
    }
}
console.log(sampleObject.yearlySalary())