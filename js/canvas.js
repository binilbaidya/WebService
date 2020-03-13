window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var img = document.getElementById("three");
    ctx.drawImage(img, 20, 15, 250, 110);
};
