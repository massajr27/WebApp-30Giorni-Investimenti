
const giorni = [
  { giorno: 1, tema: "Introduzione alla finanza personale", link: "https://www.youtube.com/watch?v=dZ2cH-v1VYk" },
  { giorno: 2, tema: "Cos'è un investimento? Rischio e rendimento", link: "https://www.youtube.com/watch?v=b2pJxA7nW6I" },
  { giorno: 3, tema: "Introduzione alle azioni e alla Borsa", link: "https://www.youtube.com/watch?v=8yZ8aA0Ot4A" },
  { giorno: 4, tema: "Introduzione al Bitcoin e Blockchain", link: "https://academy.binance.com/it/articles/what-is-bitcoin" },
  { giorno: 5, tema: "Ethereum e smart contracts", link: "https://academy.binance.com/it/articles/what-is-ethereum" },
  { giorno: 6, tema: "Wallet: come custodire le tue crypto", link: "https://www.youtube.com/watch?v=QVFfG8z_Ly8" },
  { giorno: 7, tema: "Exchange: Binance, Coinbase e altri", link: "https://www.youtube.com/watch?v=FHKWrXOUgdI" },
  { giorno: 8, tema: "Analisi fondamentale: come valutare un'azione", link: "https://www.youtube.com/watch?v=VgJ2YpgMAxI" },
  { giorno: 9, tema: "Analisi tecnica: pattern e trend", link: "https://www.youtube.com/watch?v=9VzSe9BQ73E" },
  { giorno: 10, tema: "Crypto: come analizzare un progetto", link: "https://www.youtube.com/watch?v=_a2j0sKQn6U" },
  { giorno: 11, tema: "ETF e fondi: strumenti per diversificare", link: "https://www.youtube.com/watch?v=nEcnYqRbAa8" },
  { giorno: 12, tema: "Le stablecoin e il loro ruolo", link: "https://academy.binance.com/it/articles/what-are-stablecoins" },
  { giorno: 13, tema: "Strategie di investimento a lungo termine", link: "https://www.youtube.com/watch?v=r9fNS55TI5Y" },
  { giorno: 14, tema: "Dollar Cost Averaging", link: "https://www.youtube.com/watch?v=yx6cuMu6U-M" },
  { giorno: 15, tema: "Creazione di un portafoglio bilanciato", link: "https://www.youtube.com/watch?v=wAaZkxKYuRU" },
  { giorno: 16, tema: "DeFi: cos’è e come funziona", link: "https://www.youtube.com/watch?v=_KHcAq8GkeI" },
  { giorno: 17, tema: "NFT e asset digitali", link: "https://www.youtube.com/watch?v=1CnJmjk3Q08" },
  { giorno: 18, tema: "Gestione delle emozioni nell’investimento", link: "https://www.youtube.com/watch?v=2OWTIe_uKQY" },
  { giorno: 19, tema: "Tassazione su azioni e crypto", link: "https://www.youtube.com/watch?v=MK9Eqw3g8-c" },
  { giorno: 20, tema: "Come evitare le truffe crypto", link: "https://www.youtube.com/watch?v=h1uWfqLTZ4k" },
  { giorno: 21, tema: "Come fare una ricerca autonoma (DYOR)", link: "https://www.youtube.com/watch?v=VGH0n4h0dyg" },
  { giorno: 22, tema: "Gestione del capitale e money management", link: "https://www.youtube.com/watch?v=YDR_6RG09VA" },
  { giorno: 23, tema: "Strategie di uscita e presa di profitto", link: "https://www.youtube.com/watch?v=WPPN2BuTGFQ" },
  { giorno: 24, tema: "I migliori tool e piattaforme", link: "https://www.youtube.com/watch?v=jOALtRzpg1A" },
  { giorno: 25, tema: "Crisi e crolli: come comportarsi", link: "https://www.youtube.com/watch?v=1x3Gv0I8hd8" },
  { giorno: 26, tema: "Investimenti automatici e roboadvisor", link: "https://www.youtube.com/watch?v=i7kFPErPx7o" },
  { giorno: 27, tema: "Le DAO e il futuro delle organizzazioni", link: "https://www.youtube.com/watch?v=_cPpp1yPY_0" },
  { giorno: 28, tema: "Investire nel metaverso", link: "https://www.youtube.com/watch?v=Wb3FdeBGiZ4" },
  { giorno: 29, tema: "Creare un piano finanziario personale", link: "https://www.youtube.com/watch?v=awJD_HkN7Sc" },
  { giorno: 30, tema: "Simula la tua prima consulenza", link: "https://www.youtube.com/watch?v=xTr8Ev2g3Y4" }
];

function aggiornaProgressBar() {
  const completati = document.querySelectorAll('input[type="checkbox"]:checked').length;
  const percentuale = Math.round((completati / giorni.length) * 100);
  const barra = document.getElementById("progress");
  barra.style.width = percentuale + "%";
  barra.innerText = percentuale + "% completato";
}

function salvaStato() {
  const stato = [];
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    stato.push(cb.checked);
  });
  localStorage.setItem("statoGiorni", JSON.stringify(stato));
  aggiornaProgressBar();
}

function caricaStato() {
  const stato = JSON.parse(localStorage.getItem("statoGiorni")) || [];
  document.querySelectorAll('input[type="checkbox"]').forEach((cb, i) => {
    cb.checked = stato[i] || false;
  });
  aggiornaProgressBar();
}

const container = document.getElementById("contenuto");
giorni.forEach((g, i) => {
  const box = document.createElement("div");
  box.className = "giorno";
  box.innerHTML = `
    <h3>Giorno ${g.giorno}</h3>
    <p>${g.tema}</p>
    <a href="${g.link}" target="_blank">Vai al contenuto</a><br><br>
    <label><input type="checkbox" onchange="salvaStato()"> Completato</label>
  `;
  container.appendChild(box);
});

caricaStato();
