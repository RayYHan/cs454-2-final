# cs454-2-final
The functions I am going to demo are _.defaults and _.pick from the object category of the Underscore module.

First I would like to give a brief description of my code example. The main function of my example is the newYear function. It works with three different collections. The idea behind the newYear function is that at the beginning of each school year, the status of each student is changed. Seniors graduate, the grades of other students are changed and there will be new incoming freshmen. The newYear function moves seniors in the students collection to the alumni collection and students in the freshmen collection to the students collection.

There are four almost identical chains inside the newYear function used to update students of different grades.

But as you can see here, the students in the students collection have one extra property when comparing to the other two collections. This is where the _.pick and _.defaults functions come in.

_.pick can construct an object with a subset of the properties from an existing object.

The first chain extract the students who are originally seniors into a new collection that can be later added to the alumni collection. The _.pick function inside of the map function creates a new object for each senior without the grade property, which matches the format of objects inside the alumni collection.

The other three chains are very similar to the first one. The only difference is that since the students still remain in the same collection, the number of properties need not to be altered.

The new Alumni collection is the union of the old alumni collection and the newGraduate collection, and the new students collection is the union of the four grades.

But objects inside the freshmen collection do not have the grade property. This can be added by checking the grade property of all students and assign freshmen to those with undefined grade property. But with the _.defaults function, the default grade of “Freshman” can be applied to the every student with a _.each function without worrying it might be applied to students who already have a grade property.

When I run the example, the old students and alumni collections will be printed out, and after running the newYear function, the new students and alumni collections will be printed out as well.

