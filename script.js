document.body.addEventListener('click', clickEvent, true); 

var dotCount = 0;
var maxDots = 80;
var typesOfMove = ["move", "move-reverse"];

setInterval(function() {
    generateDot(Math.random() * window.innerWidth,Math.random() * window.innerHeight);
},500);

function clickEvent(e) {
    var x = e.clientX;     // Get the horizontal coordinate
    var y = e.clientY;     // Get the vertical coordinate
    
    generateDot(x,y);
}

function generateDot(x,y) {
    var leftPercent = x / innerWidth * 100;
    var topPercent = y / innerHeight * 100;

    var ranNumVw = Math.ceil(Math.random() * 30) * (Math.round(Math.random()) ? 1 : -1)
    var ranNumVh = Math.ceil(Math.random() * 30) * (Math.round(Math.random()) ? 1 : -1)


    var span = document.createElement("span");
    span.style.color = getRandomColor();
    span.style.top = topPercent + "%";
    span.style.left = leftPercent + "%";
    span.style.animationDuration = Math.floor(Math.random() * 20) + 5 + "s";
    span.style.animationDelay = "0s";
    span.style.transformOrigin = ranNumVw + "vw " + ranNumVh + "vh";
    span.style.boxShadow = "2vmin 0 1.112210687524572vmin currentColor";
    span.style.animationName = typesOfMove[Math.round(Math.random())];
    if(dotCount > maxDots) {
        dotCount--;
        removeDot();
    }
    dotCount++;
    document.getElementById("background").appendChild(span);
}

function removeDot() {
    var queue = document.getElementById('background');
    var elements = queue.getElementsByTagName('span');
    queue.removeChild(elements[0]);

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  