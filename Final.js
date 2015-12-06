var _ = require('underscore');

var students = [{Name: "John", Grade: "Senior", Gender: "Male"},
    {Name: "Paul", Grade: "Junior", Gender: "Male"},
    {Name: "Steve", Grade: "Freshman", Gender: "Male"},
    {Name: "Nancy", Grade: "Sophomore", Gender: "Female"}];

var freshmen = [{Name: "Jason", Gender: "Male"},
    {Name: "Kim", Gender: "Female"},
    {Name: "Stan", Gender: "Male"},
    {Name: "Joyce", Gender: "Female"}];

var alumni = [{Name: "Joe", Gender: "Male"}]

var newYear = function(){

    newGraduates = _.chain(students)
        .where({Grade: "Senior"})
        .map(function(student){return (_.pick(student, "Name", "Gender"))})
        .value();

    newSeniors = _.chain(students)
        .where({Grade: "Junior"})
        .map(function(student){student.Grade = "senior"; return student})
        .value();

    newJuniors = _.chain(students)
        .where({Grade: "Sophomore"})
        .map(function(student){student.Grade = "Junior"; return student})
        .value();

    newSophomores = _.chain(students)
        .where({Grade: "Freshman"})
        .map(function(student){student.Grade = "Sophomore"; return student})
        .value();

    alumni = _.union(alumni, newGraduates);
    students = _.union(freshmen, newSophomores, newJuniors, newSeniors);
    _.each(students, function(student){_.defaults(student, {Grade: "Freshman"})})

}

console.log("old students: ", students);
console.log("old alumni: ", alumni);
newYear();
console.log("new students: ", students);
console.log("new alumni: ", alumni);
