import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePseudoChange = (event) => {
        setPseudo(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Vous pouvez ajouter ici la logique pour envoyer les données à votre backend ou effectuer d'autres actions nécessaires
        console.log('Email:', email);
        console.log('Pseudo:', pseudo);
        console.log('Message:', message);
        // Réinitialiser les champs après soumission du formulaire
        setEmail('');
        setPseudo('');
        setMessage('');
    };

    return (
        <div className="app">
            <Header/>

            <main>
                <h1>Contactez-nous</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="pseudo">Pseudo:</label>
                        <input
                            type="text"
                            id="pseudo"
                            value={pseudo}
                            onChange={handlePseudoChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                            required
                        />
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </main>

            <Footer/>
        </div>
    );
};

export default ContactPage;
