import { useEffect, useState } from "react"
import "./pokemon.css"
export const HoefetchApi = () => {
    const [apidata, setApidata] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
    const fetchPokemon = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setApidata(data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    console.log(apidata);

    if (apidata) {
        return (
            <section className="container">
                <header>
                    <h1>Lets Catch Pokemon</h1>
                </header>
                <ul className="card-demo">
                    <li className="pokemon-card">
                        <figure>
                            <img src={apidata.sprites.other.dream_world.front_default}
                                alt={apidata.name}
                                className="pokemon-image" />
                        </figure>
                        <h1>{apidata.name}</h1>
                        <div className="grid-three-cols">
                            <p className="pokemon-info">
                                Height: <span> {apidata.height} </span>
                            </p>
                            <p className="pokemon-info">
                                Weight: <span> {apidata.weight}</span>
                            </p>
                            <p className="pokemon-info">
                                speed: <span>{apidata.stats[5].base_stat}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}