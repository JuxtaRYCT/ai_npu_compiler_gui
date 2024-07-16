// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   sendEmailVerification,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signInWithRedirect,
//   updatePassword,
// } from "firebase/auth";
// import { auth } from "./firebase";

// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithEmailPassword = async (email, password) => {
//   const result = await signInWithEmailAndPassword(auth, email, password);
//   return result;
// };

// export const doSignInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   const result = await signInWithRedirect(auth, provider);

//   return result;
// };

// export const doSignOut = () => {
//   return auth.signOut();
// };

// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: "${window.location.origin}/home",
//   });
// };

// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   sendEmailVerification,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signInWithRedirect,
//   updatePassword,
//   getRedirectResult,
// } from "firebase/auth";
// import { auth } from "./firebase";

// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return userCredential.user;
//   } catch (error) {
//     console.error("Error creating user with email and password", error);
//     throw error;
//   }
// };

// export const doSignInWithEmailPassword = async (email, password) => {
//   try {
//     const result = await signInWithEmailAndPassword(auth, email, password);
//     return result.user;
//   } catch (error) {
//     console.error("Error signing in with email and password", error);
//     throw error;
//   }
// };

// export const doSignInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     await signInWithRedirect(auth, provider);
//   } catch (error) {
//     console.error("Error signing in with Google", error);
//     throw error;
//   }
// };

// // Handle the sign-in redirect result
// export const handleSignInRedirect = async () => {
//   try {
//     const result = await getRedirectResult(auth);
//     if (result) {
//       return result.user;
//     }
//   } catch (error) {
//     console.error("Error handling sign-in redirect", error);
//     throw error;
//   }
// };

// export const doSignOut = () => {
//   return auth.signOut();
// };

// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = (password) => {
//   if (auth.currentUser) {
//     return updatePassword(auth.currentUser, password);
//   } else {
//     throw new Error("No user is currently signed in");
//   }
// };

// export const doSendEmailVerification = () => {
//   if (auth.currentUser) {
//     return sendEmailVerification(auth.currentUser, {
//       url: `${window.location.origin}/home`,
//     });
//   } else {
//     throw new Error("No user is currently signed in");
//   }
// };

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  updatePassword,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error creating user with email and password", error);
    throw error;
  }
};

export const doSignInWithEmailPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Error signing in with email and password", error);
    throw error;
  }
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

// Handle the sign-in redirect result
export const handleSignInRedirect = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      return result.user;
    }
  } catch (error) {
    console.error("Error handling sign-in redirect", error);
    throw error;
  }
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  if (auth.currentUser) {
    return updatePassword(auth.currentUser, password);
  } else {
    throw new Error("No user is currently signed in");
  }
};

export const doSendEmailVerification = () => {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  } else {
    throw new Error("No user is currently signed in");
  }
};
