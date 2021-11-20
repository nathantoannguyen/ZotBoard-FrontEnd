window.onload = function() {

var canvas = new fabric.Canvas('c', {isDrawingMode:true});
canvas.backgroundColor = 'rgb(170,210,250)'
// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'yellow',
  width: 100,
  height: 100
});

// "add" rectangle onto canvas
// canvas.add(rect);

// var text = window.prompt("Enter text: ");

//make a function? --> when called, a sticky note is created
var text = new fabric.Textbox("Insert text", {
  fontSize: 14,
  width: 100,
  cursorColor: "black",
  top: 100,
  left: 100,
  editable: true
});

canvas.add(rect)
canvas.add(text)

var group = new fabric.Group([ rect, text ], {
    left: 150,
    top: 100,
  });
  
  canvas.add(group);

// send drawing to backend

canvas.on('path:created',)


//   rect.set('selectable', true)




}