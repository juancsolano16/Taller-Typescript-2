const seriesTableBody = document.getElementById("series-table-body")!;
for (const serie of series) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${serie.id}</td>
    <td><a href="${serie.url}" target="_blank">${serie.nombre}</a></td>
    <td>${serie.canal}</td>
    <td>${serie.temporadas}</td>
  `;

  seriesTableBody.appendChild(row);
}

const totalSeasons = series.reduce((sum, serie) => sum + serie.temporadas, 0);
const averageSeasons = totalSeasons / series.length;

const promedioText = document.createElement("p");
promedioText.textContent = `Promedio de temporadas: ${averageSeasons.toFixed(2)}`;

seriesTableBody.parentElement?.appendChild(promedioText);
