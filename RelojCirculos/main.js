var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// setInterval(draw(), 10);
draw();

function draw()
{
    ctx.beginPath();
    ctx.arc(200, 200, 190, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    let x = 0 * Math.PI / 180;
    ctx.translate(200, 100);
    ctx.rotate(x);
    ctx.arc(200, 100, 90, 0, 2 * Math.PI);
    ctx.fillStyle = "#58C3BB";
    ctx.fill();
    ctx.rotate(-x);
    ctx.translate(-200, -100);

    ctx.beginPath();
    ctx.arc(200, 55, 45, 0, 2 * Math.PI);
    ctx.fillStyle = "#949A57";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(200, 30, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
}