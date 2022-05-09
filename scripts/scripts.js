//Lectura del archivo
let commands = document.getElementById("inputfile")

commands.addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    document.getElementById("output").textContent = fr.result;
  };

  fr.readAsText(this.files[0]);
});
