function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result" + num);
} // void significa que no tiene un return la funcion esta, es decir cumple con su trabajo pero no retorna nada


console.log(printResult(add(5, 12))); // si usamos una funcion que no tiene return con otra por ejemplo la de add retorna undefined

printResult(add(5,12)); // esta es la manera correcta
