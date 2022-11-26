let nam: string = "Shourov";

let check: boolean = true;

let myRegEx: RegExp = /foo/;

const names: string[] = nam.split("");
let myValues: number[] = [1, 2, 3];
const values: Array<number> = [3, 5, 2];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "jack",
  last: "herrington",
};

//**  ------------------------   utility type ------------------------   */

const data: Record<number, string> = {
  10: "megan",
  20: "lori",
};

data[5] = "joe";

console.log(names);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

myValues.forEach((a) => console.log(a));
const multipliedValues = myValues.map((a) => a * 10);
// const multipliedValues2: [number] = [1, 2, 3].map((a) => `${a * 10}`); //Type 'string[]' is not assignable to type '[number]'
