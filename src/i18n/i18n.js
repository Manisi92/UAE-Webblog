// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Risorse delle lingue (puoi aggiungere altre lingue qui)
const resources = {
  en: {
    translation: {
      "storia": "History",
      "cultura": "Culture",
      "attrazioni": "Attractions",
      "economia": "Economy",
      "eventi": "Events",
      "benvenuto": "Welcome to the UAE",
      "scopri": "Discover Now",
      "storia_descrizione": "The UAE has a rich history rooted in tradition...",
      // Aggiungi altre chiavi di traduzione per altre lingue...
    },
  },
  it: {
    translation: {
      "storia": "Storia",
      "cultura": "Cultura",
      "attrazioni": "Attrazioni",
      "economia": "Economia",
      "eventi": "Eventi",
      "benvenuto": "Benvenuto negli Emirati Arabi Uniti",
      "scopri": "Esplora ora",
      "storia_descrizione": "Gli Emirati Arabi Uniti hanno una storia ricca radicata nella tradizione...",
      // Aggiungi altre chiavi di traduzione per altre lingue...
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it', // Imposta la lingua predefinita
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;