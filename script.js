function createTable() {
  // Prompt for rows and columns
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  // Convert to numbers
  const rn = parseInt(rows);
  const cn = parseInt(cols);

  // Validate input
  if (isNaN(rn) || isNaN(cn)) return;
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be positive.");
    return;
  }

  const table = document.getElementById("myTable");

  // Clear any existing rows
  table.innerHTML = "";

  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

