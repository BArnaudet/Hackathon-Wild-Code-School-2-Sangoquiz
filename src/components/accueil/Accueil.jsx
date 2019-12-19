import React from 'react';
import './Accueil.css';

function Accueil() {
    return (
        <div className="accueil">
            <p className="titre"> SANGOQUIZ </p>
            <button className="mob-8 tab-6 dsk-3 start"><a className="lien" href="quiz">Commencer</a></button>
        </div>
    );
}

export default Accueil;