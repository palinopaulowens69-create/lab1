// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from 'firebase/app';

export const environment = {
  production: false,
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


