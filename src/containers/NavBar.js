import LoginModal from '../component/LoginModal';
import SignUpModal from '../component/SignUpModal';
import { useState } from 'react';


function Navbar() {

    const [NavBarOpen, changeNavBar] = useState(false)
    const [isLoginModal, changeLoginModal] = useState(true)
    const [loggedIn, changeLoggedIn] = useState(!!localStorage.getItem("token")) //false = no token 

    const openLoginModal = () => {
        changeNavBar(true)
        changeLoginModal(true)
        changeLoggedIn(true)
    }

    const openSignUpModal = () => {
        changeNavBar(true)
        changeLoginModal(false)
    }

    const closeModal = () => {
        changeNavBar(false)

    }


    const storeSession = (token) => {
        localStorage.setItem("token", token)
    }

    return (
        <div>
            Navbar
            {NavBarOpen ? (isLoginModal ?
                <LoginModal close={closeModal} storeSession={storeSession} /> :
                <SignUpModal close={closeModal} storeSession={storeSession} />) : null}

            {loggedIn ? null :
                <>
                    <button onClick={openLoginModal}>Login</button>
                    <button onClick={openSignUpModal}>SignUp</button>
                </>
            }


        </div>
    )


}

export default Navbar;