const amount = {
    start: 1,
    chapters: [2, 2, 4, 104, 84, 187, 490]
}
let location = 2
let index = 0
let i = amount.chapters[index]
while (location - i > 0) {
    location -= i;
    index++;
    i = amount.chapters[index];
}
console.log(location)