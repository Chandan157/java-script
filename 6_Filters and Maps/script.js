let students = [
  { id: "1", name: "Chandan", sports: "Football" },
  { id: "2", name: "Ravi", sports: "Hocky" },
  { id: "3", name: "Ram", sports: "Football" },
  { id: "4", name: "Shyam", sports: "Basketball" },
];

//------------filter--------------------------
students.filter((curVal, index, array) => {});

const newArray = students.filter((curVal) => {
  if (curVal.id % 2 == 0) return true;
  else return false;
});

console.log("New array is...", newArray);

//---------------map--------------------------
// const names = students.map((curVal, index, array) => {
//   return `<li>${curVal.name}</li>`;
// });
// console.log(names);


//------------filter & map--------------------
const names = students
  .filter((curVal) => curVal.sports === "Football")
  .map((curVal, index, array) => {
    return `<li>${curVal.name}</li>`;
  });
console.log(names);


// -----------Display in screen--------------

const div = document.getElementById("container");
div.innerHTML = `<ul>${names.join("")}</ul>`;
