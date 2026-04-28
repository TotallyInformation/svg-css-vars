// Use fetch to import ./blue-world.svg and add to the div with id "world0-img"
fetch('./blue-world.svg')
    .then(response => response.text())
    .then(svg => {
        document.getElementById('world0-img').innerHTML = svg;
    });

// Another fetch but this time, append to world0a-img as a child <img> element
fetch('./blue-world.svg')
    .then(response => response.text())
    .then(svg => {
        const img = document.createElement('img');
        img.src = 'data:image/svg+xml;base64,' + btoa(svg);
        document.getElementById('world0a-img').appendChild(img);
    });
