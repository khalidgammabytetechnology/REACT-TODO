 export const EventProps = () => {

    const Handlewelcomeuser =(user) => {
        alert(`Hey ${user}`)
    }

     const HandleHover =() => {
        alert(`Hey thanks for hover me`)
    }


          return(
            <>
            <WelcomeUser onClick={() => Handlewelcomeuser("khalid")}
                onouseEnter={HandleHover}/>
            </>
          );
};

const WelcomeUser = (props) => {

    const HandleGreeting = () => {
        console.log(`Hey User welcome`);
        props.onClick();
    }
    return(
        <>
        <br/>
        <br/>
        <button onClick={props.onClick}>Click Me</button>
        <button onMouseEnter={props.onouseEnter}>Hover Me</button>
        <button onClick={HandleGreeting}>Greeting</button>
        </>
    )
}