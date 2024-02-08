import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './composant/Header';
import Footer from './composant/Footer';
import ContactPage from './composant/ContactPage';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Switch> {/* Utilisez directement Switch sans importer en tant qu'export nommé */}
                        <Route path="/contact" component={ContactPage} />
                        {/* Autres routes */}
                        <Route path="/" exact>
                            <h1>A-Rosa-je</h1>
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
