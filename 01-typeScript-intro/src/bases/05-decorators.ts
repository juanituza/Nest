class NewPokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number, 
        public name: string,
    ){}

    scream() {
        console.log(`NO QUIERO!!!`);
    }

    talk() {
        console.log(`no quiero hablar`);
    }

}   



const MyDecorator = () => {
    return (target: Function) => { 
       
        return NewPokemon;
    }
}



@MyDecorator()

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number, 
        public name: string,
    ){}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    talk() {
        console.log(`${ this.name }, ${ this.name }`);
    }

}

export const bulbasaur = new Pokemon( 1, 'Bulbasaur' );
export const ivysaur = new Pokemon( 2, 'Ivysaur' );
bulbasaur.scream();
bulbasaur.talk();

