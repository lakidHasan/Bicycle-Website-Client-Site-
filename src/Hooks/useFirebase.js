import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const registerUser = (email, password, name, history) => {
    setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName:name};
        setUser(newUser);
        // set user to database
         saveUser(email, name);

        history.replace('/');
        
        //sent name in firebase
        updateProfile(auth.currentUser, {
          displayName: name 
        }).then(() => {
        }).catch((error) => { 
        });
        
      })
      .catch((error) => {
        setAuthError(error.message);
      })

      .finally(() => setLoading(false));
  }

  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.form || '/';
      history.replace(destination);
      setAuthError('');
    })
    .catch((error) => {
      setAuthError(error.message);
    })
    .finally( () => setLoading(false));
  }
//   observe user 

  useEffect( ()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
         setUser({})
        }
        setLoading(false); 
      });
      return () => unsubscribe;
  } , [auth])

  const logOut = () => {
    setLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(() => setLoading(false)); 
  }

  const saveUser = (email, displayName) =>{
      const user = {email, displayName};
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type':'application/json' 
        },
        body: JSON.stringify(user)
      })
      .then()
  }
      useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
      }, [user.email])

  return{
      user,
      admin,
      isLoading,
      authError,
      registerUser,
      loginUser,
      logOut,
  }
}

export default useFirebase;