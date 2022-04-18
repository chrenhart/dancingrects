const canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var w = 0;
var h = 0;

var shapes = [];
var xvalues = [0];
var shCols = [];
var counter = 0;

const iv = setInterval(drawShapes, 10);

for (let i = 0; i < 100; i++) {
    let x = getInt(8, 80);
    let y = getInt(30, 100);
    shapes.push([x, y]);
    
    let c = getColor();
    shCols.push(c);
}

for (let i = 0; i < shapes.length; i++) {
    let x = xvalues[i] + shapes[i][0] + getInt(0, 6);
    xvalues.push(x);
}

window.onload = function() {
    w = window.innerWidth;
    h = window.innerHeight / 1.3;
    
    canvas.width = w;
    canvas.height = h;
    
    ctx.fillStyle = 'FloralWhite';
    ctx.fillRect(0, 0, w, h);
       
}

window.onscroll = function() {
    if (window.innerWidth > 800) {
        if (window.scrollY > window.innerHeight * 1.5) {
            canvas.style.display = 'none';
        } else {
            canvas.style.display = 'block';
        }
    }
    var winHeight = window.innerHeight;
    var scrHeight = window.scrollY;
    var opcVal = 1 - (scrHeight / winHeight);
    if (opcVal < 0) {
        opcVal = 0;
    }
    canvas.style.opacity = opcVal;
}

function drawShapes() {
    ctx.clearRect(0, 0, w, h); 
    for (let i = 0; i < shapes.length; i++) {
        
        ctx.fillStyle = shCols[i];
        ctx.fillRect(xvalues[i], 0, shapes[i][0], shapes[i][1]);
        
        
        if (i % 3 == 0) {
            shapes[i][1] += (Math.sin(counter * 0.02) * getInt(0, 4));
        }
        
        else if (i % 3 == 1) {
            shapes[i][1] += (Math.cos(counter * 0.02) * getInt(0, 5)); 
        }
        
        else if (i % 3 == 2) {
            shapes[i][1] += (Math.sin(counter * 0.015) * getInt(0, 2));
            
        }
    }
    counter += 1;
}

function clear() {
    ctx.clearRect(0, 0, w, h);
}


function getColor() {
    var cols = ['Crimson', 'DarkSlateBlue', 'Coral', '#14847b', '#6d6d6d'];
    return cols[Math.floor(Math.random() * cols.length)]
}

function createPoint(w, h) {
    var point = {
        x: getInt(0, w),
        y: getInt(0, h)
    }
    return point;
}

function getInt(min, max) {
    return Math.floor(Math.random() * max) + min + 1;
}