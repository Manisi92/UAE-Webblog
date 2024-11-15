import React from 'react';

const Cultura = () => {
  return (
    <div className="cultura">
      <h2>Cultura degli Emirati Arabi Uniti</h2>
      <p>
        La cultura degli Emirati Arabi Uniti è una fusione unica di tradizioni beduine secolari e influenze moderne provenienti da tutto il mondo. La religione predominante è l'Islam, che guida molte pratiche culturali, festeggiamenti e l'architettura. Questa miscela di tradizioni antiche e innovazioni moderne ha plasmato il paese in una delle nazioni più dinamiche e affascinanti della regione del Golfo.
      </p>

      {/* Sezione Tradizioni */}
      <section className="section traditions">
        <h3>Tradizioni</h3>
        <p>
          Le tradizioni degli Emirati sono radicate in pratiche che risalgono alla vita beduina nel deserto. Alcune delle tradizioni più emblematiche includono la <strong>danza Al Ayalah</strong>, che racconta storie di battaglie tribali e celebra la forza e l'onore, e il <strong>gioco dei falchi</strong>, dove l'abilità nel catturare la preda è considerata un'arte nobile. La <strong>musica tradizionale</strong>, accompagnata da strumenti come il <em>oud</em> (una sorta di liuto), è parte integrante di molte cerimonie e celebrazioni.
        </p>
        <div className="tradition-images">
          <img src="path_to_ayalah_dance_image.jpg" alt="Danza Al Ayalah" />
          <img src="path_to_falconry_image.jpg" alt="Falconeria" />
        </div>
        <p>
          La <strong>cerimonia del caffè arabo</strong> (Gahwa) è un simbolo di ospitalità ed è spesso accompagnata da preghiere di benvenuto. Viene preparato con una miscela di caffè verde, cardamomo e altre spezie, e servito in piccole tazze chiamate <em>finjan</em>. Gli Emirati celebrano anche la <strong>festività dell'Eid</strong> con famiglie e amici, che si riuniscono per festeggiare con prelibatezze culinarie e scambiarsi regali.
        </p>
      </section>

      {/* Sezione Cucina */}
      <section className="section cucina">
        <h3>Cucina degli Emirati</h3>
        <p>
          La cucina degli Emirati è una combinazione di ingredienti locali e influenze regionali provenienti da Persia, India e paesi africani. Tra i piatti più tipici troviamo l'<strong>Al Harees</strong>, un piatto a base di grano e carne cotto lentamente fino a ottenere una consistenza cremosa. Il <strong>Shawarma</strong>, carne speziata servita in un pane pita, è uno dei cibi di strada più popolari. Il <strong>Machboos</strong>, uno stufato di carne o pesce accompagnato da riso speziato, è un altro piatto tradizionale molto apprezzato.
        </p>
        <div className="cucina-images">
          <img src="path_to_harees_image.jpg" alt="Al Harees" />
          <img src="path_to_shawarma_image.jpg" alt="Shawarma" />
          <img src="path_to_machboos_image.jpg" alt="Machboos" />
        </div>
        <p>
          Non possiamo dimenticare il dolce tradizionale chiamato <strong>Luqaima</strong>, delle piccole frittelle ricoperte da sciroppo dolce, servite durante le festività e altre celebrazioni.
        </p>
      </section>

      {/* Sezione Religione e Festività */}
      <section className="section religione">
        <h3>Religione e Festività</h3>
        <p>
          La religione predominante negli Emirati Arabi Uniti è l'Islam, che influisce sulla vita quotidiana, dalle preghiere alle festività. Le celebrazioni più importanti includono il <strong>Ramadan</strong>, il mese sacro di digiuno, e l'<strong>Eid al-Fitr</strong>, che segna la fine del Ramadan. Un'altra importante festività è l'<strong>Eid al-Adha</strong>, che celebra il sacrificio di Ibrahim e il pellegrinaggio annuale alla Mecca.
        </p>
        <div className="religion-image">
          <img src="path_to_ramadan_image.jpg" alt="Ramadan" />
        </div>
        <p>
          Il <strong>Hajj</strong>, il pellegrinaggio annuale alla Mecca, è una delle pratiche fondamentali per ogni musulmano adulto, e molti emiratini partecipano a questa esperienza spirituale.
        </p>
      </section>

      {/* Sezione Arte e Architettura */}
      <section className="section arte-architettura">
        <h3>Arte e Architettura</h3>
        <p>
          L'arte degli Emirati Arabi Uniti è una sintesi tra tradizione e modernità. La calligrafia araba è un'arte visiva di grande valore, utilizzata sia per decorare moschee che per la produzione di opere d'arte contemporanea. La città di Dubai è famosa per la sua architettura futuristica, con grattacieli iconici come il <strong>Burj Khalifa</strong>, il grattacielo più alto del mondo, e il <strong>Burj Al Arab</strong>, uno degli hotel più lussuosi al mondo.
        </p>
        <div className="arte-architettura-images">
          <img src="path_to_burj_khalifa_image.jpg" alt="Burj Khalifa" />
          <img src="path_to_burj_al_arab_image.jpg" alt="Burj Al Arab" />
        </div>
      </section>

      {/* Sezione Musica e Danza */}
      <section className="section musica-danza">
        <h3>Musica e Danza</h3>
        <p>
          La musica emiratina ha radici nella tradizione beduina, con strumenti tipici come il <strong>qanun</strong>, un tipo di liuto, e il <strong>darabuka</strong>, un tamburo. La danza tradizionale Al Ayalah è accompagnata da canti e battiti di tamburo ed è una rappresentazione della cultura tribale. Altre forme di danza popolare includono la danza del ventre e il <strong>Khaleeji</strong>, una danza tradizionale del Golfo.
        </p>
        <div className="musica-danza-images">
          <img src="path_to_music_instrument_image.jpg" alt="Strumento musicale tradizionale" />
          <img src="path_to_dance_image.jpg" alt="Danza Tradizionale" />
        </div>
      </section>
    </div>
  );
};

export default Cultura;