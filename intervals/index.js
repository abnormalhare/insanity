const randomNotesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const randomNotesFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const randomList = [randomNotesSharp, randomNotesFlat];
const randomIntervals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13];
const intervalIncs = [0, 2, 4, 5, 7, 9, 11, 12, 14, 17, 21];
var intervalTimer;

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
            let randomNotes = randomList[Math.floor(Math.random() * 2)];
            let randomNote = Math.floor(Math.random() * randomNotes.length)
            let randomInterval = Math.floor(Math.random() * randomIntervals.length)
            index.textContent = randomNotes[randomNote] + " - " + randomIntervals[randomInterval];
            index.correctAnswer = (randomNote + intervalIncs[randomInterval]) % randomNotes.length;
            
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

function startTest() {
    document.querySelector('h1').remove();

    createGrid();
    document.getElementById('start').remove();

    const submit = document.getElementById('submit');
    const timer = document.getElementById('timer');
    submit.style.display = "inline";
    submit.style.margin = "auto";
    submit.style.marginLeft = "20vw";
    timer.style.display = "inline";
    timer.style.fontFamily = "ADLaM Display";
    startTimer();
}

function stopTest() {
    clearInterval(intervalTimer);
    const grid = document.querySelector('.grid');
    const timer = document.getElementById('timer');
    const submit = document.getElementById('submit')

    let time = timer.textContent;
    let score = 0;

    for (let i = 0; i < grid.children.length; i++) {
        for (let j = 0; j < grid.children[i].children.length; j++) {
            const input = grid.children[i].children[j].querySelector('input');
            const text = grid.children[i].children[j].textContent.split(" - ");
            const correct = grid.children[i].children[j].correctAnswer;
            const note = text[0];
            const interval = text[1];
            const answer = input.value;
            if (answer === randomList[0][correct] || answer === randomList[1][correct]) {
                input.style.backgroundColor = "green";
                score += 1;
            } else {
                input.style.backgroundColor = "red";
                input.style.width = "32px";
                input.value = `${randomList[0][correct]}/${randomList[1][correct]}`;
            }
        }
    }

    submit.textContent = "Try Again?";
    submit.onclick = () => location.reload();
    time.textContent = `Score: (${score}/50), ${time} sec. = ${score * 10 + time * 2}`;
}

// a function that displays a timer and stops the test after 3 minutes
function startTimer() {
    let time = 120;
    const timer = document.getElementById('timer');
    intervarTimer = setInterval(() => {
        time--;
        timer.textContent = time;
        if (time === 0) {
            clearInterval(intervalTimer);
            document.getElementById('submit').click();
        }
    }, 1000);
}
