import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const getInfoPok = (url) => {
    try {
      axios.get(url).then((res) =>
        // console.log(res.data)
        setSelectedPokemon({
          id: res.data.id,
          img: res.data.sprites.front_default,
          height: res.data.height,
          attack: res.data.stats[1].base_stat,
          name: res.data.name,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/1/").then((res) =>
      setSelectedPokemon({
        id: res.data.id,
        img: res.data.sprites.front_default,
        height: res.data.height,
        attack: res.data.stats[1].base_stat,
        name: res.data.name,
      })
    );
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => setPokemons(res.data.results));
  }, []);
  return (
    <div className="bg-[#131313] w-screen h-screen flex justify-center items-center">
      <div className="w-2/3 h-2/3  flex flex-col gap-4 [&>div]:flex [&>div]:justify-between">
        <div>
          <span className="uppercase border border-white px-2 py-1 text-white text-[12px]">
            покемоны api
          </span>
          <div className="text-white flex text-[12px] gap-2">
            <img src="/Icon.svg" alt="" />
            <span>Нажмите на нужного Покемона</span>
          </div>
        </div>
        <div className="h-5/6 flex justify-center items-center">
          <div className="flex flex-wrap gap-2 w-1/2 justify-center items-center ">
            {pokemons.map((pokemon) => (
              <button
                className="text-white text-[20px] px-4 py-2 bg-[#1986EC] rounded-full cursor-pointer"
                key={pokemon.name}
                onClick={() => getInfoPok(pokemon.url)}
              >
                {pokemon.name}
              </button>
            ))}
          </div>
          <div
            className="w-1/2 h-full flex flex-col justify-between p-8 text-white bg-black bg-no-repeat bg-contain bg-center"
            style={{ backgroundImage: `url(${selectedPokemon.img})` }}
          >
            <h1 className="text-[48px] text-[#A0A0A0] capitalize">
              {selectedPokemon.name}
            </h1>
            <div className="flex flex-col gap-2 text-[#A0A0A0] text-[17px]">
              {/* <span>Снялся в {{}} сериях</span> */}
              {/* апи не дает количество серий */}
              <span>id: {selectedPokemon.id}</span>
              <span>height: {selectedPokemon.height}</span>
              <span>attack: {selectedPokemon.attack}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
