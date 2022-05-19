//Lectura del archivo
let commands = document.getElementById("inputfile");
var commandArray = [];

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
    }else{
      document.location.reload(true)
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
    //Imprimir el comando en la fila
    text = document.createTextNode(commandArray[i]);
    tr = document.createElement("tr");
    tr.appendChild(th);
    tr.appendChild(text);
    //se adiciona
    tbody.appendChild(tr);
  }
}
