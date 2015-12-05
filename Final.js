var _ = require('underscore')

var students = [{Name: "John", Grade: "Senior", Gender: "Male"},
    {Name: "Paul", Grade: "Junior", Gender: "Male"},
    {Name: "Steve", Grade: "Freshman", Gender: "Male"},
    {Name: "Nancy", Grade: "Sophomore", Gender: "Female"},
    ];

var freshmans = [{Name: "Jason", Gender: "Male"},
    {Name: "Kim", Gender: "Female"},
    {Name: "Stan", Gender: "Male"},
    {Name: "Joyce", Gender: "Female"}];

var alumi = [{Name: "Joe", Gender: "Male"}]

var newYear = function(){

    displayLen = function(students){
        console.log("number of Graduates: " + students.length)
    };

    newGraduates = _.chain(students)
        .where({Grade: "Senior"})
        .tap(function(students){console.log("number of Graduates: " + students.length)})
        .map(function(student){return (_.pick(student, "Name", "Gender"))})
        .value();

    newSeniors = _.chain(students)
        .where({Grade: "Junior"})
        .tap(function(students){console.log("number of New Seniors: " + students.length)})
        .map(function(student){student.Grade = "senior"; return student})
        .value();

    newJuniors = _.chain(students)
        .where({Grade: "Sophomore"})
        .tap(function(students){console.log("number of New Juniors: " + students.length)})
        .map(function(student){student.Grade = "Junior"; return student})
        .value();

    newSophomores = _.chain(students)
        .where({Grade: "Freshman"})
        .tap(function(students){console.log("number of New Sophomores: " + students.length)})
        .map(function(student){student.Grade = "Sophomore"; return student})
        .value();

    assignFreshmanGrade = function(freshman){
        _.defaults(freshman, {Grade: "Freshman"});
    }

    _.each(freshmans, assignFreshmanGrade);

    students = _.union(freshmans, newSophomores, newJuniors, newSeniors);
    alumi = _.union(alumi, newGraduates);
}

console.log("old students: ", students);
console.log("old alumi: ", alumi);
newYear();
console.log("new students: ", students);
console.log("new alumi: ", alumi);
