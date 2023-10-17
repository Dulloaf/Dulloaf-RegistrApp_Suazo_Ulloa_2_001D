import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-alumnomenu',
  templateUrl: './alumnomenu.page.html',
  styleUrls: ['./alumnomenu.page.scss'],
})
export class AlumnomenuPage implements OnInit {

  nomUsuario: string | null = '';

  constructor(private menuController: MenuController,
              private navController: NavController,
              private Storage: Storage
              ) { 
                this.nomUsuario = localStorage.getItem('nomUser');
              }

  ngOnInit() {
  }

  alumnoMenu(){
    this.menuController.open('third');
  }

  CerrarSesion() {
    // Eliminar la marca de inicio de sesión (por ejemplo, eliminar el elemento 'ingresado' del almacenamiento local)
    localStorage.removeItem('ingresado');
    
    // Redirigir al usuario a la página de inicio u otra ubicación
    this.navController.navigateRoot(['login']);
  }
}

