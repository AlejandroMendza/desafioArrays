//Declaración de la Mates
class Mates {
  constructor(id, mate, virola, cuero, base, precio) {
    //propiedades o atributos de nuestra clase
    (this.id = id),
      (this.tipo = mate),
      (this.virola = virola),
      (this.cobertura = cuero),
      (this.base = base),
      (this.precio = precio);
  }
  //Método de la class
  mostrarDatos() {
    console.log(
      `El mate ${this.tipo} cuenta con una virola de ${this.virola} cobertura de ${this.cobertura}, base de ${this.base} y su precio es $ ${this.precio}. La id del mate es ${this.id}`
    );
  }
}
//Instanciación de objetos
let estanteria = [];
const mate1 = new Mates(
  1,
  "Imperial Premium",
  "plata moldeada",
  "cuero vaqueta negro",
  "plata pulida",
  7000
);
estanteria.push(mate1);
const mate2 = new Mates(
  2,
  "Imperial",
  "plata moldeada",
  "cuero vaqueta negro",
  "cuero prensado",
  5000
);
estanteria.push(mate2);
const mate3 = new Mates(
  3,
  "Torpedo",
  "acero pulido",
  "cuero marrón",
  "cuero prensado",
  4000
);
estanteria.push(mate3);
const mate4 = new Mates(
  4,
  "Acero Inox",
  "acero pulido",
  "acero pintado al relieve",
  "acero pulido",
  3000
);
estanteria.push(mate4);

//Array directo
const variedades = [mate1, mate2, mate3, mate4];

//FUNCIONES:
//agregar un nuevo mate
function nuevoMate() {
  let mateIngresado = prompt("Ingrese el tipo de mate");
  let virolaIngresado = prompt("Ingrese el tipo de virola");
  let coberturaIngresado = prompt("Ingrese el tipo de cobertura");
  let baseIngresado = prompt("Ingrese el tipo de base");
  let precioIngresado = parseInt(prompt("ingrese el precio"));
  //Método length
  let mateCreado = new Mates(
    variedades.length + 1,
    mateIngresado,
    virolaIngresado,
    coberturaIngresado,
    baseIngresado,
    precioIngresado
  );
  console.log(mateCreado);
  //Push de mateCreado al array
  estanteria.push(mateCreado);
}
//mostrar catálogo

function mostrarCatalogo() {
  alert(`Podrá ver nuestro catálogo en la consola:`);
  for (let libro of estanteria) {
    libro.mostrarDatos();
  }
}
function eliminarMate() {
  let idEliminar = prompt("Ingrese la id del mate a eliminar");
  for (let mateBuscado of estanteria) {
    if (mateBuscado.id == idEliminar) {
      console.log("Este es el libro " + mateBuscado.titulo);
      estanteria.splice(idEliminar - 1, 1);
      console.log(estanteria);
    }
  }
}
//Function que consulte al usuario opción deseada
function preguntarOpcion() {
  let opcion = parseInt(
    prompt(`Ingrese el número de la opción que desea realizar:
                      1 - Ver catálogo de mates
                      2 - Agregar un mate a nuestro catálogo 
                      3 - Eliminar un mate de nuestro catálogo 
                      0 - Para salir`));
  menu(opcion);
}

//Function menú
function menu(opcionSeleccionada) {
  switch (opcionSeleccionada) {
    case 0:
      salir = true;
      alert(`Muchas gracias por visitar nuestra página ¡Vuelve pronto!`);
      break;
    case 1:
      mostrarCatalogo();

      break;
    case 2:
      nuevoMate();
      break;
    case 3:
      eliminarMate();
      break;
    default:
      alert(`Ingrese una opción válida`);
  }
}

//CÓDIGO:
let salir;
while (salir != true) {
  preguntarOpcion();
}
