import { useEffect, useState } from "react";
import { Button } from "../Button";

export const Counter = () => {
  const [count, setCount] = useState<{ number: number; increment: number }>({
    number: 1,
    increment: 2,
  });

  useEffect(() => {
    console.log("I am useEffect, nice to meet you");
  }, [count.number]);

  return (
    <div>
      <p>Počet: {count.number}</p>
      <Button
        onClick={() => {
          setCount(({ number, increment }) => ({
            number,
            increment,
          }));
        }}
      >
        Zvýšit
      </Button>
    </div>
  );
};