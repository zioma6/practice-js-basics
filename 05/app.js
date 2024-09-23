function Student(name,surname){
    this.name = name;
    this.surname = surname;
    this.grade = {};
}

Student.prototype.addGrade = function(lesson, grade){
    
    if(!this.grade[lesson]){
        this.grade[lesson] = []
    }

    this.grade[lesson].push(grade)
}


//wyswitlanie ocen
Student.prototype.lookGrades = function() {
    console.log("Oceny dla ucznia " + this.name + " " + this.surname + ":");
    for (let lesson in this.grade) {
        console.log(lesson + ": " + this.grade[lesson].join(", "));
    }
};

// // Przykład użycia
// const student1 = new Student("Jan", "Kowalski");

// student1.addGrade("Matematyka", 5);
// student1.addGrade("Matematyka", 4);
// student1.addGrade("Fizyka", 3);

// student1.lookGrades(); 


Student.prototype.getAverageGrade = function(lesson) {
    if (this.grade[lesson] && this.grade[lesson].length > 0) {
        let sum = this.grade[lesson].reduce((a, b) => a + b, 0);
        return sum / this.grade[lesson].length;
    } else {
        return null; // Brak ocen z tego przedmiotu
    }
};


Student.prototype.allAverage= function(){
    let sumGrades = 0;
    let numGrades = 0;

    Object.keys(this.grade).forEach(lesson => {
        const gradesLesson = this.grade[lesson];
        sumGrades += gradesLesson.reduce((a, b) => a + b, 0);
        numGrades += gradesLesson.length;
    })

    if (numGrades > 0) {
        return sumGrades / numGrades;
    } else {
        return null; // Brak ocen ogólnie
    }
}


const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths'); 
const avg = student.allAverage(); 

student.lookGrades(); 
console.log(avgMath)
console.log(avg)

console.log(student)