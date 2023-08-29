import React from 'react';

import "./LoginModal.css";

import Button from '../buttons/Button';

function LoginModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <section className="fixed left-0 top-0 w-full h-full bg-opacity-80 bg-black backdrop-filter backdrop-blur backdrop-saturate-150 backdrop-brightness-125 z-50">
            <figure className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-sixth flex flex-col w-fit h-fit items-center border-t-4 border-t-third shadow-light-white ${isOpen ? "fade-in" : "fade-out"} `}>
                <button onClick={onClose} className="fixed top-0 right-0 bg-third w-fit h-fit px-2 font-bold text-white text-lg">X</button>
                <span className="font-bold text-third text-lg p-4 border-b border-b-gray-light w-full text-center">MULTIPLAYER LOGIN</span>
                <div className="flex flex-col items-center gap-3 py-2 mx-4">
                    <span className="text-white font-medium">con il tuo social network</span>
                    <div className="w-full flex flex-row gap-2">
                        <button className="bg-blue px-6 py-2 w-full">FACEBOOK</button>
                        <button className="bg-white px-6 py-2 w-full">GOOGLE</button>
                    </div>
                    <input className="w-full h-10 p-2 bg-primary border border-gray-light outline-none" type="text" placeholder="Email"></input>
                    <input className="w-full h-10 p-2 bg-primary border border-gray-light outline-none" type="text" placeholder="Password"></input>
                    <Button>LOGIN</Button>
                    <div className="flex flex-row justify-between text-third text-sm w-full">
                        <span>Password dimenticata?</span>
                        <span className="font-bold">Registrati</span>
                    </div>
                </div>
            </figure>
        </section>
    )
}

export default LoginModal