window.onload = function() {

// var canvas = new fabric.Canvas('c', { isDrawingMode: true });
// canvas.backgroundColor = 'rgb(255, 255, 255)'
var canvas = new fabric.Canvas('c', {backgroundColor: 'rgb(255, 255, 255)'})

window.canvas = canvas

canvas.on('path:created', function (event) {
  console.log(event)
  // let drawing_path = event.path
  // let send_json = JSON.stringify(drawing_path)
  // socket.send(send_json)
})

// socket.on("message", function (event) {
//   console.log("message", event);
//   let json_resp = JSON.parse(event);
//   fabric.Path.fromObject(json_resp, function (share_path) {
//     canvas.add(share_path);
//   })
// })

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

function like_idea_emote_button()
{
  fabric.Image.fromURL('https://appstickers-cdn.appadvice.com/1410106976/827828369/67d24884a1cb520f7e200c823fc8a543-3.png', function(myImg) {
  var newImg = myImg.set({left: 100, top: 100, scaleX: 0.15, scaleY: 0.15}); 
  canvas.add(newImg)
    } )
  
  }

function love_idea_emote_button()
{
  fabric.Image.fromURL('https://appstickers-cdn.appadvice.com/1410106976/827828369/d7a76df54e1521ccf29d8007eac18023-2.png', function(myImg) {
  var newImg = myImg.set({left: 100, top: 100, scaleX: 0.15, scaleY: 0.15}); 
  canvas.add(newImg)
    } )
  
  }

function hate_idea_emote_button()
{
  fabric.Image.fromURL('https://appstickers-cdn.appadvice.com/1410106976/827828369/73b37fbb039a1be67a7ddb88da6f3cc7-11.png', function(myImg) {
  var newImg = myImg.set({left: 100, top: 100, scaleX: 0.15, scaleY: 0.15}); 
  canvas.add(newImg)
    } )
  
  }

  function dislike_idea_emote_button()
{
  fabric.Image.fromURL('https://appstickers-cdn.appadvice.com/1410106976/827828369/51fbce8a2551813be61ce4c2bc72a60a-7.png', function(myImg) {
  var newImg = myImg.set({left: 100, top: 100, scaleX: 0.15, scaleY: 0.15}); 
  canvas.add(newImg)
    } )
  
  }
