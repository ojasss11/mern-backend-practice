var name = "Ojas";
console.log(name); // Output: Ojas
name = "Bidkar";
console.log(name); // Output: Bidkar
let a = 12;
var b = 123;
console.log(a);
console.log(b);
let back = 2;
let front = back;
/*
console.log(front);
console.log(back);
front = [1, 2, 3];
back = [...front];
console.log(back);
console.log(front);
front.pop();
console.log("AFTER POP");
console.log(back);
console.log(front);
*/
let each = { name: "one", type: "plastic" };
each.name = "two";
console.log(each.name);
each.type == "gold";
console.log(each.type);
let newer = each;
let i = 20;
let j = 10;
console.log(i + j);
console.log(i - j);
console.log(i * j);
console.log(i / j);
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((element) => {
  console.log(`Elements of the loop are :` + element);
});
for (let i = 1; i < 3; i++) {
  console.log(`Using the for loop:` + i);
}
let players = {
  name: "msd",
  number: 7,
};
/*
for (let play in players) {
  console.log(`${play}: ${players[play]}`);
}
function printing() {
  console.log(`HELLO`);
}
printing();
function getSongs() {
  setTimeout(() => {
    console.log("songs added");
  });
}
  */
function getMoreSongs() {
  setTimeout(() => {
    console.log("more songs added");
  });
}
function connectToServer(cbnf) {
  console.log(`Connecting to the server..`);
  setTimeout((function) => {
    cbnf();
  }, 2000);
}
function fetchCourses(){
  setTimeout(() => {
    console.log(`Fetching the courses....`);
  }, 2000);
}
connectToserver(function(){});
getSongs();
getMoreSongs();
connectToServer();
