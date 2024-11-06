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

  /**
   *
   */
  constructor(private router: Router) {  }
  login() {
    this.router.navigate(['']);
  }

}

