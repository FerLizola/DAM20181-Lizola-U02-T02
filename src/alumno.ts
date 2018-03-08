interface Student{
    no_ctrl:string; 
    name:string;
    apellidos:string;
    promedio:number;
    genero:string;//investigar si se puede char tipo de dato
    fecha_nacimiento:string;//investigar si existe date.
    activo:boolean;
    
}
export class Alumno{
    alumnos:Array<Student>;
    
    nuevoAlumno(no_ctrln:string,namen:string,apellidosn:string,promedion:number,
        generon:string,activon:boolean,fecha_nacimienton:string):Student{
            let student1={
                no_ctrl:no_ctrln,
                name:namen,
                apellidos:apellidosn,
                promedio:promedion,
                genero:generon,
                activo:activon,
                fecha_nacimiento:fecha_nacimienton
            };
        return student1;
    }

    //crear arreglo
    crear(){
        this.alumnos=new Array<Student>();
    }

    //agregar
    agregar(newAlumno:Student){
        this.alumnos.push(newAlumno);
        console.log("Agregar");
        this.imprimir();
        console.log("\n");
    }

    //modificar
    modificar(newAlumno:Student){
        let pos=-1;
        this.alumnos.forEach(element => {
            if(element.no_ctrl===newAlumno.no_ctrl){
                pos=this.alumnos.indexOf(element);
            }
        });
        if(pos!=-1)
            this.alumnos[pos]=newAlumno;
        console.log("Modificar");
        this.imprimir();
        console.log("\n");
    }

    //imprimir
    imprimir(){
        if(this.alumnos.length>0)
        this.alumnos.forEach( element => {
            console.log("Alumno\n No ctrl: "+element.no_ctrl+" Nombre: "+element.name
                +" Apellido:"+element.apellidos);
        });
    }


    //eliminar
    eliminar(no_ctrl:string){
        let pos=-1;
        this.alumnos.forEach(element => {
            if(element.no_ctrl===no_ctrl){
                pos=this.alumnos.indexOf(element);
            }
        });
        if(pos!=-1)
            this.alumnos.splice(pos,1);
        console.log("Eliminar");
        this.imprimir();
        console.log("\n");
    }

}