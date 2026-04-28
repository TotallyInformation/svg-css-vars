// Use fetch to import ./blue-world.svg and add to the div with id "world0-img"
fetch('./blue-world.svg')
    .then(response => response.text())
    .then(svg => {
        document.getElementById('world0-img').innerHTML = svg;
    });
