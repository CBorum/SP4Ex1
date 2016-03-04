var student = {
    studentid: 1,
    studentname: "Hans",
    studentage: 19
};
var noOfStudent = 37;
var name = "Henning Dyrmose";
var isStudent = false;
var element = [true, 1, "Hi", student, 123];
for (var i = 0; i < element.length ; i++) {
    console.log(typeof element[i]);
}

var student1 = {
    studentid: 1,
    studentname: "Hans"
};
var student2 = {
    studentid: 2,
    studentname: "Ib"
};
var student3 = {
    studentid: 2,
    studentname: "Lars"
};

var studentsA = [student1, student2, student3];

function toString() {
    for (var i = 0; i < studentsA.length; i++) {
        console.log(studentsA[i].studentid + " : " + studentsA[i].studentname);
    }
}

var klasse = {
    students:[
        {studentAge: 12, studentName: "Hans", isFemale: false},
        {studentAge: 22, studentName: "Ib", isFemale: false},
        {studentAge: 32, studentName: "Siw", isFemale: true},
        {studentAge: 42, studentName: "Siiww", isFemale: true}
    ],
    findYougest: function() {
        return this.students[0]; //hc
    },
    findFemales: function() {
        var res = [];
        for (var i = 0; i < this.students.length; i++) {
            if (this.students[i].isFemale) {
                res.push(this.students[i]);
            }
        };
        return res;
    }
};

function printOver30() {
    klasse.students.forEach(function(student) {
        if (student.studentAge > 30) {
            console.log(student);
        }
    });
}

function max() {
    var max = -Infinity;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function today() {
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[d.getDay()];
}

function animal(name, species, age, isMammal) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.isMammal = isMammal;
}

var a1 = [
    new animal("Ib", "Elephant", "220", true),
    new animal("Iba", "Turle", "12", false),
    new animal("Ibi", "Dolphin", "7", true),
    new animal("Ibæ", "Crocodile", "10", false)
];

a1.forEach(function(animal) {
   console.log(animal); 
});

console.log("--------------------");

a1 = a1.filter(function(animal) {
    return animal.isMammal === true;
});

a1.forEach(function(animal) {
   console.log(animal); 
});

console.log("--------------------");

a1 = a1.map(function(animal) {
    return animal.name;
});

a1.forEach(function(animal) {
   console.log(animal); 
});

console.log("--------------------");