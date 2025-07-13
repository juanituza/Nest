export const pokemonIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// export const pokemonm = { id: 1, name: "Bulbasaur" };

interface Pokemon {
  id: number;
  name: string;
  age?: number; // Optional property
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
};


console.log(`El pokemon ${bulbasaur.name} tiene el id ${bulbasaur.id}`);
