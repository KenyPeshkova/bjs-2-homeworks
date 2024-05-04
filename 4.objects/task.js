function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];

  
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  
}

Student.prototype.addMarks = function (...marksToAdd) {
        
    if (this.hasOwnProperty('marks') == true)
    {
       
        return this.marks.push(...marksToAdd);
    }
    
    
    
}

Student.prototype.getAverage = function () {
    
    if (this.hasOwnProperty('marks') == false){
        return 0;
    }
    if (this.marks.length == 0 ){
        return 0;
    }
    else {
    
        let sum = 0;
        for (let i = 0; i < this.marks.length; i += 1) {
        sum += this.marks[i];
        } 
        return sum / this.marks.length;
    }
   
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;

}

const student1 = new Student("Nikolay", "male", 21);
