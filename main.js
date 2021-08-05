var canvas = new fabric.Canvas('myCanvas')
var player_x = 0;
var player_Y = 0;
var block_height = 30;
var block_width = 30;
var player_object = ""
var block_object = ""
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_Y,
            left:player_x
        })
        canvas.add(player_object)
    })
}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_Y,
            left:player_x
        })
        canvas.add(block_object)
    })
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "66"){
        block_update("Brick.jpg")
    }
    if (keypressed == "71"){
        block_update("Glowstone.png")
    }
    if (keypressed == "86"){
        block_update("Grass Block.png")
    }
    if (keypressed == "78"){
        block_update("Grass.png")
    }
    if (keypressed == "77"){
        block_update("Moded Brick.png")
    }
    if (keypressed == "79"){
        block_update("Moded Grass.png")
    }
    if (keypressed == "85"){
        block_update("Oak log.jpg")
    }
    if (keypressed == "89"){
        block_update("Old Netherack.jpg")
    }
    if (keypressed == "82"){
        block_update("Stone.jpg")
    }
    if (keypressed == "46"){
        block_update("delete.png")
    }

    if (keypressed == "49"){
        block_height = block_height + 10
          block_width = block_width + 10 
          document.getElementById("width").innerHTML = block_width
          document.getElementById("height").innerHTML = block_height
    }
    if (keypressed == "50"){
        block_height = block_height - 10
          block_width = block_width - 10 
          document.getElementById("width").innerHTML = block_width
          document.getElementById("height").innerHTML = block_height
    }
    if (keypressed == "40"){
              down()
    }
    if (keypressed == "38"){
        up()
}
if (keypressed == "37"){
    left()
}
if (keypressed == "39"){
    right()
}
}
function up(){
    player_Y = player_Y - block_height
    canvas.remove(player_object)
    player_update()
}
function down(){
    player_Y = player_Y + block_height
    canvas.remove(player_object)
    player_update()
}
function left(){
    player_x = player_x - block_width
    canvas.remove(player_object)
    player_update()
}
function right(){
    player_x = player_x + block_width
    canvas.remove(player_object)
    player_update()
}