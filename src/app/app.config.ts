import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"sala-de-juegos-a8c0e","appId":"1:102597684814:web:8f47e748f465a1f3afdd1f","storageBucket":"sala-de-juegos-a8c0e.appspot.com","apiKey":"AIzaSyBHV1cUIRXJj5KHdkI62veM5iS7ssvsE2Y","authDomain":"sala-de-juegos-a8c0e.firebaseapp.com","messagingSenderId":"102597684814"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
