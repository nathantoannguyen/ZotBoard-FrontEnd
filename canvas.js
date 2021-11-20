window.onload = function() {

var canvas = new fabric.Canvas('c', {isDrawingMode:true});
canvas.backgroundColor = 'rgb(255, 255, 255)'

// create a rectangle object
// var rect = new fabric.Rect({
//     left: 100,
//     top: 100,
//     fill: 'yellow',
//     width: 100,
//     height: 100
//   });

// "add" rectangle onto canvas
// canvas.add(rect);

// make a function? --> when called, a sticky note is created
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

// canvas.add(rect)
// rect.set('selectable', true)

// var group = new fabric.Group([ rect, text ], {
//     left: 150,
//     top: 100,
//   });
  
//   canvas.add(group);


  



// Double-click event handler
const fabricDblClick = function(obj, handler) {
    return function() {
      if (obj.clicked) handler(obj);
      else {
        obj.clicked = true;
        setTimeout(function() {
          obj.clicked = false;
        }, 500);
      }
    };
  };


// send drawing to backend

canvas.on('path:created',function(event){
  console.log(event)
  let drawing_path = event.path;
  let json_msg = JSON.stringify(drawing_path);

// sample code for receiving response from backend and replicating it
//
  let json_resp = JSON.parse(json_msg);
  fabric.Path.fromObject(json_resp,function(share_path){
    share_path.left = 0;
    canvas.add(share_path);
  })
})
 


}