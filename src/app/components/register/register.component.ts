import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import User from '../../interfaces/user.interface';
import { Router,  } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {  }

  login() {
    this.router.navigate(['']);
  }

  async crearCliente() {
    const cliente = {
      nombre: this.name,
      estadoCliente: this.email,
      contra: this.password,

      
  };
    try {
      //await this.authService.createUser(cliente,this.miformulario.get('correo')?.value, this.miformulario.get('contrasena')?.value);
    } catch (error) {
      console.error('Error durante la creación del cliente:', error);
    }
  }

}

