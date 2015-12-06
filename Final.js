/*
The functions I am going to demo are _.defaults and _.pick from the object category of the Underscore
module.

Instead of checking whether the value of a property is undefined before giving value,
_.defaults fills in undefined properties in an object with default values.
With the help of the _.each function, _.defaults can fill in undefined properties of all objects in a collection.

In a function chain, sometime it is desirable to use the data in the middle of the chain without changing it.
This can be done by returning the same data after working with it.
But by using _.tap, developers can avoid the need of returning the original value.

Sometimes it is necessary to construct an object with a subset of the properties from an existing object,
_.pick can accomplish this with a single line when specified exist object and keys.
The returned object will only contain properties with the specified keys.
*/


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

    console.log("number of New Freshmen: " + freshmen.length)

    alumni = _.union(alumni, newGraduates);
    students = _.union(freshmen, newSophomores, newJuniors, newSeniors);
    _.each(students, function(student){_.defaults(student, {Grade: "Freshman"})})

}

console.log("old students: ", students);
console.log("old alumni: ", alumni);
newYear();
console.log("new students: ", students);
console.log("new alumni: ", alumni);
