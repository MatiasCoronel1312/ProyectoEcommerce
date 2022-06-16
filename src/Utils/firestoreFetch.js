import { doc, getDoc } from "firebase/firestore";
import { query, orderBy, where, collection, getDocs } from "@firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetch = async (category) => {
        let q;
        if (category) {
            q = query(collection(db, "products"), where('category', '==', category));
        } else {
            q = query(collection(db, "products"), orderBy('name'));
        }

        const querySnapshot = await getDocs(q);
        
        const dataFromFirestore = querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
        }));

        return dataFromFirestore;
}


export const firestoreFetchOne = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
        return {
            id: id,
            ...docSnap.data()
        }
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
}