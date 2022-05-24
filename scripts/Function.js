class Function {
  constructor(parametro1, parametro2) {
    this.parametro1 = parametro1;
    this.parametro2 = parametro2;
  }
  arrayVariables = [];

  dictBinary = {
    mov: "00000000",
    add: "00000001",
    sub: "00000010",
    mul: "00000011",
    div: "00000100",
    and: "00000101",
    or: "00000110",
    xor: "00000111",
    not: "00001000",
    eax: "00000000",
    edx: "00000011",
  };

  cadenaBinaria = "";
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
      if (
        (this.parametro1 == this.arrayVariables[i].nombre) |
        (this.parametro2 == this.arrayVariables[i].nombre)
      ) {
        return String(this.arrayVariables[i].id);
      }
    }
  }

  getBinario() {
    for (let i = 0; i < this.arrayVariables.length; i++) {
      if (
        (this.parametro1 == this.arrayVariables[i].nombre) |
        (this.parametro2 == this.arrayVariables[i].nombre)
      ) {
        return this.arrayVariables[i].binario;
      }
    }
  }

  //--------------- Funciones Principales ---------------------
  //Funciones con 2 parametros
  mov() {
    if ((this.parametro1 == "eax") & (this.parametro2 == "edx")) {
      let edxValue = document.getElementById("EDX-value").innerHTML;
      document.getElementById("EAX-value").innerHTML = edxValue;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if ((this.parametro1 == "edx") & (this.parametro2 == "eax")) {
      let eaxValue = document.getElementById("EAX-value").innerHTML;
      document.getElementById("EDX-value").innerHTML = eaxValue;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      (this.parametro1 == "edx") &
      this.parametro2.includes("variable")
    ) {
      let idVal = this.getId();
      let val = document.getElementById(idVal).innerHTML;
      document.getElementById("EDX-value").innerHTML = val;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.getBinario() +
        " ";
    } else if (
      (this.parametro1 == "eax") &
      this.parametro2.includes("variable")
    ) {
      let idVal = this.getId();
      let val = document.getElementById(idVal).innerHTML;
      document.getElementById("EAX-value").innerHTML = val;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.getBinario() +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "eax")
    ) {
      let idVal = this.getId();
      let val = (document.getElementById("EAX-value").innerHTML = val);
      document.getElementById(idVal).innerHTML = val;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.getBinario() +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "edx")
    ) {
      let idVal = this.getId();
      let val = (document.getElementById("EDX-value").innerHTML = val);
      document.getElementById(idVal).innerHTML = val;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.getBinario() +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else {
      let idVal = this.getId();
      document.getElementById(idVal).innerHTML = this.parametro2;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.getBinario() +
        " " +
        Number(this.parametro2).toString(2) +
        " ";
    }
  }

  add() {}

  sub() {}

  //Funciones con solo 1 parametro
  mul() {
    console.log(this.arrayVariables);
    let eaxVal = Number(document.getElementById("EAX-value").innerHTML);
    let idVal = this.getId();
    console.log(idVal);
    let variableVal = Number(document.getElementById(idVal).innerHTML);

    let mult = eaxVal * variableVal;
    document.getElementById("EDX-value").innerHTML = mult;
    this.cadenaBinaria +=
      " " + this.dictBinary["mul"] + " " + this.getBinario();
  }

  div() {
    let eaxVal = Number(document.getElementById("EAX-value").innerHTML);
    let idVal = this.getId();
    console.log(idVal);
    let variableVal = Number(document.getElementById(idVal).innerHTML);

    let div = eaxVal / variableVal;
    document.getElementById("EDX-value").innerHTML = div;
    alert("comando div");
    this.cadenaBinaria +=
      " " + this.dictBinary["div"] + " " + this.getBinario();
  }
}
