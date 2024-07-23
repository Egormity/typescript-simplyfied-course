// type Person = {
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
//   friends: string[];
//   address?: {
//     street: string;
//   };
// };

// const person1: Person = { name: 'Kyle', age: 28, friends: [] };
// const person2: Person = {
//   name: 'Sally',
//   age: 23,
//   friends: [],
//   address: {
//     street: 'Baker street',
//   },
// };

// person1;
// person2;

// type Person = number;

// const person: Person = 123;
// person;

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

// async function wait(duration: number) {
//   return await fetch('asd');
// }

// wait(1000).then(value => console.log(value.json()));

// type Todo = {
//   title?: string;
//   completed?: boolean;
//   address?: {
//     street?: string;
//   };
// };

// // type FormTodo = Required<Pick<Todo, 'title'>> & Omit<Todo, 'title'>;
// type FormTodo = Required<Pick<Todo, 'title'>> & Todo;

// const todo: FormTodo = {
//   completed: true,
// };

// type Todo = {
//   title?: string;
//   completed?: boolean;
//   address?: {
//     street?: string;
//   };
// };

// type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T;
// type PartialPick<T, Key extends keyof T> = Required<Pick<T, Key>> & Omit<T, Key>;

// type FormTodo = RequiredPick<Todo, 'title'>;

// const todo: FormTodo = {
//   completed: true,
// };

// function checkLength(a: string, b: number) {
//   return a.length < b;
// }

// type ReturnOfLengthCheck1 = ReturnType<typeof checkLength>;

// type Func = () => void;
// type ReturnOfLengthCheck2 = Parameters<typeof checkLength>;
// type ReturnOfLengthCheck3 = ReturnType<Func>;

// type Person = {
//   name: string;
//   age: number;
// };

// // type PeopleGroupedByName = {
// //   [index: string]: Person[];
// // };

// type PeopleGroupedByName = Record<Person['name'], Person>;

// type Todo = {
//   title: string;
//   completed: boolean;
// };

// const todo = {
//   title: 'asd',
//   completed: false,
// } as const;

// type Test = typeof todo;

// type FinalTodo = Readonly<Todo>;

// Object.freeze();

// type Async = Promise<Promise<string>>;

// type Value = Awaited<Async>;

// async function doSmth() {
//   return 3;
// }

// type Test = Awaited<ReturnType<typeof doSmth>>;

// type Todo = {
//   title: string;
//   priority: 'High' | 'Normal' | 'Low' | 'asdasdasd';
//   isComplete: boolean;
//   description?: string;
//   dueDate: Date | string;
// };

// function extendTodo(todo: Todo) {
//   // if (typeof todo.dueDate === 'string') console.log(todo.dueDate);
//   // if (todo.dueDate instanceof Date) console.log(todo.dueDate);
//   // else console.log(todo.dueDate);

//   // if (todo.dueDate instanceof Date) {
//   //   // SMART TYPESCRIPT
//   //   return;

//   // todo.description?.length;
//   // console.log(todo.dueDate);

//   switch (todo.priority) {
//     case 'High':
//       console.log(todo.priority);
//       break;
//     case 'Normal':
//       console.log(todo.priority);
//       break;
//     case 'Low':
//       console.log(todo.priority);
//       break;
//     case 'asdasdasd':
//       console.log(todo.priority);
//       break;
//     default:
//       const exhaustiveCheck: never = todo.priority;
//       return exhaustiveCheck;
//   }
// }

// // const form = document.querySelector<HTMLFormElement>('.form');
// // form.addEventListener('submit', () => {});
// const form = document.querySelector<HTMLFormElement>('.form')!;
// form.addEventListener('submit', () => {});

// function func(data: unknown) {
//   if (data !== null && typeof data === 'object' && 'name' in data && typeof data.name === 'string')
//     console.log(data.name.length);
// }

// type Todo = {
//   title: string;
// };

// const a = 2;
// (a as string).length;

// function func(data: unknown) {
//   fetch('asdasdas')
//     .then(res => res.json())
//     .then(data => data as Todo)
//     .then(todo => console.log(todo));
// }

// type Todo = {
//   title: string;
//   dueDate: string | Date;
//   isComplete: boolean;
// };

// const todo = {
//   title: 'asdasd',
//   dueDate: new Date(),
//   isComplete: true,
// } satisfies Todo;

// todo.dueDate.setDate(4);

// type SuccessResponse = {
//   status: 'Success';
//   data: { id: string; name: string };
// };

// type ErrorResponse = {
//   status: 'Error';
//   errorMessage: string;
// };

// type UserApiResponse = SuccessResponse | ErrorResponse;

// function handleResponse(res: UserApiResponse) {
//   switch (res.status) {
//     case 'Error':
//       console.log(res.errorMessage);
//       break;
//     case 'Success':
//       console.log(res.data.id);
//       break;
//     default:
//       const exhaustiveCheck: never = res.status;
//       return exhaustiveCheck;
//   }
// }

// handleResponse;

// function sum(nums: number[]): number;
// function sum(a: number, b: number): number;
// function sum(a: number | number[], b?: number) {
//   if (Array.isArray(a)) return a.reduce((c, a) => a + c, 0);
//   if (b) return a + b;
// }

// const s1 = sum([1, 2]);
// const s2 = sum(1, 2);
// const s3 = sum([1, 2], 3);

// console.log(s1, s2, s3);

// type Person = {
//   name: string;
// };

// type Todo = {
//   title: string;
// };

// function print(obj: Person | Todo) {
//   if (isPerson(obj)) console.log(obj.name);
//   console.log(obj.title);
//   return;
// }

// function isPerson(obj: Person | Todo): obj is Person {
//   return 'name' in obj;
// }

// const PRIORITIES = ['High', 'Medium', 'Low'] as const;
// type Priority = (typeof PRIORITIES)[number];
// type Todo = {
//   title: string;
//   description: string;
// };

// function func(todo: Todo) {
//   if (isPriority(todo.description)) todo.description;
//   else todo.description;
// }

// function isPriority(description: string): description is Priority {
//   return PRIORITIES.includes(description as Priority);
// }

// type Options = {
//   debig: boolean;
//   format: {
//     tabs: boolean;
//     tabWidth: number;
//   };
// };

// function printNumber(num: number, options?: Options) {
//   console.log(num);
// }

// // @ts-expect-error
// printNumber(3, { debug: false, format: { tabs: true } });

import { times } from 'lodash';

times(4);

console.superLog();
