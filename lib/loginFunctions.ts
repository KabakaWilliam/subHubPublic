import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "./firebase";
import mixpanel from "mixpanel-browser";

const signInFunction = async () => {
  try {
    await signInWithPopup(auth, googleAuthProvider);
    if (process.env.NEXT_PUBLIC_PROJECT_TOKEN) {
      mixpanel.init(process.env.NEXT_PUBLIC_PROJECT_TOKEN);
      mixpanel.track("Sign In Clicked");
    }
  } catch (e) {
    console.error(e);
  }
};

const signUpFunction = async () => {
  try {
    await signInWithPopup(auth, googleAuthProvider);
    if (process.env.NEXT_PUBLIC_PROJECT_TOKEN) {
      mixpanel.init(process.env.NEXT_PUBLIC_PROJECT_TOKEN);
      mixpanel.track("Sign Up Clicked");
    }
  } catch (e) {
    console.error(e);
  }
};

const EarlyAccessFunction = async () => {
  try {
    await signInWithPopup(auth, googleAuthProvider);
    if (process.env.NEXT_PUBLIC_PROJECT_TOKEN) {
      mixpanel.init(process.env.NEXT_PUBLIC_PROJECT_TOKEN);
      mixpanel.track("Early Access Clicked");
    }
  } catch (e) {
    console.error(e);
  }
};

const signOutFunction = async () => {
  auth.signOut();
  if (process.env.NEXT_PUBLIC_PROJECT_TOKEN) {
    mixpanel.init(process.env.NEXT_PUBLIC_PROJECT_TOKEN, {
      debug: true,
    });
    mixpanel.track("Sign Out DropDown Clicked");
  }
};
export { signInFunction, signOutFunction, signUpFunction, EarlyAccessFunction };
