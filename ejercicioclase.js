var array;

function Arraymulti(){
    var array = [
        {username: "juan", cod: "192122", doc: "1091652801", tipouser: "Estudiante"},
        {username: "juanSe", cod: "192123", doc: "1091622801", tipouser: "Profe"},
        {username: "jhon", cod: "192142", doc: "10343652801", tipouser: "Empleado"}
    ]
    console.log(array);
}

let fecha = new Date();
var minutos = fecha.getMinutes();
console.log(minutos);

function compara() {
    var nombre = $("#nombre").val();
    for (let i = 1; i <= array.length; i++) {
        if(nombre == array[i].username) {
            console.log('El nombre si existe');
        }else {
            console.log("El nombre no existe");
        }
    }
}