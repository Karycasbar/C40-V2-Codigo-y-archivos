var fuels, powerCoins, fuelImage, powerCoinImage;

//--------------------------------------------
fuelImage = loadImage("./assets/fuel.png");
powerCoinImage = loadImage("./assets/goldCoin.png");

//--------------------------------------------
fuels = new Group();
powerCoins = new Group();

//--------------------------------------------
addSprites(spriteGroup, numberOfSprites, spriteImage, scale) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;

      x = random(width / 2 + 150, width / 2 - 150);
      y = random(-height * 4.5, height - 400);

      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);

      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
}

//------------------------------------------
// Agregando sprite de combustible al juego
this.addSprites(fuels, 4, fuelImage, 0.02);

// Agregando sprite de moneda al juego
this.addSprites(powerCoins, 18, powerCoinImage, 0.09);

//--------------------------------------------
var obstaclesPositions = [
    { x: width / 2 + 250, y: height - 800, image: obstacle2Image },
    { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
    { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
    { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
    { x: width / 2, y: height - 2800, image: obstacle2Image },
    { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
    { x: width / 2 + 180, y: height - 3300, image: obstacle2Image },
    { x: width / 2 + 250, y: height - 3800, image: obstacle2Image },
    { x: width / 2 - 150, y: height - 4300, image: obstacle1Image },
    { x: width / 2 + 250, y: height - 4800, image: obstacle2Image },
    { x: width / 2, y: height - 5300, image: obstacle1Image },
    { x: width / 2 - 180, y: height - 5500, image: obstacle2Image }
  ];

//-----------------------------------------------

//agregando sprite de obstáculo en el juego
this.addSprites(obstacles, obstaclesPositions.length, obstacle1Image, 0.04, obstaclesPositions);

//---------------------------------------------------
if (positions.length > 0) {
    x = positions[i].x;
    y = positions[i].y;
    spriteImage = positions[i].image;
  } else {

//-------------------------------------------------
handleFuel(index) {
    // Agregando combustible
    cars[index - 1].overlap(fuels, function(collector, collected) {
      player.fuel = 185;
      //recolectado el sprite en el grupo de recolectables que desencadenan
      //el evento
      collected.remove();
    });
  }

  handlePowerCoins(index) {
    cars[index - 1].overlap(powerCoins, function(collector, collected) {
      player.score += 21;
      player.update();
      //recolectado el sprite en el grupo de recolectables que desencadenan
      //el evento
      collected.remove();
    });
  }


//-------------------------------------
this.handleFuel(index);
this.handlePowerCoins(index);


