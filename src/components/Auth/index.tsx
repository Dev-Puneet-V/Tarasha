import React from 'react'
import Modal from '../Modal';
import SignInForm from '../SignIn';
import SignUpForm from '../SignUp';
import ForgetPasswordForm from '../ForgetPassword';
import { AuthState } from '../../utils/type';

const Auth: React.FC = () => {
    const [currAuthState, setCurrAuthState] = React.useState<AuthState>(AuthState.Login);
    const currentAuthStateHandler = (authState: AuthState) => {
        setCurrAuthState(authState);
    }
    return (
        <Modal isOpen={true} onClose={() => {}}>
            {
                currAuthState === AuthState.Login && <SignInForm handleAuthState={currentAuthStateHandler}/>
            }
            {
                currAuthState === AuthState.Register && <SignUpForm handleAuthState={currentAuthStateHandler}/>
            }
            {
                currAuthState === AuthState.ForgetPass && <ForgetPasswordForm handleAuthState={currentAuthStateHandler}/>
            }
        </Modal>
    )
}

export default Auth;
