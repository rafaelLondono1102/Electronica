class SpellChecker {
  contador = 1;
  contadorBinario = 8;
  dictCommands = {
    mov: "mov",
    add: "add",
    sub: "sub",
    mul: "mul",
    div: "div",
    and: "and",
    or: "or",
    xor: "xor",
    not: "not",
  };

  dictEspacioMemoria = {
    eax: "eax",
    edx: "edx",
  };

  arregloVariables = [];

  spellCheck(commands) {
    let right = true;
    commands.forEach((Element) => {
      let split = Element.split(" ");
      let command = split[0];
      let parameters = split[1].split(",");
      if ((command == "mul") | (command == "div")) {
        if (parameters.length < 1) {
          alert(
            "Error en los Parametros, verifique la sintaxis de la multi o divi"
          );
          right = false;
        }
      }
      if (!this.dictCommands.hasOwnProperty(command)) {
        alert(
          "Error de escritura en el comando " +
            command +
            ", verifique la escritura"
        );
        right = false;
      } else if ((parameters.length < 1) | (parameters.length > 2)) {
        alert("Error en los Parametros, verifique la sintaxis");
        right = false;
      } else if (
        !this.dictEspacioMemoria.hasOwnProperty(parameters[0]) &&
        parameters[0].length >= 2
      ) {
        this.crearVariables(parameters[0]);
        console.log("1");
      } else if (
        !this.dictEspacioMemoria.hasOwnProperty(parameters[1]) &&
        parameters[1].length >= 2
      ) {
        this.crearVariables(parameters[1]);
        console.log("2");
      }
    });
    return right;
  }

  crearVariables(variable) {
    let variableExiste = false;
    for (let i = 0; i < this.arregloVariables.length; i++) {
      if (variable == this.arregloVariables[i].nombre) {
        variableExiste = true;
      }
    }
    if (!variableExiste) {
      let tablaVariable = document.getElementById("tbody_variables");
      //Imprimir la variable
      let text = document.createTextNode(variable);
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.appendChild(text);

      let tdv = document.createElement("td");
      let tdValue = document.createTextNode("0");
      tdv.setAttribute("id", this.contador);
      tdv.appendChild(tdValue);

      //se adiciona
      tr.appendChild(td);
      tr.appendChild(tdv);
      tablaVariable.appendChild(tr);

      let variables = {
        nombre: variable,
        id: this.contador,
        binario: this.contadorBinario.toString(2),
      };
      this.arregloVariables.push(variables);
      this.contadorBinario++;
      this.contador++;
    }
  }

  getVariables() {
    return this.arregloVariables;
  }
}
