import { useMemo, useState } from 'react';

function UseMemo() {
  const [count, setCount] = useState(0);
  const expensiveFunction = useMemo(() => {
    console.log('Expensive function called.');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Result of expensive function: {expensiveFunction}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemo
