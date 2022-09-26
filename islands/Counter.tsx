import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { useMachine } from "@xstate/react";
import { counterMachine } from "../xstate/example.xstate.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [state, send] = useMachine(counterMachine);
  console.log('state', state);
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
