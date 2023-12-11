import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    authDomain: 'diabetic-health-tracker.firebaseapp.com',
    projectId: 'diabetic-health-tracker',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const healthDataRef = ref(db, 'healthData'); 

export { firebaseApp, db, healthDataRef };