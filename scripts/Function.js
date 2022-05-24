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
  getId(parametro) {
    let id;
    if (parametro == "parametro1") {
      id = this.getIdParametro1();
    } else {
      id = this.getIdParametro2();
    }
    return id;
  }

  getIdParametro1() {
    for (let i = 0; i < this.arrayVariables.length; i++) {
      if (this.parametro1 == this.arrayVariables[i].nombre) {
        return String(this.arrayVariables[i].id);
      }
    }
  }

  getIdParametro2() {
    for (let i = 0; i < this.arrayVariables.length; i++) {
      if (this.parametro2 == this.arrayVariables[i].nombre) {
        return String(this.arrayVariables[i].id);
      }
    }
  }

  getBinario(parametro) {
    let string;
    if (parametro == "parametro1") {
      string = this.getBinarioParametro1();
    } else {
      string = this.getBinarioParametro2();
    }
    return string;
  }

  getBinarioParametro1() {
    for (let i = 0; i < this.arrayVariables.length; i++) {
      if (this.parametro1 == this.arrayVariables[i].nombre) {
        return this.arrayVariables[i].binario;
      }
    }
  }

  getBinarioParametro2() {
    for (let i = 0; i < this.arrayVariables.length; i++) {
      if (this.parametro2 == this.arrayVariables[i].nombre) {
        return this.arrayVariables[i].binario;
      }
    }
  }

  getCadenaBinaria() {
    return this.cadenaBinaria;
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
      let idVal = this.getId("parametro2");
      let val = document.getElementById(idVal).innerHTML;
      document.getElementById("EDX-value").innerHTML = val;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      (this.parametro1 == "eax") &
      this.parametro2.includes("variable")
    ) {
      let idVal = this.getId("parametro2");
      let val = document.getElementById(idVal).innerHTML;
      document.getElementById("EAX-value").innerHTML = val;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "eax")
    ) {
      let idVal = this.getId("parametro1");
      let val = document.getElementById("EAX-value").innerHTML;
      document.getElementById(idVal).innerHTML = val;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "edx")
    ) {
      let idVal = this.getId("parametro1");
      let val = (document.getElementById("EDX-value").innerHTML = val);
      document.getElementById(idVal).innerHTML = val;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else {
      let idVal = this.getId("parametro1");
      document.getElementById(idVal).innerHTML = this.parametro2;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["mov"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        Number(this.parametro2).toString(2) +
        " ";
    }
  }

  add() {
    if ((this.parametro1 == "eax") & (this.parametro2 == "edx")) {
      let valEax = Number(document.getElementById("EAX-value").innerHTML);
      let valEdx = Number(document.getElementById("EDX-value").innerHTML);
      let sum = valEax + valEdx;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if ((this.parametro1 == "edx") & (this.parametro2 == "eax")) {
      let valEax = Number(document.getElementById("EAX-value").innerHTML);
      let valEdx = Number(document.getElementById("EDX-value").innerHTML);
      let sum = valEax + valEdx;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      (this.parametro1 == "eax") &
      this.parametro2.includes("variable")
    ) {
      let valEax = Number(document.getElementById("EAX-value").innerHTML);
      let val = Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      );
      let sum = valEax + val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      (this.parametro1 == "edx") &
      this.parametro2.includes("variable")
    ) {
      let valEdx = Number(document.getElementById("EDX-value").innerHTML);
      let val = Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      );
      let sum = valEdx + val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "edx")
    ) {
      let valEdx = Number(document.getElementById("EDX-value").innerHTML);
      let val = Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      );
      let sum = valEdx + val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "eax")
    ) {
      let valEax = Number(document.getElementById("EAX-value").innerHTML);
      let val = Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      );
      let sum = valEax + val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      this.parametro2.includes("variable")
    ) {
      let val1 = Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      );
      let val2 = Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      );
      console.log(val1);
      console.log(val2);
      let sum = val1 + val2;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      ((this.parametro2 != "eax") |
        (this.parametro2 != "edx") |
        !this.parametro2.includes("variable"))
    ) {
      console.log("holiwi");
      let val1 = Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      );
      let sum = val1 + Number(this.parametro2);
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        Number(this.parametro2).toString(2) +
        " ";
    }
  }

  sub() {
    if ((this.parametro1 == "eax") & (this.parametro2 == "edx")) {
      let valEax = Number(document.getElementById("EAX-value").innerHTML);
      let valEdx = Number(document.getElementById("EDX-value").innerHTML);
      let diff = valEax - valEdx;
      document.getElementById("EAX-value").innerHTML = diff;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if ((this.parametro1 == "edx") & (this.parametro2 == "eax")) {
      let valEax = Number(document.getElementById("EAX-value").innerHTML);
      let valEdx = Number(document.getElementById("EDX-value").innerHTML);
      let diff = valEdx - valEax;
      document.getElementById("EAX-value").innerHTML = diff;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      (this.parametro1 == "eax") &
      this.parametro2.includes("variable")
    ) {
      let valEax = Number(document.getElementById("EAX-value").innerHTML);
      let val = Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      );
      let diff = valEax - val;
      document.getElementById("EAX-value").innerHTML = diff;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      (this.parametro1 == "edx") &
      this.parametro2.includes("variable")
    ) {
      let valEdx = Number(document.getElementById("EDX-value").innerHTML);
      let val = Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      );
      let diff = valEdx - val;
      document.getElementById("EAX-value").innerHTML = diff;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "edx")
    ) {
      let valEdx = Number(document.getElementById("EDX-value").innerHTML);
      let val = Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      );
      let diff = val - valEdx;
      document.getElementById("EAX-value").innerHTML = diff;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "eax")
    ) {
      let valEax = Number(document.getElementById("EAX-value").innerHTML);
      let val = Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      );
      let diff = val - valEax;
      document.getElementById("EAX-value").innerHTML = diff;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      this.parametro2.includes("variable")
    ) {
      let val1 = Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      );
      let val2 = Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      );
      let diff = val1 - val2;
      document.getElementById("EAX-value").innerHTML = diff;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      ((this.parametro2 != "eax") |
        (this.parametro2 != "edx") |
        !this.parametro2.includes("variable"))
    ) {
      console.log("holiwi");
      let val1 = Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      );
      let sum = val1 - Number(this.parametro2);
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        Number(this.parametro2).toString(2) +
        " ";
    }
  }

  and() {
    if ((this.parametro1 == "eax") & (this.parametro2 == "edx")) {
      let valEax = this.to8BitBinary(
        Number(document.getElementById("EAX-value").innerHTML)
      );
      let valEdx = this.to8BitBinary(
        Number(document.getElementById("EDX-value").innerHTML)
      );
      let sum = valEax & valEdx;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["and"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if ((this.parametro1 == "edx") & (this.parametro2 == "eax")) {
      let valEax = this.to8BitBinary(
        Number(document.getElementById("EAX-value").innerHTML)
      );
      let valEdx = this.to8BitBinary(
        Number(document.getElementById("EDX-value").innerHTML)
      );
      let sum = valEax & valEdx;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["add"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      (this.parametro1 == "eax") &
      this.parametro2.includes("variable")
    ) {
      let valEax = this.to8BitBinary(
        Number(document.getElementById("EAX-value").innerHTML)
      );
      let val = this.to8BitBinary(
        Number(document.getElementById(this.getId("parametro2")).innerHTML)
      );
      let sum = valEax & val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["and"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      (this.parametro1 == "edx") &
      this.parametro2.includes("variable")
    ) {
      let valEdx = this.to8BitBinary(Number(document.getElementById("EDX-value").innerHTML));
      let val = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      ));
      let sum = valEdx & val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["and"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "edx")
    ) {
      let valEdx = this.to8BitBinary(Number(document.getElementById("EDX-value").innerHTML));
      let val = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let sum = valEdx & val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["and"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "eax")
    ) {
      let valEax = this.to8BitBinary(Number(document.getElementById("EAX-value").innerHTML));
      let val = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let sum = valEax & val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["and"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      this.parametro2.includes("variable")
    ) {
      let val1 = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let val2 = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      ));
      console.log(val1);
      console.log(val2);
      let sum = val1 & val2;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["and"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      ((this.parametro2 != "eax") |
        (this.parametro2 != "edx") |
        !this.parametro2.includes("variable"))
    ) {
      console.log("andgg");
      let val1 = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let sum = val1 & this.to8BitBinary(Number(this.parametro2));
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["and"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.to8BitBinary(Number(this.parametro2)).toString(2) +
        " ";
    }
  }

  xor() {
    if ((this.parametro1 == "eax") & (this.parametro2 == "edx")) {
      let valEax = this.to8BitBinary(
        Number(document.getElementById("EAX-value").innerHTML)
      );
      let valEdx = this.to8BitBinary(
        Number(document.getElementById("EDX-value").innerHTML)
      );
      let sum = valEax ^ valEdx;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["xor"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if ((this.parametro1 == "edx") & (this.parametro2 == "eax")) {
      let valEax = this.to8BitBinary(
        Number(document.getElementById("EAX-value").innerHTML)
      );
      let valEdx = this.to8BitBinary(
        Number(document.getElementById("EDX-value").innerHTML)
      );
      let sum = valEax ^ valEdx;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["xor"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      (this.parametro1 == "eax") &
      this.parametro2.includes("variable")
    ) {
      let valEax = this.to8BitBinary(
        Number(document.getElementById("EAX-value").innerHTML)
      );
      let val = this.to8BitBinary(
        Number(document.getElementById(this.getId("parametro2")).innerHTML)
      );
      let sum = valEax ^ val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["xor"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      (this.parametro1 == "edx") &
      this.parametro2.includes("variable")
    ) {
      let valEdx = this.to8BitBinary(Number(document.getElementById("EDX-value").innerHTML));
      let val = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      ));
      let sum = valEdx ^ val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["xor"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "edx")
    ) {
      let valEdx = this.to8BitBinary(Number(document.getElementById("EDX-value").innerHTML));
      let val = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let sum = valEdx ^ val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["xor"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "eax")
    ) {
      let valEax = this.to8BitBinary(Number(document.getElementById("EAX-value").innerHTML));
      let val = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let sum = valEax ^ val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["xor"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      this.parametro2.includes("variable")
    ) {
      let val1 = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let val2 = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      ));
      console.log(val1);
      console.log(val2);
      let sum = val1 ^ val2;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["xor"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      ((this.parametro2 != "eax") |
        (this.parametro2 != "edx") |
        !this.parametro2.includes("variable"))
    ) {
      console.log("andgg");
      let val1 = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let sum = val1 ^ this.to8BitBinary(Number(this.parametro2));
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["xor"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        Number(this.parametro2).toString(2) +
        " ";
    }
  }

  or() {
    if ((this.parametro1 == "eax") & (this.parametro2 == "edx")) {
      let valEax = this.to8BitBinary(
        Number(document.getElementById("EAX-value").innerHTML)
      );
      let valEdx = this.to8BitBinary(
        Number(document.getElementById("EDX-value").innerHTML)
      );
      let sum = valEax | valEdx;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["or"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if ((this.parametro1 == "edx") & (this.parametro2 == "eax")) {
      let valEax = this.to8BitBinary(
        Number(document.getElementById("EAX-value").innerHTML)
      );
      let valEdx = this.to8BitBinary(
        Number(document.getElementById("EDX-value").innerHTML)
      );
      let sum = valEax | valEdx;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["or"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      (this.parametro1 == "eax") &
      this.parametro2.includes("variable")
    ) {
      let valEax = this.to8BitBinary(
        Number(document.getElementById("EAX-value").innerHTML)
      );
      let val = this.to8BitBinary(
        Number(document.getElementById(this.getId("parametro2")).innerHTML)
      );
      let sum = valEax | val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["or"] +
        " " +
        this.dictBinary["eax"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      (this.parametro1 == "edx") &
      this.parametro2.includes("variable")
    ) {
      let valEdx = this.to8BitBinary(Number(document.getElementById("EDX-value").innerHTML));
      let val = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      ));
      let sum = valEdx | val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["or"] +
        " " +
        this.dictBinary["edx"] +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "edx")
    ) {
      let valEdx = this.to8BitBinary(Number(document.getElementById("EDX-value").innerHTML));
      let val = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let sum = valEdx | val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["or"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["edx"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      (this.parametro2 == "eax")
    ) {
      let valEax = this.to8BitBinary(Number(document.getElementById("EAX-value").innerHTML));
      let val = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let sum = valEax | val;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["or"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.dictBinary["eax"] +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      this.parametro2.includes("variable")
    ) {
      let val1 = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let val2 = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro2")).innerHTML
      ));
      console.log(val1);
      console.log(val2);
      let sum = val1 | val2;
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["or"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.getBinario("parametro2") +
        " ";
    } else if (
      this.parametro1.includes("variable") &
      ((this.parametro2 != "eax") |
        (this.parametro2 != "edx") |
        !this.parametro2.includes("variable"))
    ) {
      console.log("andgg");
      let val1 = this.to8BitBinary(Number(
        document.getElementById(this.getId("parametro1")).innerHTML
      ));
      let sum = val1 | this.to8BitBinary(Number(this.parametro2));
      document.getElementById("EAX-value").innerHTML = sum;
      this.cadenaBinaria +=
        " " +
        this.dictBinary["or"] +
        " " +
        this.getBinario("parametro1") +
        " " +
        this.to8BitBinary(Number(this.parametro2)).toString(2) +
        " ";
    }
  }

  //Funciones con solo 1 parametro
  mul() {
    console.log(this.arrayVariables);
    let eaxVal = Number(document.getElementById("EAX-value").innerHTML);
    let idVal = this.getId("parametro1");
    console.log(idVal);
    let variableVal = Number(document.getElementById(idVal).innerHTML);

    let mult = eaxVal * variableVal;
    document.getElementById("EDX-value").innerHTML = mult;
    this.cadenaBinaria +=
      " " + this.dictBinary["mul"] + " " + this.getBinario("parametro1");
  }

  div() {
    let eaxVal = Number(document.getElementById("EAX-value").innerHTML);
    let idVal = this.getId("parametro1");
    console.log(idVal);
    let variableVal = Number(document.getElementById(idVal).innerHTML);

    let div = eaxVal / variableVal;
    document.getElementById("EDX-value").innerHTML = div;
    alert("comando div");
    this.cadenaBinaria +=
      " " + this.dictBinary["div"] + " " + this.getBinario("parametro1");
  }

  not() {
    let idVal = this.getId("parametro1");
    let variableVal = this.to8BitBinary(
      Number(document.getElementById(idVal).innerHTML)
    );
    let not = this.FunNot(variableVal);
    not = parseInt(not, 2);
    console.log("2", not);
    document.getElementById("EAX-value").innerHTML = not;
    alert("comando not");
    this.cadenaBinaria +=
      " " + this.dictBinary["not"] + " " + this.getBinario("parametro1");
  }

  FunNot(binario) {
    let binario1 = binario.slice().split("");
    for (let i = 0; i < binario1.length; i++) {
      if (binario1[i] == "0") {
        binario1[i] = "1";
      } else {
        binario1[i] = "0";
      }
    }
    return binario1.join("");
  }

  to8BitBinary(number) {
    return number.toString(2).padStart(8, 0) + "";
  }
}
