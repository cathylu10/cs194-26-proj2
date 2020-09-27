function createImageTable(tableRef, images) {
    const row = tableRef.rows[tableRef.rows.length-1];
    for (i = 0; i < images.length; i++) {
        let newCell = row.insertCell(0);
        let cellContent = `
            <img class='small-images' src='results/${images[i]}'>

        `;
        newCell.innerHTML = cellContent;
    }
}

const lincoln_gauss = []
for (i = 4; i >= 0; i--) {
    lincoln_gauss.push("lincoln_gauss_" + i + ".jpg")
}
console.log(lincoln_gauss)
lincolnGaussTableRef = document.getElementById("lincoln-gauss");
createImageTable(lincolnGaussTableRef, lincoln_gauss)

const lincoln_lap = []
for (i = 4; i >= 0; i--) {
    lincoln_lap.push("lincoln_lap_" + i + ".jpg")
}
console.log(lincoln_lap)
lincolnLapTableRef = document.getElementById("lincoln-lap");
createImageTable(lincolnLapTableRef, lincoln_lap)

const hybrid_gauss = []
for (i = 4; i >= 0; i--) {
    hybrid_gauss.push("hybrid_gauss_" + i + ".jpg")
}
console.log(hybrid_gauss)
hybridGaussTableRef = document.getElementById("hybrid-gauss");
createImageTable(hybridGaussTableRef, hybrid_gauss)

const hybrid_lap = []
for (i = 4; i >= 0; i--) {
    hybrid_lap.push("hybrid_lap_" + i + ".jpg")
}
console.log(hybrid_lap)
hybridLapTableRef = document.getElementById("hybrid-lap");
createImageTable(hybridLapTableRef, hybrid_lap)

const beach_lap = []
for (i = 4; i >= 0; i--) {
    beach_lap.push("beach_lap_" + i + ".jpg")
}
console.log(beach_lap)
beachLapTableRef = document.getElementById("beach-lap");
createImageTable(beachLapTableRef, beach_lap)