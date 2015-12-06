# cs454-2-final
The functions I am going to demo are _.defaults and _.pick from the object category of the Underscore module.

The idea behind my example is that at the beginning of each school year, the status of each student is changed. The newYear function moves seniors to the alumni collection, assigns new grades to the rest of the students and adds freshmen to the students collection.

But as you can see here, the objects in the students collection have one extra property when comparing to the other two collections. This is where the _.pick and _.defaults functions come in.

_.pick can construct an object with a subset of the properties from an existing object.

The first chain extract the students who are originally seniors into a new collection that can be later added to the alumni collection. The _.pick function inside of the map function creates a new object for each senior without the grade property, which matches the format of objects inside the alumni collection.

The other three chains are very similar to the first one. The only difference is that since the students still remain in the same collection, the number of properties need not to be altered.

The new Alumni collection is the union of the old alumni and the newGraduates, and the new students collection is the union of the four grades.

But the newly added freshmen do not have the grade property. This can be added by checking the grade property of all students and assign freshmen to those with undefined grade property. But with the _.defaults function, the default grade of “Freshman” can be applied to the every student with a _.each function without worrying it might be applied to students who already have a grade property.

When I run the example, the old students and alumni collections will be printed out first, and after running the newYear function, the new students and alumni collections will be printed out as well.
