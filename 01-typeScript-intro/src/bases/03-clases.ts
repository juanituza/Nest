import axios from 'axios';
import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';


export class Pokemon {

get imageUrl(): string {
    return `https:///pokemon/${this.id}.png`;
}

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public id: number;
    public name: string;

    scream(){
        console.log(`${this.name.toUpperCase()} grita!`);
        
    }
    speak(){
        console.log(`${this.name} dice hola!`);
    }
    async getMoves() : Promise<Move[]> {
        // const moves = 10;

        const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4`);
        console.log(data.moves[0].move.name.toUpperCase());
        

        return data.moves;

        
    }

}

export const charmander = new Pokemon(4, "Charmander");
// charmander.scream();
// charmander.speak();

charmander.getMoves();

