import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import User from '../../interfaces/user.interface';
import { Router,  } from '@angular/router';


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

  //constructor(private userService: UsersService, private router: Router) {}
  /*async onSubmit() {
    console.log(this.name, this.email, this.password);
    const userData: User = {
      name: this.name,
      mail: this.email, // Asigna this.email a la propiedad mail
      contraseña: this.password // Asigna this.password a la propiedad contraseña
    };  
      const response = await this.userService.addUser(userData);
      console.log(response);
  }
  redirectToLogin()
  {
    this.router.navigate(['']);
  }*/
}

