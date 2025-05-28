import "./EV.css"
export const EventHandling = () => {

    // function EventClick(){
    //     alert("hello i am click handling")

    // }

    const EventClick = () => {
        alert("hello i am event handling")

    }

    const HandleClick = (event) => {
        console.log(`hello i am ${event} handling`)

    }
    return (
        <>
            <button onClick={EventClick}>Click Me</button>
            <br />
            <button onClick={() => EventClick()}>Click Me2</button>
            <button onClick={() => HandleClick("khalid")}>click this</button>
            <button onClick={() => HandleClick("aalam")}>click this</button>

        </>
    )
}

