//easy way to get the data in goood way
// {} -> this is for destructuring
const course = {
    courseName: "Js in hindi",
    price: 999,
    courseInstructor: "sumant"
}

const {courseInstructor: instructor} = course;

console.log(instructor);
// console.log(courseInstructor);


