import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,
              private storage: Storage) { }

  ngOnInit() {
  }

  async verStorage(){

    let nombre = await this.storage.get("nombreUsuario");
    console.log("El nombre guardado es: " + nombre)
  }



}
