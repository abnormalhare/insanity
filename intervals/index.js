randomNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
randomIntervals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 15];

// Create a function called "createGrid" that makes a 5x10 grid of divs each containing a random note and interval in the format "[Note] - [Interval]"
function createGrid() {
    const rows = 10;
    const indeces = 5;
    const grid = document.createElement('div');
    const test = document.getElementById('test');
    grid.classList.add('grid');
    document.body.appendChild(grid);
    
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < indeces; j++) {
            const index = document.createElement('div');
            // use css to keep in line with the ones in its row
            index.classList.add('inline');
            // space them out evenly by giving them a width of 100% * indeces
            index.style.margin = 25 * (1 / indeces) + "vw";
            index.textContent = randomNotes[Math.floor(Math.random() * randomNotes.length)] + " - " + randomIntervals[Math.floor(Math.random() * randomIntervals.length)];
            
            const inputDiv = document.createElement('input-div');
            const input = document.createElement('input');
            input.type = "text";
            input.style.textAlign = "center";
            input.style.width = "20px";
            input.style.marginLeft = "1vw";
            inputDiv.appendChild(input);
            index.appendChild(inputDiv);
            row.appendChild(index);
        }
        row.style.margin = 25 * (1 / indeces) + "vh";
        grid.appendChild(row);
    }
    
    test.appendChild(grid);
}

document.querySelectorAll('h1').forEach(h1 => h1.remove());


