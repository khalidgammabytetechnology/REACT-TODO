import { useState, useEffect } from "react"

export const State = () => {
    const [count, setCount] = useState(2);

    const IncrementClick = () => {
        setCount(() => count + 2);
    };

    //UseState
    useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 10);
    }, 1000);
  });

    return (
        <section className="main-div">
            <br />
            <br />
            <h1>{count}</h1>
            <button onClick={IncrementClick}>Inacrement</button>
        </section>
    );
};