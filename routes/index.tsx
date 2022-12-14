import Counter from "../islands/Counter.tsx";
import { useMachine } from "@xstate/react";
import { counterMachine } from "../xstate/example.xstate.ts";

export default function Home() {
  //  const [state, send] = useMachine(counterMachine);
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
