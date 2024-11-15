import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // Stato per il messaggio di errore/conferma

  // Gestisce i cambiamenti nel modulo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Gestisce l'invio del modulo
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null); // Reset dello stato di invio

    // Simuliamo l'invio dei dati (puoi sostituire questo con una chiamata API)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success'); // Status di successo
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <motion.div
      className="contatti"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contattaci</h2>
      {formStatus && (
        <motion.div
          className={`form-status ${formStatus}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {formStatus === 'success' ? 'Messaggio inviato con successo!' : 'Si è verificato un errore. Riprova.'}
        </motion.div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Inserisci il tuo nome"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Inserisci la tua email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Messaggio</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Scrivi il tuo messaggio"
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="spinner"></span>
          ) : (
            'Invia'
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default Contatti;