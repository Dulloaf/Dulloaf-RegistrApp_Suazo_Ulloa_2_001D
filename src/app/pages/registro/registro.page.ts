import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegistroserviceService, Usuario } from 'src/app/services/registroservice.service';
import { 
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  constructor( private registroService: RegistroserviceService,
                private alertController: AlertController,
                private router: Router,
                private toastController: ToastController,
                private fb: FormBuilder ) {
                  this.formularioRegistro = this.fb.group({
                    'nombre': new FormControl("", Validators.required),
                    'correo': new FormControl("", Validators.required),
                    'password': new FormControl("", [Validators.required,Validators.minLength(3)]),
                  });
                }

  ngOnInit() {
    
  }

  async CrearUsuario(){
    //console.log('Guardar');
    var form= this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    this.newUsuario.nomUsuario = form.nombre,
    this.newUsuario.correoUsuario = form.correo,
    this.newUsuario.passUsuario = form.password,
    this.registroService.addDatos(this.newUsuario).then(dato => {
      this.newUsuario = <Usuario>{};
      this.showToast('¡Datos Agregados!');
    });
    this.router.navigate(['login']);

  }

  // async showToast(msg) {
  async showToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  verificarContrasena() {
    const passwordControl = this.formularioRegistro.get('password');
    const confirmaPassControl = this.formularioRegistro.get('confirmaPass');
  
    if (passwordControl && confirmaPassControl) {
      const password = passwordControl.value;
      const confirmaPass = confirmaPassControl.value;
  
      if (password !== confirmaPass) {
        // Las contraseñas no coinciden, puedes mostrar un mensaje de error o realizar alguna acción
        console.log('Las contraseñas no coinciden');
        // También podrías mostrar un mensaje de error en la interfaz de usuario
      }
    }
  }



}
              



