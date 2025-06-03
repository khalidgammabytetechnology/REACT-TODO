import { useContext } from "react"
import { BioContext } from "."

export const Servicec = () => {

    const { myName, myAge } = useContext(BioContext);

    return (
        <section
        className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center
        bg-red-900 text-white`}>
            <h1>HelloContext API (servicec). My name is {myName}. i am {myAge} years old</h1>
        </section>
    )
}