import { useEffect, useState } from "react"


export const Pokemon = ({pokemon}) => {

    const [pok, setPok] = useState ([])

    const getPokemon = async ()=> {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        let data = await response.json()
        setPok (data)
    }

useEffect(() => {
    if(pokemon !==""){
    getPokemon()
}
}, [pokemon])    


return <>
    <h1>Buscando Pokemon... {pok.name}</h1>
    <img src={pok.sprites.front_default} alt="" />


</>

}