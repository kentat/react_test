const val5 = ["dog", "cat"];
val5[1] = "bird";

val5.push("monkey");

console.log(val5);

function func1(str) {
  return str;
}

console.log(func1("aaaa"));

const func2 = (str) => {
  return str;
};
const func3 = (str) => {
  return str;
};

const func4 = (str) => str;

console.log(func3("bbbbaaaa"));
console.log(func4("bbbbbbbbaaaa"));

const func5 = (a, b) => {
  return a + b;
};

console.log(func5(3, 2));
console.log(func5(13, 25));
