import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { addDoc, collection, Firestore, query, orderBy, collectionData } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public user: string = "";
  public loginsCollection: any[] = [];
  public countLogins: number = 0;
  private sub: Subscription | undefined;

  constructor(private router: Router, private firestore: Firestore) {
    let col = collection(this.firestore, 'logins');
    addDoc(col, { fecha: new Date(), user: this.user });
  }

  getData() {
    let col = collection(this.firestore, 'logins');
    const filteredQuery = query(col, orderBy("fecha", "desc"));
    const observable: Observable<any[]> = collectionData(filteredQuery);

    this.sub = observable.subscribe((respuesta: any[]) => {
      this.loginsCollection = respuesta;
      this.countLogins = this.loginsCollection.length;
      console.log(respuesta);
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

  quienSoy() {
    this.router.navigate(['/quiensoy']);
  }
  
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
