import React from 'react';

const Storia = () => {
  return (
    <div className="storia">
      <h2>La Storia degli Emirati Arabi Uniti</h2>
      <p>
        Gli Emirati Arabi Uniti (EAU) sono un paese giovane, nato nel 1971 grazie alla visione del fondatore Sheikh Zayed. 
        La storia della loro unificazione inizia con un accordo tra sette emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al-Quwain, Fujairah e Ras Al-Khaimah.
      </p>
      <h3>I Fondatori</h3>
      <p>
        Sheikh Zayed bin Sultan Al Nahyan è stato il primo presidente degli Emirati Arabi Uniti. Il suo leadership ha portato al rapido sviluppo e prosperità del paese.
      </p>
      <img src={require('../assets/images/sheikh_zayed.jpg')} alt="Sheikh Zayed" />
    </div>
  );
};

export default Storia;