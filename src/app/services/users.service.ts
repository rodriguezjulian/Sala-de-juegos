import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import User from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) { }
  addUser(user : User )
  {
    const userRef = collection(this.firestore,'users');
    return addDoc(userRef, user);
  }
  getUsers() : Observable<User[]>
  {
    const userRef = collection(this.firestore,'users');
    return collectionData(userRef,{idField: 'id'}) as Observable<User[]>;
  }

}
