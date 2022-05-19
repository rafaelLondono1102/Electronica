class SpellChecker {
  dictCommands = {
    mov: "mov",
    add: "add",
    sub: "sub",
    mul: "mul",
    div: "div",
    and: "and",
    xor: "xor",
  };

  spellCheck(commands) {
    let right = true;
    commands.forEach((Element) => {
      let split = Element.split(" ");
      let command = split[0];
      let parameters = split[1].split(",");
      if (!this.dictCommands.hasOwnProperty(command)) {
        alert(
          "Error de escritura en el comando " +
            command +
            ", verifique la escritura"
        );
        right = false;
      } else if ((parameters.length <= 1) | (parameters.length > 2)) {
        alert("Error en los Parametros, verifique la sintaxis");
        right = false;
      }
    });
    return right;
  }
}
