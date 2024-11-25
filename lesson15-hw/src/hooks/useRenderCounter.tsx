import { useEffect, useRef } from "react";

export const useRenderCounter = (componentName?: string) => {
  const counter = useRef(0);

  useEffect(() => {
    counter.current++;

    console.log(
      componentName
        ? `Component ${componentName} rendered ${counter.current} times`
        : String(counter.current)
    );
  });
};