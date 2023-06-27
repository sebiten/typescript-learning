  // OBJECTS

const person: {
  name: string;
  age: number; // en estos objetos(objetos con tipados de informacion) se utilizan ; no las ,
} = {
  // good way with aditional types to name and age
  name: "Sebastian",
  age: 24,
};

const persondos = {
  name: "Sebastian",
  age: 24,
  hobbies: ['Sports', 'Cooking']
};

// ARRAYS

// let favoriteactivities: any[]; ====> este type any soporta todo los tipos de datos

let favoriteactivities: string[];
favoriteactivities = ['Sports']

console.log(persondos.name);

for (const hobby of persondos.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());  !! ERROR MAL MAP ES PARA OBJETOS NO PARA STRING
  
}
