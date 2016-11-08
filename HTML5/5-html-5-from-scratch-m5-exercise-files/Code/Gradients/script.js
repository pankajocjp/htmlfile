


function initiate()
{
    var elem = document.getElementById('canvas');
    var canvas = elem.getContext('2d');
    var gradient = canvas.createLinearGradient(0, 0, 10, 100);
    gradient.addColorStop(0.5, '#0088FF');
    gradient.addColorStop(1, '#ff0000');
    canvas.fillStyle = gradient;

    canvas.fillRect(150, 10, 200, 100);
    canvas.fillRect(400, 10, 100, 100);
    canvas.fillRect(400, 150, 100, 100);

}

addEventListener("load", initiate);