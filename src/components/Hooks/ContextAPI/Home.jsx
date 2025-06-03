import { useContext } from "react"
import { BioContext, useBioContext } from "."

export const Home = () => {

    // const { myName, myAge } = useContext(BioContext);

    //CUSTOM HOOK
        const { myName, myAge } = useBioContext();


    return (
        <section
        className={`p-4 h-lvh rounded-full animate-bounce md:bg-amber-400 font-display tracking-wider flex flex-col justify-center items-center
        bg-red-900 text-white`}>
            <h1>HelloContext API. My name is {myName}. i am {myAge} years old</h1>
        </section>
    )
}