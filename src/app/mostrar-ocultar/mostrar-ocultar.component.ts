import { Component } from "@angular/core";

@Component({
    selector: 'mostrar-ocultar',
    templateUrl: './mostrar-ocultar.component.html'
})


export class MostrarOcultar{
    mostrar: boolean = false;
    mensaje: string = 'Holaaaa muchooo'; //mensaje q se muestra
    mensajeBtn: string = 'Enseñar'; //mensaje q va en el boton
//en esta funcion que no devuelve nada nos enseñara el mensaje,
//con la condicion que si es falso nos enseña el mensaje, si lo contrario(true) nos lo oculta.
    mostrarOcultar():void {
        if (this.mostrar) {
            this.mostrar = false
            this.mensajeBtn= 'Enseñar';
        } else {
            this.mostrar= true;
            this.mensajeBtn= 'Esconder';
            
        }
    }
    // npm install pero dentro del proyecto en el se realize 
    //y npm start o ng serve
} 