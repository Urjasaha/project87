var canvas = new fabric.Canvas('myCanvas');
image_width = 30;
image_height = 30;
player_x = 10;
player_y = 10;
var playerObject = "";
var image_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
        top:player_y,
        left:player_x
        });
        canvas.add(playerObject);
        
    });
}

function newimage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
    image_object = Img;

    image_object.scaleToWidth(image_width);
    image_object.scaleToHeight(image_height);
    image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(image_object);
    
});

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) { 
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        image_width = image_width + 10;
        image_height = image_height + 10;
        document.getElementById("current_width").innerHTML = image_width;
        document.getElementById("current_height").innerHTML = image_height;
    }
    if(e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        image_width = image_width - 10;
        image_height = image_height - 10;
        document.getElementById("current_width").innerHTML = image_width;
        document.getElementById("current_height").innerHTML = image_height;
    }

    if(keyPressed == '38') {
        up();
        console.log("up");
    }
    if(keyPressed == '40') {
        down();
        console.log("down");
    }
    if(keyPressed == '37') {
        left();
        console.log("left");
    }
    if(keyPressed == '39') {
        right();
        console.log("right");
    }
    if(keyPressed == '70') {
        newimage('ironman_face.png');
        console.log("f");
    }
    if(keyPressed == '66') {
        newimage('spiderman_body.png');
        console.log("b");
    }
    if(keyPressed == '76') {
        newimage('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed == '82') {
        newimage('thor_right_hand.png');
        console.log("r");
    }
    if(keyPressed == '72') {
        newimage('captain_america_left_hand.png');
        console.log("h");
    }
    
}