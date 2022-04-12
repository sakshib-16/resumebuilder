import React from 'react'
import {useState} from 'react';

import { getAuth, onAuthStateChanged } from "firebase/auth";


const UserId = () => {
    //const PersonalDetail = {}

    const [userid, setUserId] = useState('')


    //getting uid
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(uid)
            setUserId(uid);
            // ...
        } else {
            // User is signed out
            // ...
        }
    });


    return(
        <input type="hidden" value={userid} />

    )
}
export default UserId;