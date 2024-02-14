const intervalList = ["1",  "b2", "2",  "b3", "3",  "4",  "b5", "5",  "b6", "6",  "b7", "7",  "8",  "9",  "11", "13"];
const aScale =       ["A",  "Bb", "B",  "C",  "C#", "D",  "Eb", "E",  "F",  "F#", "G",  "G#", "A",  "B",  "D",  "F#"];
const asScale =      ["A#", "B",  "C",  "C#", "D",  "D#", "E",  "E#", "F#", "G",  "G#", "A",  "A#", "B#", "D#", "G"];
const bbScale =      ["Bb", "Cb", "C",  "Db", "D",  "Eb", "E",  "F",  "Gb", "G",  "Ab", "A",  "Bb", "C",  "Eb", "G" ];
const bScale =       ["B",  "C",  "C#", "D",  "D#", "E",  "F",  "F#", "G",  "G#", "A",  "A#", "B",  "C#", "E",  "G#"];
const cScale =       ["C",  "Db", "D",  "Eb", "E",  "F",  "Gb", "G",  "Ab", "A",  "Bb", "B",  "C",  "D",  "F",  "A" ];
const csScale =      ["C#", "D",  "D#", "E",  "F",  "F#", "G",  "G#", "A",  "A#", "B",  "B#", "C#", "D#", "F#", "A#"];
const dbScale =      ["Db", "D",  "Eb", "E",  "F",  "Gb", "G",  "Ab", "A",  "Bb", "B",  "C",  "Db", "Eb", "Gb", "Bb"];
const dScale =       ["D",  "Eb", "E",  "F",  "F#", "G",  "Ab", "A",  "Bb", "B",  "C",  "C#", "D",  "E",  "G",  "B" ];
const dsScale =      ["D#", "E",  "F",  "F#", "G",  "G#", "A",  "A#", "B",  "C",  "C#", "D",  "D#", "E#", "A",  "B#"];
const ebScale =      ["Eb", "Fb", "F",  "Gb", "G",  "Ab", "A",  "Bb", "B",  "C",  "Db", "D",  "Eb", "F",  "A",  "C" ];
const eScale =       ["E",  "F",  "F#", "G",  "G#", "A",  "Bb", "B",  "C",  "C#", "D",  "D#", "E",  "F#", "A",  "C#"];
const fScale =       ["F",  "Gb", "G",  "Ab", "A",  "Bb", "Cb", "C",  "Db", "D",  "Eb", "E",  "F",  "G",  "Bb", "D" ];
const fsScale =      ["F#", "G",  "G#", "A",  "A#", "B",  "C",  "C#", "D",  "D#", "E",  "E#", "F#", "G#", "B",  "D#"];
const gbScale =      ["Gb", "G",  "Ab", "A",  "Bb", "Cb", "C",  "Db", "D",  "Eb", "E",  "F",  "Gb", "Ab", "Cb", "Eb"];
const gScale =       ["G",  "Ab", "A",  "Bb", "B",  "C",  "Db", "D",  "Eb", "E",  "F",  "F#", "G",  "A",  "C",  "E" ];
const gsScale =      ["G#", "A",  "A#", "B",  "B#", "C#", "D",  "D#", "E",  "E#", "F#", "G",  "G#", "A#", "C#", "F" ];
const abScale =      ["Ab", "A",  "Bb", "Cb", "C",  "Db", "D",  "Eb", "E",  "F",  "Gb", "G",  "Ab", "Bb", "Db", "F" ];
const randomScaleList = [aScale, asScale, bbScale, bScale, cScale, csScale, dbScale, dScale, dsScale, ebScale, eScale, fScale, fsScale, gbScale, gScale, gsScale, abScale];

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

            let scale = randomScaleList[Math.floor(Math.random() * randomScaleList.length)];
            let note = scale[0];
            let intIndex = Math.floor(Math.random() * intervalList.length);
            let interval = intervalList[intIndex];
            let correctAnswer = scale[intIndex];
            index.textContent = note + " - " + interval;
            switch (correctAnswer) {
                case "B#": correctAnswer = ["B#", "C"]; break;
                case "E#": correctAnswer = ["E#", "F"]; break;
                case "Cb": correctAnswer = ["Cb", "B"]; break;
                case "Fb": correctAnswer = ["Fb", "E"]; break;
            }
            index.correctAnswer = correctAnswer;
            
            const inputDiv = document.createElement('input-div');
            const input = document.createElement('input');
            input.type = "text";
            input.style.textAlign = "center";
            input.style.width = "2vw";
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
    const grid = document.querySelector('.grid');
    const timer = document.getElementById('timer');
    const submit = document.getElementById('submit');

    clearInterval(timer.interval);

    let time = timer.textContent;
    let numCorrect = 0;

    for (let i = 0; i < grid.children.length; i++) {
        for (let j = 0; j < grid.children[i].children.length; j++) {
            const input = grid.children[i].children[j].querySelector('input');
            const text = grid.children[i].children[j].textContent.split(" - ");
            const correct = grid.children[i].children[j].correctAnswer;
            const answer = input.value;
            if ((typeof correct === "object" && (answer === correct[0] || answer === correct[1])) || answer === correct) {
                input.style.backgroundColor = "green";
                numCorrect++;
            } else {
                input.style.backgroundColor = "red";
                input.value = correct;
                input.width = "3vw";
            }

            console.log(answer, correct);
        }
    }

    let score = 0;
    if (numCorrect === 50) {
        score = numCorrect * 10 + time * 100;
        timer.textContent = `Completed in ${time} seconds: ${score}`;
    } else {
        score = Math.round(numCorrect * 10 + time / 2);
        timer.textContent = `${numCorrect}/50 | Score: ${score}`;
    }

    submit.textContent = "Try Again?";
    submit.onclick = () => location.reload();
    submit.classList.add("submitButton");
}

// a function that displays a timer and stops the test after 3 minutes
function startTimer() {
    let time = 180;
    const timer = document.getElementById('timer');
    timer.interval = setInterval(() => {
        time--;
        timer.textContent = time;
        if (time === 0) {
            stopTest();
        }
    }, 1000);
}
