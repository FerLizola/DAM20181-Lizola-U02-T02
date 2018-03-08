var Alumno = (function () {
    function Alumno() {
    }
    Alumno.prototype.nuevoAlumno = function (no_ctrln, namen, apellidosn, promedion, generon, activon, fecha_nacimienton) {
        var student1 = {
            no_ctrl: no_ctrln,
            name: namen,
            apellidos: apellidosn,
            promedio: promedion,
            genero: generon,
            activo: activon,
            fecha_nacimiento: fecha_nacimienton
        };
        return student1;
    };
    //crear arreglo
    Alumno.prototype.crear = function () {
        this.alumnos = new Array();
    };
    //agregar
    Alumno.prototype.agregar = function (newAlumno) {
        this.alumnos.push(newAlumno);
        console.log("Agregar");
        this.imprimir();
        console.log("\n");
    };
    //modificar
    Alumno.prototype.modificar = function (newAlumno) {
        var _this = this;
        var pos = -1;
        this.alumnos.forEach(function (element) {
            if (element.no_ctrl === newAlumno.no_ctrl) {
                pos = _this.alumnos.indexOf(element);
            }
        });
        if (pos != -1)
            this.alumnos[pos] = newAlumno;
        console.log("Modificar");
        this.imprimir();
        console.log("\n");
    };
    //imprimir
    Alumno.prototype.imprimir = function () {
        if (this.alumnos.length > 0)
            this.alumnos.forEach(function (element) {
                console.log("Alumno\n No ctrl: " + element.no_ctrl + " Nombre: " + element.name
                    + " Apellido:" + element.apellidos);
            });
    };
    //eliminar
    Alumno.prototype.eliminar = function (no_ctrl) {
        var _this = this;
        var pos = -1;
        this.alumnos.forEach(function (element) {
            if (element.no_ctrl === no_ctrl) {
                pos = _this.alumnos.indexOf(element);
            }
        });
        if (pos != -1)
            this.alumnos.splice(pos, 1);
        console.log("Eliminar");
        this.imprimir();
        console.log("\n");
    };
    return Alumno;
})();
exports.Alumno = Alumno;
