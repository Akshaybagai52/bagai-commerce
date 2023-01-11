import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../utility/firebase/firebase";
import SignUpForm from "../signup/sign-up";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>Hey I am singin</div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignUpForm />
    </>
  );
}
