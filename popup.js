document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('randomButton');
    var sentenceText = document.getElementById('sentenceText');

    button.addEventListener('click', function () {
        var sentences = [
            'This is the first random sentence.',
            'Here is another random sentence.',
            'A third random sentence is displayed.',
            'Random sentence number four.',
            'And finally, the fifth random sentence.',
        ];

        var randomIndex = Math.floor(Math.random() * sentences.length);
        sentenceText.textContent = sentences[randomIndex];
    });
});
