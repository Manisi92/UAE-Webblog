import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router
import './App.css';
import burjKhalifa from './assets/images/burj-khalifa.jpg';  // esempio di importazione immagine
import palmJumeirah from './assets/images/palm-jumeirah.jpg';  // esempio di importazione immagine
import grandeMoschea from './assets/images/grande-moschea.jpg';  // esempio di importazione immagine
import Storia from './pages/Storia';
import Cultura from './pages/Cultura';  // Importa la pagina Cultura
import Eventi from './pages/Eventi'; // Importa la pagina Eventi
import Contatti from './pages/Contatti'; // Importa la pagina Contatti
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const App = () => {
  const { t, i18n } = useTranslation(); // Inizializza il hook

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="language-selector">
            <button onClick={() => i18n.changeLanguage('it')}>Italiano</button>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
          </div>
          <nav className="navbar">
            <div className="logo">Emirati Arabi Uniti</div>
            <ul className="nav-links">
              <li><a href="/storia"><i className="icon-history"></i>{t('storia')}</a></li>
              <li><a href="/cultura"><i className="icon-culture"></i>{t('cultura')}</a></li> {/* Usa il path giusto */}
              <li><a href="#turismo"><i className="icon-tourism"></i>{t('attrazioni')}</a></li>
              <li><a href="#economia"><i className="icon-economy"></i>{t('economia')}</a></li>
              <li><a href="/eventi"><i className="icon-events"></i>{t('eventi')}</a></li>
              <li><a href="/contatti"><i className="icon-events"></i>{t('contatti')}</a></li>
            </ul>
          </nav>
        </header>

        <motion.section 
          className="hero" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url(${burjKhalifa})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h1>{t('benvenuto')}</h1>
          <p>{t('scopri')}</p>
          <button>{t('scopri')}</button>
        </motion.section>

        <motion.div 
          className="gallery-images"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.img
            src={burjKhalifa}
            alt="Burj Khalifa"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <motion.img
            src={palmJumeirah}
            alt="Palm Jumeirah"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <motion.img
            src={grandeMoschea}
            alt="Grande Moschea"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>

        <section className="video">
          <h2>Esplora gli Emirati in Video</h2>
          <div className="video-container">
            <iframe 
              width="100%" 
              height="500" 
              src="https://www.youtube.com/embed/Ptj456hc_jQ?si=px9czV-S07AJd__m"
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Definisci le rotte per le varie pagine */}
        <Routes>
          <Route path="/cultura" component={Cultura} /> {/* Aggiungi la rotta per Cultura */}
          <Route path="/storia" component={Storia} />
          <Route path="/eventi" component={Eventi} />
          <Route path="/contatti" component={Contatti} />
          {/* Altre rotte */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;