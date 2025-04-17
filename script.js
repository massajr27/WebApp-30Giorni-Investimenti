
const piano = [
    { giorno: 1, tema: "Introduzione alla finanza", link: "https://www.coursera.org/learn/financial-markets-global" },
    { giorno: 2, tema: "Gestione del rischio", link: "https://academy.binance.com/" },
    { giorno: 3, tema: "Mercati finanziari", link: "https://www.youtube.com/@AlessandroMoretti" },
    // Aggiungi altri giorni seguendo questo formato...
];

const dashboard = document.getElementById("dashboard");

piano.forEach(entry => {
    const card = document.createElement("div");
    card.className = "day-card";
    card.innerHTML = `
        <h3>Giorno ${entry.giorno}</h3>
        <p><strong>Tema:</strong> ${entry.tema}</p>
        <p><a href="${entry.link}" target="_blank">Apri risorsa</a></p>
        <label><input type="checkbox" id="check-${entry.giorno}"> Completato</label>
        <textarea placeholder="Note personali..."></textarea>
    `;
    dashboard.appendChild(card);
});
