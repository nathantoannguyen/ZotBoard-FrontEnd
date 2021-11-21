window.onload = function() {

var canvas = new fabric.Canvas('c', {backgroundColor: 'rgb(255, 255, 255)'});

window.canvas = canvas

// send drawing to backend

// send user drawing to back end

canvas.on('path:created',function(event){
  console.log()

})

}


function add_text_button() {
  canvas.isDrawingMode = false
  var text = new fabric.Textbox("Insert text", {
    fontSize: 18,
    width: 100,
    cursorColor: "black",
    top: 50,
    left: 50,
    editable: true
  });
  
  canvas.add(text)
  text.set('selectable', true)
}

function draw_button() {
  canvas.isDrawingMode = true
}

function stop_drawing_button() {
  canvas.isDrawingMode = false
}

function insert_rectangle_button() {
  canvas.isDrawingMode = false
  var rect = new fabric.Rect( {
    width: 200,
    height: 100,
    fill: "white",
    stroke: "black",
    strokeWidth: 2,
    left: 100,
    top: 100,
  });

  canvas.add(rect)
  rect.set('selectable', true)
}

function insert_circle_button() {
  canvas.isDrawingMode = false
  var circ = new fabric.Ellipse( {
    rx: 50,
    ry: 50,
    raidus: 50,
    fill: "white",
    stroke: "black",
    strokeWidth: 2,
    left: 100,
    top: 100,
  });

canvas.add(circ)
circ.set('selectable', true)
}

function insert_triangle_button() {
  canvas.isDrawingMode = false
  var tri = new fabric.Triangle( {
    width: 150,
    height: 100,
    angle: 0,
    fill: "white",
    stroke: "black",
    strokeWidth: 2,
    left: 100,
    top: 100,
  });

  canvas.add(tri)
  tri.set('selectable', true)
}
