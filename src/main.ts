type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
  address?: {
    street: string;
  };
};

const person1: Person = { name: 'Kyle', age: 28, friends: [] };
const person2: Person = {
  name: 'Sally',
  age: 23,
  friends: [],
  address: {
    street: 'Baker street',
  },
};

person1;
person2;

// type Person = number;

// const person: Person = 123;
// person;
