class Serie {
  id: number;
  nombre: string;
  canal: string;
  temporadas: number;
  descripcion: string;
  url: string;
  imagen: string;

  constructor(id: number, nombre: string, canal: string, temporadas: number, descripcion: string, url: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.canal = canal;
    this.temporadas = temporadas;
    this.descripcion = descripcion;
    this.url = url;
    this.imagen = imagen;
  }
}

const series = [
  new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque...", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
  new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman...", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
  new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
  new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists...", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
  new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes...", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
  new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based miniseries.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg")
];

function mostrarSeries(series: Serie[]): void {
  const tbody = document.getElementById("series-table-body")!;
  tbody.innerHTML = "";

  series.forEach(s => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${s.id}</td>
      <td><a href="#" class="serie-link" data-id="${s.id}">${s.nombre}</a></td>
      <td>${s.canal}</td>
      <td>${s.temporadas}</td>
    `;
    tbody.appendChild(row);
  });

  // Eventos para mostrar detalle al hacer clic
  document.querySelectorAll(".serie-link").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const id = Number((event.target as HTMLElement).getAttribute("data-id"));
      const serie = series.find(s => s.id === id);
      if (serie) mostrarDetalle(serie);
    });
  });

  const promedio = series.reduce((sum, s) => sum + s.temporadas, 0) / series.length;
  document.getElementById("promedio")!.textContent = `Promedio de temporadas: ${promedio.toFixed(2)}`;
}

function mostrarDetalle(serie: Serie): void {
  const card = document.getElementById("serie-detalle")!;
  (document.getElementById("detalle-imagen") as HTMLImageElement).src = serie.imagen;
  document.getElementById("detalle-nombre")!.textContent = serie.nombre;
  document.getElementById("detalle-descripcion")!.textContent = serie.descripcion;
  (document.getElementById("detalle-url") as HTMLAnchorElement).href = serie.url;

  card.classList.remove("d-none");
}

mostrarSeries(series);
