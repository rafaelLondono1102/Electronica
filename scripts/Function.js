class Function {
  constructor(parametro1, parametro2) {
    this.parametro1 = parametro1;
    this.parametro2 = parametro2;
  }
  arrayVariables = [];
  //SETTERS
  setParametro1(parametro1) {
    this.parametro1 = parametro1;
  }
  setParametro2(parametro2) {
    this.parametro2 = parametro2;
  }
  setArrayVariables(arrayVariables) {
    this.arrayVariables = arrayVariables;
  }
  //GETTERS
  getParametro1() {
    return this.parametro1;
  }
  getParametro2() {
    return this.parametro2;
  }

  getId() {
    for (let i = 0; i < this.arrayVariables.length; i++) {
      console.log(this.arrayVariables[i].id)
      if (
        (this.parametro1 == this.arrayVariables[i].nombre) |
        (this.parametro2 == this.arrayVariables[i].nombre)
      ) {
        return String(this.arrayVariables[i].id);
      }
    }
  }

  //--------------- Funciones Principales ---------------------
  mov() {}

  add() {}

  sub() {}

  mul() {
    console.log(this.arrayVariables)
    let eaxVal = Number(document.getElementById("EAX-value").innerHTML);
    let idVal = this.getId()
    console.log(idVal)
    let variableVal = Number(document.getElementById(idVal).innerHTML)

    let mult = eaxVal * variableVal
    document.getElementById("EDX-value").innerHTML = mult
    alert("comando mul")
  }

  div() {}
}
