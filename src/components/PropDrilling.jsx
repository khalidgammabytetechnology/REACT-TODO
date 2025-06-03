export const ParentComponent = () => {
  return (
    <section
      className={`p-4 w-screen  h-lvh font-display tracking-wider flex flex-col justify-center  items-center bg-green-900 text-blue-400`}
    >
      <h1>Component A</h1>
      <ChildComponent data="React JS" />
    </section>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h1>Hello, I am component B</h1>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <h1>Hello, I am component C</h1>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <>
      <h1>Hello, I love {props.data}</h1>
    </>
  );
};