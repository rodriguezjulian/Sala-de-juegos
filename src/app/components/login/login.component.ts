import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // singIn()
  constructor(private router: Router){}
  register()
  {
    this.router.navigate(['/register']);
  }
  quienSoy()
  {
    this.router.navigate(['/quiensoy']);
  }
}
