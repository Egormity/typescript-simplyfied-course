import { useReducer, useRef, useState } from 'react';

import Button from './Button';
import Child from './Child';

// App.propTypes = {
//   status: PropTypes.oneOf(["loading", "finished"]),
//   person: PropTypes.exact({
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number,
//   }),
//   something: PropTypes.string,
//   address: PropTypes.shape({
//     street: PropTypes.string.isRequired,
//   }),
//   hello: PropTypes.arrayOf(
//     PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//   ),
// };

// export default function App() {
//   return (
//     <div>
//       <div>
//         <Child>Egormity</Child>
//         <Button outline>Say Hi</Button>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   // const [value, setValue] = useState<string>();
//   const [value, setValue] = useState<number[]>([]);

//   return <input type='text' onChange={e => setValue([1, 2, 3])} />;
// }

// export default function App() {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const value = useRef(0);

//   inputRef.current?.focus();
//   value.current = 10;

//   return <input ref={inputRef} />;
// }

// type State = {
//   count: number;
// };

// type Action =
//   | {
//       type: 'increment';
//       increaseBy: number;
//     }
//   | {
//       type: 'decrement';
//       decreaseBy: number;
//     };

// function reducer(state: State, action: Action) {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + action.increaseBy };
//     case 'decrement':
//       return { ...state, count: state.count - action.decreaseBy };
//     default:
//       throw new Error('asdasdasd');
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
//       <button onClick={() => dispatch({ type: 'increment', increaseBy: 123 })}>+</button>
//       <p>{state.count}</p>
//       <button onClick={() => dispatch({ type: 'decrement', decreaseBy: 1 })}>-</button>
//     </div>
//   );
// }
