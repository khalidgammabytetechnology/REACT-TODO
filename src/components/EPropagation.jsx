import "./EV.css"
export const EventPropagation = () => {

    const HandleGrandParent = () => {
        console.log(`GrandParent Clicked`)
    }

    const HandleParentClick = () => {
        console.log(`Parent Clicked`)
    }

    const HandleChildClick = (event) => {
        console.log(event);
        event.stopPropagation();
        console.log(`Child Clicked`)
    }
    return (
        
        <section>
            <br/>
            <br/>
            <div className="g-div" onClickCapture ={HandleGrandParent}>
                <div className="p-div" onClickCapture={HandleParentClick}>
                    <button className="c-div" onClickCapture={HandleChildClick}>
                        Click me
                    </button>
                </div>
            </div>
        </section>
    )
}