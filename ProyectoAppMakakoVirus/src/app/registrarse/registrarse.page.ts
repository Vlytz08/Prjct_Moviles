import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  icono="switch-oscuro"

  constructor(private router: Router) { }

  ngOnInit() {
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
  navegar(){
    this.router.navigate(['./inicio'])
  }
}
