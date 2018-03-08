import { Alumno } from "./alumno";

let alumno=new Alumno();
alumno.crear();
//agregar
//let agregar=alumno.nuevoAlumno("13400441","Fernando","Lizola",10,"m",true,"22-06-95");

alumno.agregar(alumno.nuevoAlumno("13400441","Fernando","Lizola",10,"m",true,"22-06-95"));
//agregar
//agregar=alumno.nuevoAlumno("13400441a","Luis","Chavarin",10,"m",true,"22-06-95");
alumno.agregar(alumno.nuevoAlumno("13400441a","Luis","Chavarin",10,"m",true,"22-06-95"));
//modificar
//agregar=alumno.nuevoAlumno("13400441","Fernando modificado","Lizola 2",9,"m",false,"22-06-95");
alumno.modificar(alumno.nuevoAlumno("13400441","Fernando modificado","Lizola 2",9,"m",false,"22-06-95"));
//eliminar
alumno.eliminar("13400441a");

