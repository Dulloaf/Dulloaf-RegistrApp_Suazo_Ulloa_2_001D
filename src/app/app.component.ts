import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

interface Componente {
  name: string;
  icon: string;
  redirecTo: string;
}

interface Docente {
  name: string;
  icon: string;
  redirecTo: string;
}

interface Alumno {
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  alumno: Alumno[] = [
    {
      name: 'Ayuda',
      icon: 'settings-outline',
      redirecTo: '/ayuda',
    },
    { 
      name: 'Noticas',
      icon: 'newspaper-outline',
      redirecTo: '/noticias',
    },

    {
      name: 'Configuración',
      icon: 'settings-outline',
      redirecTo: '#',
    },
  ];

  constructor(
    private navController: NavController,
    private menu: MenuController // Agrega el MenuController
  ) {}

  CerrarSesion() {
    // Eliminar la marca de inicio de sesión (por ejemplo, eliminar el elemento 'ingresado' del almacenamiento local)
    localStorage.removeItem('ingresado');

    // Cierra el menú antes de redirigir al usuario
    this.menu.close().then(() => {
      // Redirige al usuario a la página de inicio u otra ubicación
      this.navController.navigateRoot(['login']);
    });
  }
}
