window.onload = function() {

var canvas = new fabric.Canvas('c');
canvas.backgroundColor = 'rgb(255, 255, 255)'

// make a function? --> when called, a sticky note is created
// var text = new fabric.Textbox("Insert text", {
//   fontSize: 14,
//   width: 100,
//   cursorColor: "black",
//   top: 50,
//   left: 50,
//   editable: true
// });

// canvas.add(text)
// text.set('selectable', true)

function add_text_button() {
  canvas.isDrawingMode = false
  var text = new fabric.Textbox("Insert text", {
    fontSize: 14,
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

function clear_board_button() {
  var all_objects = canvas.getObjects()
  canvas.dispose(all_objects)
}









// send drawing to backend

// send user drawing to back end

canvas.on('path:created',function(event){
  console.log()


})






}