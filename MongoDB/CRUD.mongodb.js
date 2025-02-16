use("CRUD_DB");

//CREATE
// db.getCollection("courses").insertOne({
//   course_name: "Data Structure",
//   price: 0,
//   assignment: 12,
//   project: 45,
// });
// db.getCollection("courses").insertMany([
//   {
//     course_name: "Algorithms",
//     price: 0,
//     assignment: 15,
//     project: 40,
//   },
//   {
//     course_name: "Web Development",
//     price: 50,
//     assignment: 10,
//     project: 35,
//   },
//   {
//     course_name: "Machine Learning",
//     price: 100,
//     assignment: 20,
//     project: 50,
//   },
//   {
//     course_name: "Cybersecurity",
//     price: 75,
//     assignment: 18,
//     project: 30,
//   },
//   {
//     course_name: "Artificial Intelligence",
//     price: 120,
//     assignment: 22,
//     project: 55,
//   },
//   {
//     course_name: "Database Management",
//     price: 60,
//     assignment: 12,
//     project: 25,
//   },
//   {
//     course_name: "Operating Systems",
//     price: 0,
//     assignment: 14,
//     project: 33,
//   },
//   {
//     course_name: "Networking",
//     price: 80,
//     assignment: 16,
//     project: 40,
//   },
//   {
//     course_name: "Cloud Computing",
//     price: 90,
//     assignment: 17,
//     project: 45,
//   },
//   {
//     course_name: "Software Engineering",
//     price: 70,
//     assignment: 19,
//     project: 38,
//   },
// ]);


//READ
// let a = db.courses.find({ price: 0 });
// console.log(a);
// let b = db.courses.find({ price: 0 });
// console.log(b.count());
// let c = db.courses.findOne({ price: 0 });
// console.log(c);

// //UPDATE
// db.getCollection("courses").updateOne(
//     {price: 0}, {$set:{price: 2000}}
// )


//DELETE
db.getCollection('courses').deleteOne({price: 2000})