//Lectura del archivo
let commands = document.getElementById("inputfile");
var commandArray = [];
let contador = 0;
let contadorComandos = 0;

commands.addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    commandArray = fr.result.split("\n");
    let tbody = document.getElementById("tbody_commands");
    for (let i = 0; i < commandArray.length; i++) {
      if (i < commandArray.length - 1) {
        commandArray[i] = commandArray[i].slice(0, commandArray[i].length - 1);
      }
      //generar la tabla a mano, demas que hay mejores maneras pero la verdad no se :)
      //Imprimir el numero de la fila donde se va a ver el comando
    }
    let spell = new SpellChecker();
    if (spell.spellCheck(commandArray)) {
      llenarTabla(commandArray);
    } else {
      document.location.reload(true);
    }
  };
  console.log(fr.readAsText(this.files[0]));
});

function llenarTabla(commandArray) {
  let tbody = document.getElementById("tbody_commands");
  for (let i = 0; i < commandArray.length; i++) {
    th = document.createElement("th");
    th.setAttribute("scope", "row");
    row = document.createTextNode(i + 1);
    th.appendChild(row);
    td = document.createElement("td")
    //Imprimir el comando en la fila
    text = document.createTextNode(commandArray[i]);
    td.appendChild(text)
    tr = document.createElement("tr");
    tr.setAttribute("id","comando"+contadorComandos)
    tr.appendChild(th);
    tr.appendChild(td);
    //se adiciona
    tbody.appendChild(tr);
    contadorComandos++
  }
}

//Funcion Principal donde se hace la logica de los comandos
var botonMain = document.getElementById("btn-main");
function main() {
  if (contador >= commandArray.length) {
    alert("No hay mas comandos que leer");
    botonMain.disabled = true;
  } else {
    commandArray[contador]
    document.getElementById("comando"+contador).setAttribute("class","table-danger")
    contador++;
  }
}

function ejecutarComando(commandArray) {
  let split = commandArray.split(" ");
  let comando = split[0];
  let Parametros = split[1].split(",");
  switch (comando) {
    case "mov":
      //TODO : llamar funcion move del obeto
      break;
    case "add":
      //TODO : llamar funcion add del obeto
      break;
    case "sub":
      //TODO : llamar funcion sub del obeto
      break;
    case "mul":
      //TODO : llamar funcion muul del obeto
      break;
    case "div":
      //TODO : llamar funcion div del obeto
      break;

    default:
      break;
  }
}

botonMain.addEventListener("click", () => {
  main();
});
