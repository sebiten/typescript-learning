// OBJECTS

// const person: {
//   name: string;
//   age: number; // en estos objetos(objetos con tipados de informacion) se utilizan ; no las ,
// } = {
//   // good way with aditional types to name and age
//   name: "Sebastian",
//   age: 24,
// };

const persondos: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // TUPLA es cuando llega un indice y la descripcion de dicho indice

} = {
  name: "Sebastian",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: [2, 'author']
};

persondos.role.push('admin') // funciona porqyue push esta permitido en tuplas
// personados.role[1] = 10; no funciona!

// ENUM 
enum Role { ADMIN, READ_ONLY, AUTHOR };


 const person = {
  name: "Sebastian",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
  
};

// if (person.role === ADMIN) {
//   console.log('is admin');
  
// }

// ARRAYS

// let favoriteactivities: any[]; ====> este type any soporta todo los tipos de datos

let favoriteactivities: string[];
favoriteactivities = ["Sports"];

console.log(persondos.name);

for (const hobby of persondos.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());  !! ERROR MAL MAP ES PARA OBJETOS NO PARA STRING
}
