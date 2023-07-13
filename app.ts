function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result" + num);
} // void significa que no tiene un return la funcion esta, es decir cumple con su trabajo pero no retorna nada


console.log(printResult(add(5, 12))); // si usamos una funcion que no tiene return con otra por ejemplo la de add retorna undefined

printResult(add(5,12)); // esta es la manera correcta


// function types

let combineValues: (a: number, b:number) => number; // esto significa que es un tipado function pero que a la vez recibe dos parametros que son de tipo number y el tipo del return es number

combineValues = add;

console.log(combineValues(8, 8));

// function types and callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result)
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  
})
