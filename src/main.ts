// type Option = {
//   debugMode?: boolean;
//   indentLevel?: number;
// };

// function printNameAndAge(name: string, { debugMode = false, indentLevel }: Option = {}) {
//   console.log(name, debugMode, indentLevel);
// }
// printNameAndAge('qwerty', { debugMode: true, indentLevel: 123 });

// function sum(...nums: number[]) {
//   console.log(nums);
// }

// sum(1, 2, 4);
// sum(12, 25, 42);

// type PrintNameFunc = (num: number) => void;
// function sumWithCallback(a: number, b: number, func: PrintNameFunc) {
//   func(a + b);
// }
// sumWithCallback(1, 2, a => console.log(a));

// let id: string | number = '7';
// id = 7;

// type Todo = {
//   name: string;
//   status: 'Completed' | 'Incompleted' | 'Draft';
// };

// type Person = {
//   name: string;
//   age: number;
// };

// type TodoPerson = Todo | Person;

// const todo: Todo = { name: 'Laundry', status: 'Draft' };
// todo;

// type Person = {
//   name: string;
//   age: number;
// };

// type Id = {
//   id: string;
// };

// type PersonWithId = Person & Id;

// const person1: Person = { name: 'Pidor', age: 25 };
// const person2: PersonWithId = { name: 'Pidor', age: 25, id: 'mi-hNASBRH' };

// interface Person {
//   name: string;
//   age: number;
// }

// interface Id {
//   id: string;
// }

// interface PersonWithId extends Person, Id {
//   sayHi: string;
// }

// const person1: Person = { name: 'Pidor', age: 25 };
// const person2: PersonWithId = { name: 'Pidor', age: 25 };

// type Person = {
//   readonly id: string;
//   name: string;
//   age: number;
// };

// const person: Person = { id: '123asfkp43t', name: 'Kayle', age: 23 };
// person.id = 'hi';

// type Person = {
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
// };

// function getValue(key: keyof Person, person: Person) {
//   return person[key];
// }

// const age = getValue('age', { name: 'Kyle', age: 22 });
// console.log(age);

// function groupBy() {}

// const person = { name: 'Kyle', age: 23, isProgrammer: true };
// const people: (typeof person)[] = [];

// people.push(person);
// people.push({ name: 'Sally', age: 123 });
// people.push(2);

// function sayHi(name: string) {
//   console.log(name);
// }
// type FuncType = typeof sayHi;

// type Person = {
//   name: string;
//   skillLevel: 'Beginner' | 'Intermmediate' | 'Expert' | 'Master';
// };

// function printSkillLevel(skillLevel: Person['skillLevel']) {
//   console.log(skillLevel);
// }

// const person: Person = { name: 'Kyle', skillLevel: 'Expert' };
// printSkillLevel(person.skillLevel);

// type Person = {
//   name: string;
//   skillLevel: 'Beginner' | 'Intermmediate' | 'Expert';
// };

// type PeopleGroupedBySkillLevel = {
//   [index: string]: Person[];
// };

// const a: PeopleGroupedBySkillLevel = {
//   asd: [{ name: 'Kyle', skillLevel: 'Beginner' }],
// };
// a;

// const a = {
//   name: 'Kyle',
//   age: 23,
// };

// type A = (typeof a)[keyof typeof a];

// let a = 1 as const;
// const b = 1 as const;
// a = true;

// const nums = ['1', '2', '3'] as const;
// const a = nums[0];
// nums.push('asdasd');

// const SKILL_LEVELS = ['B', 'I', 'E'] as const;

// type Person = {
//   skillLevel: (typeof SKILL_LEVELS)[number];
// };

// SKILL_LEVELS.forEach(el => console.log(el));

// const person = {
//   name: 'Kyle',
//   age: 28,
//   address: {
//     street: 'Main',
//   },
// } as const;

// person.address.street = ' 123';

// const person = {
//   name: 'Kyle',
//   age: 24,
// };

// type Tuple = [string, boolean];
// const a: Tuple = ['asdas', false, 123];
// Object.entries(person).forEach(([key, value]) => console.log(key, value));

// const input = document.querySelector<HTMLInputElement>('.input');
// console.log(input?.value);

// function getSecond<ArrayType>(array: ArrayType[]) {
//   return array[1];
// }
// const a = [1, 2, 3];
// const b = ['asd', 'asd', 'asd'];
// const c = ['asd', true, 'asd'];

// const ret1 = getSecond(a);
// const ret2 = getSecond(b);
// const ret3 = getSecond(c);

// const a = new Set<string>();
// a.add('asdasd');
// a.add(2);

// type APIResponse<TData extends object = { status: number }> = {
//   data: TData;
//   error: boolean;
// };

// const a: APIResponse = {
//   data: { status: 2 },
//   error: false,
// };

// type UserResponse = APIResponse<{ name: string; age: number }>;
// type BlogResponse = APIResponse<{ title: string }>;

// const a: UserResponse = {
//   data: { name: 'asdasd', age: 123 },
//   error: false,
// };

// const b: BlogResponse = {
//   data: { title: 'asdasd' },
//   error: false,
// };

// type APIResponse<TData> = {
//   data: TData;
//   error: boolean;
// };

// const a: APIResponse<Array<number>> = {
//   data: [1, 2, 3],
//   error: false,
// };

// const b: Array<number> = [1, 23, 4];

// function aToO<T>(array: [string, T][]) {
//   const obj: {
//     [index: string]: T;
//   } = {};

//   array.forEach(([key, value]) => (obj[key] = value));

//   return obj;
// }

// const arr: [string, any][] = [
//   ['key1', 1],
//   ['key2', 2],
//   ['key3', true],
// ];

// const test = aToO(arr);

// function wait(duration: number) {
//   return new Promise<string>(res => setTimeout(res('hi'), duration));
// }

async function wait(duration: number) {
  return await fetch('asd');
}

wait(1000).then(value => console.log(value.json()));
