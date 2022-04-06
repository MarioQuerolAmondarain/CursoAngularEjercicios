var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


// draw();
setInterval(draw, 1000);

function draw()
{
    var hoy = new Date()
    let anguloHoras = hoy.getHours() * Math.PI/6;
    let anguloMinutos = hoy.getMinutes() * Math.PI/30;
    let anguloSegundos = hoy.getSeconds() * Math.PI/30;
    
    ctx.save();
    
    ctx.beginPath();
    ctx.arc(200, 200, 190, 0, 2 * Math.PI);
    ctx.fillStyle = "#B4C7B2";
    ctx.fill();
    
    ctx.beginPath();
    ctx.translate(200, 200);
    ctx.rotate(anguloHoras);
    ctx.arc(0, -100, 90, 0, 2 * Math.PI);
    ctx.fillStyle = "#58C3BB";
    ctx.fill();
    ctx.translate(0, -100);  
    ctx.rotate(-anguloHoras);
    
    ctx.beginPath();
    ctx.rotate(anguloMinutos);
    ctx.arc(0, -55, 35, 0, 2 * Math.PI);
    ctx.fillStyle = "#949A57";
    ctx.fill();
    ctx.translate(0, -55);
    ctx.rotate(-anguloMinutos);

    ctx.beginPath();
    ctx.rotate(anguloSegundos);
    ctx.arc(0, -25, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.restore();
}
function drawContext(ctx)
{
    ctx.rect(0, 0, 400, 400);
    ctx.stroke();
}