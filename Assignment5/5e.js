class Student{ // not hoisted 
    constructor(firstName,lastName,id,grades){
        this._firstName=firstName;
        this._lastName=lastName;
        this._id=id;
        this._grades=grades;
    }
    
    set firstName(newFirstName){
        this._firstName=newFirstName;
    } 
    set lastName(newLastName){
        this._lastName=newLastName;
    }
    setFullName(firstName,lastName){
        this._firstName=firstName;
        this._lastName=lastName;
    }
    get AverageGrade(){
        return (this._grades.reduce((x,y)=>x+y)/this._grades.length)
    }
    printInfo=function(){
        return this._firstName+" "+this._lastName+" "+this.AverageGrade
    }

}


let sampleStudent=new Student("alex","martynek",111,[1,2,3,5])
console.log(sampleStudent.printInfo())
sampleStudent.setFullName("not alex","not martynek");
console.log(sampleStudent.printInfo())