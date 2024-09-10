import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  icono="switch-oscuro"

  constructor( private anim: AnimationController) { }

  ngOnInit() {
    this.animarBoton();

  }
  cambiarTema(){
    if(this.icono == "switch-oscuro"){
      document.documentElement.style.setProperty("--fondo","#373737")
      this.icono ="switch-claro"
    }else{
      document.documentElement.style.setProperty("--fondo","#454E5F")
      this.icono ="switch-oscuro"
    
    }
  }
  animarBoton() {
    this.anim
      .create()
      .addElement(document.querySelector('#boton')!)
       .duration(1000) // Duración del parpadeo en milisegundos
      .iterations(Infinity) // Repetir infinitamente
      .easing('linear') // Efecto de interpolación lineal
      .keyframes([
        { offset: 0, opacity: 1 },      // Totalmente visible
        { offset: 0.5, opacity: .8},    // Totalmente invisible 
        { offset: 0.5, opacity: .6},    // Totalmente invisible 
        { offset: 0.5, opacity: .8},    // Totalmente invisible 
        { offset: 1, opacity: 1 }       // Vuelve a ser visible
      ])
      .play();  
}
}
