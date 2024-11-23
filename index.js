var inp_value = document.getElementById('input');
var form = document.getElementById('form');
const mots = ["pomme", "banane", "orange", "mangue", "ananas", "fraise"];

var word = mots.sort(() => Math.random() - 0.5)[0];
var sliced_word = word[0];
inp_value.value = sliced_word;
inp_value.id = sliced_word;

for (let index = 1; index < word.length; index++) {
    let id = word[index];
    var inp_created = document.createElement('input');
    inp_created.id = id;
    form.append(inp_created)
}