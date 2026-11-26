import { initializeApp } from 'firebase/app';

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCbJWc8NmunsjXlZMQcW5-leYza6UHA_IY',
    authDomain: 'mc2-lab1-palino.firebaseapp.com',
    projectId: 'mc2-lab1-palino',
    storageBucket: 'mc2-lab1-palino.firebasestorage.app',
    messagingSenderId: '537535704664',
    appId: '1:537535704664:web:95d8b88dde83e35c1ce42d'
  }
};

export const firebaseApp = initializeApp(environment.firebase);
