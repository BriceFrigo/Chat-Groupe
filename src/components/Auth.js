import {auth, provider } from "../firebase-config.js";
import {signInWithPopup} from 'firebase/auth';

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = (props) => {
    const {setIsAuth} = props;
        const signInWithGoogle = async () => {
            try {
                const result = await signInWithPopup(auth, provider);
                cookies.set("auth-token", result.user.refreshToken);
                setIsAuth(true);
            }catch(err){
                console.log(err)
            }

        }
    return <div className="auth">
        <h1>Se connecter avec Google pour continuer</h1>
        <button onClick={signInWithGoogle}>Connect</button>
    </div>;
}