let currentVerse = 1;

const verses = {
    1: `
        <p><strong>John 3:16</strong></p>
        <p>
        For God so loved the world that He gave His one and only Son,
        that whoever believes in Him shall not perish,
        but have eternal life.
        </p>
    `,

    2: `
        <p><strong>John 20:31</strong></p>
        <p>
        "But these are written that you may believe that Jesus is the Christ,
        the Son of God, and that believing you may have life in His name."
        </p>
    `,

    3: `
        <p><strong>John 14:6</strong></p>
        <p>
        "I am the Way, the Truth, and the Life.
        No man comes to the Father, but by Me."
        </p>
    `,

    4: `
        <p><strong>Halley's Bible Handbook</strong></p>
        <p>
        "The Bible is the most priceless possession of the human race."
        </p>
    `
};

function openVerse(num) {
    currentVerse = num;
    document.getElementById("verseModal").style.display = "block";
    document.getElementById("verseTitle").innerText = "VERSE " + num;
    document.getElementById("verseText").innerHTML = verses[num];
}

function closeModal() {
    document.getElementById("verseModal").style.display = "none";
}

function nextVerse() {
    currentVerse++;
    if (currentVerse > 4) currentVerse = 1;
    openVerse(currentVerse);
}