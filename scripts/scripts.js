//Lectura del archivo
let commands = document.getElementById("inputfile");
var commandArray = [];
let contador = 0;
let contadorComandos = 0;
let funcion = new Function("", "");
let variables = [];

commands.addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    commandArray = fr.result.split("\n");
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
    variables = spell.getVariables();
    console.log(variables);
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
    td = document.createElement("td");
    //Imprimir el comando en la fila
    text = document.createTextNode(commandArray[i]);
    td.appendChild(text);
    tr = document.createElement("tr");
    tr.setAttribute("id", "comando" + contadorComandos);
    tr.appendChild(th);
    tr.appendChild(td);
    //se adiciona
    tbody.appendChild(tr);
    contadorComandos++;
  }
}

//Funcion Principal donde se hace la logica de los comandos
var botonMain = document.getElementById("btn-main");
function main() {
  if (contador >= commandArray.length) {
    alert("No hay mas comandos que leer");
    botonMain.disabled = true;
  } else {
    document
      .getElementById("comando" + contador)
      .setAttribute("class", "table-danger");
    ejecutarComando(commandArray[contador]);
    contador++;
  }
}

function ejecutarComando(commandArray) {
  funcion.setArrayVariables(variables);
  let split = commandArray.split(" ");
  let comando = split[0];
  let parametros = split[1].split(",");
  switch (comando) {
    case "mov":
      funcion.setParametro1(parametros[0]);
      funcion.setParametro2(parametros[1]);
      funcion.mov();
      break;
    case "add":
      funcion.setParametro1(parametros[0]);
      funcion.setParametro2(parametros[1]);
      funcion.add();
      break;
    case "sub":
      funcion.setParametro1(parametros[0]);
      funcion.setParametro2(parametros[1]);
      funcion.sub();
      break;
    case "mul":
      funcion.setParametro1(parametros[0]);
      funcion.setParametro2(parametros[1]);
      funcion.mul();
      break;
    case "div":
      funcion.setParametro1(parametros[0]);
      funcion.setParametro2(parametros[1]);
      funcion.div();
      break;
    case "and":
      funcion.setParametro1(parametros[0]);
      funcion.setParametro2(parametros[1]);
      funcion.and();
      break;
    case "xor":
      funcion.setParametro1(parametros[0]);
      funcion.setParametro2(parametros[1]);
      funcion.xor();
      break;
    case "or":
      funcion.setParametro1(parametros[0]);
      funcion.setParametro2(parametros[1]);
      funcion.or();
      break;
    case "not":
      funcion.setParametro1(parametros[0]);
      funcion.setParametro2(parametros[1]);
      funcion.not();
      break;

    default:
      break;
  }
}

botonMain.addEventListener("click", () => {
  main();
});

let exportBtn = document.getElementById("btn-export");
function saveFile(data, filename, type) {
  var file = new Blob([data], { type: type });
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  else {
    // Others
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

exportBtn.addEventListener("click", () => {
  saveFile(funcion.getCadenaBinaria(), "binario.txt", "text/plain");
});
