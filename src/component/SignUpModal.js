import { useState } from 'react';
import axios from 'axios';


function SignUpModal({ close, storeSession }) {




    return (
        <div style={{ position: "fixed", top: "50%", left: "50%", border: "solid 1px black", transform: "translate(-50%,-50%)" }}>
            <h1>SignUp</h1>
            <button onClick={close}>X</button>

        </div>
    )
}

export default SignUpModal;