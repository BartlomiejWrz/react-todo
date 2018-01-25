import firebase from 'src/firebase'

const config = {
    apiKey: "AIzaSyApoBGQkLcEcTt30H2NrSHnGrwrOCwbD94",
    authDomain: "first-personal-project.firebaseapp.com",
    databaseURL: "https://first-personal-project.firebaseio.com",
    projectId: "first-personal-project",
    storageBucket: "first-personal-project.appspot.com",
    messagingSenderId: "1096453058229"
};
firebase.initializeApp(config);

export const database = firebase.database()

export const auth = firebase.auth()

export const storage = firebase.storage()
/*
apiKey: "AIzaSyApoBGQkLcEcTt30H2NrSHnGrwrOCwbD94",
    authDomain: "first-personal-project.firebaseapp.com",
    databaseURL: "https://first-personal-project.firebaseio.com",
    projectId: "first-personal-project",
    storageBucket: "first-personal-project.appspot.com",
    messagingSenderId: "1096453058229"
};
    */