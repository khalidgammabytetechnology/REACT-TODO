import { useState } from "react";

export const ShortCircuitExample = () => {

    const [isLogein, setIsLogein] = useState(true);
    const [user, setUser] = useState();

    return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {isLogein && <p>You are logged in!</p>}

      {user ? `Hello ${user}` : "Plz log in!"}

      <div className="grid-three-cols">
        <button onClick={() => setIsLogein(!isLogein)}>
          Toggle Login State
        </button>
        <button onClick={() => setUser("Khalid Manasiya")}>Set User</button>
        <button onClick={() => setUser("")}>Clear User</button>
      </div>
    </section>
  );
};
