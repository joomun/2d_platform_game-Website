const canvas = document.getElementById("canvas_1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 5250;
const CANVAS_HEIGHT = 525;

//constant for slow of frames
let staggerFrames = 1;
let gameFrame = 0;

let gameSpeed = 0.5;

//movement
let x_right = 10;

let x_left = 0;

let x_final = 6;
let y_final = CANVAS_HEIGHT - 90;

function damage() {
  //creating image
  const playerImage = new Image();
  playerImage.src = "./Assests/Images/Life_dead.png";

  const attack_width = 643;

  let framX = 0;
  let count = 0;

  function animate() {
    player = ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player = ctx.drawImage(
      playerImage,
      framX * attack_width,
      0,
      attack_width,
      510,
      x_final,
      y_final,
      attack_width - 400,
      70
    );

    if (gameFrame % staggerFrames == 0) {
      if (framX < 12) framX++;
      else {
        framX = 0;
      }
    }
    count++;

    if (count == 25) {
      return idle();
    }

    gameFrame++;
    //to loop the thing
    requestAnimationFrame(animate);
  }

  animate();
}

function attack() {
  //creating image
  const playerImage = new Image();
  playerImage.src = "./Assests/Images/Attack.png";

  const attack_width = 818;

  let framX = 0;
  let count = 0;

  function animate() {
    player = ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player = ctx.drawImage(
      playerImage,
      framX * attack_width,
      0,
      attack_width,
      510,
      x_final,
      y_final,
      attack_width - 400,
      70
    );

    if (gameFrame % staggerFrames == 0) {
      if (framX < 12) framX++;
      else {
        framX = 0;
      }
    }
    count++;

    if (count == 25) {
      return idle();
    }

    gameFrame++;
    //to loop the thing
    requestAnimationFrame(animate);
  }

  animate();
}

function idle() {
  const playerImage = new Image();
  playerImage.src = "./Assests/Images/walk.png";

  const walk_right_width = 654;

  let framX = 0;
  let count = 0;

  function animate_idle() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (gameFrame % staggerFrames == 0) {
      if (framX < 12) framX++;
      else {
        framX = 0;
      }
    }
    count++;

    player = ctx.drawImage(
      playerImage,
      framX * walk_right_width,
      0,
      walk_right_width,
      510,
      x_final,
      y_final,
      walk_right_width - 400,
      70
    );

    if (x_right == 100) {
      x_right = 0;
      return;
    }

    gameFrame++;

    requestAnimationFrame(animate_idle);
  }

  animate_idle();
}

function move_right() {
  //creating image
  const playerImage = new Image();
  playerImage.src = "./Assests/Images/walk.png";

  const walk_right_width = 654;

  let framX = 0;
  let count = 0;

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (gameFrame % staggerFrames == 0) {
      if (framX < 12) framX++;
      else {
        framX = 0;
      }
    }
    count++;

    x_right = x_right + 10;

    player = ctx.drawImage(
      playerImage,
      framX * walk_right_width,
      0,
      walk_right_width,
      510,
      x_final,
      y_final,
      walk_right_width - 400,
      70
    );

    x_final = x_right + x_final;

    if (x_right == 100) {
      x_right = 0;
      return;
    }

    gameFrame++;
    //to loop the thing
    requestAnimationFrame(animate);
  }

  animate();
}

function move_left() {
  //creating image
  const playerImage = new Image();
  playerImage.src = "./Assests/Images/walk.png";

  const walk_left_width = 654;

  let framX = 0;
  let count = 0;

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (gameFrame % staggerFrames == 0) {
      if (framX < 12) framX++;
      else {
        framX = 0;
      }
    }
    count++;

    x_left = x_left - 10;

    player = ctx.drawImage(
      playerImage,
      framX * walk_left_width,
      0,
      walk_left_width,
      510,
      x_final,
      y_final,
      walk_left_width - 400,
      70
    );

    x_final = x_left + x_final;

    if (x_left == -100) {
      x_left = 0;
      return;
    }

    gameFrame++;
    //to loop the thing
    requestAnimationFrame(animate);
  }

  animate();
}

function jump() {
  //creating image
  const playerImage = new Image();
  playerImage.src = "./Assests/Images/walk.png";

  const walk_left_width = 654;
  let y_jump = 0;
  let framX = 0;
  let count = 0;

  function animate() {
    while (y_jump < CANVAS_HEIGHT - 90) {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      if (gameFrame % staggerFrames == 0) {
        if (framX < 12) framX++;
        else {
          framX = 0;
        }
      }
      count++;
      current_y = y_final;

      y_jump = y_jump - 10;

      player = ctx.drawImage(
        playerImage,
        framX * walk_left_width,
        0,
        walk_left_width,
        510,
        x_final,
        y_final,
        walk_left_width - 400,
        70
      );

      y_final = y_jump + y_final;

      if (y_jump < 0) {
        y_jump = current_y;
        return;
      }

      gameFrame++;
      //to loop the thing
      requestAnimationFrame(animate);
    }
  }

  animate();
}

idle();

document.addEventListener("keyup", (event) => {
  if (event.code == "Space") {
    attack();
  }

  if (event.code == "ArrowLeft") {
    move_left();
  }
});

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 39:
      move_right();
      break;
  }
};

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }

  if (e.keyCode == 38 && e.target == document.body) {
    e.preventDefault();
  }

  if (e.keyCode == 40 && e.target == document.body) {
    e.preventDefault();
  }

  if (e.keyCode == 39 && e.target == document.body) {
    e.preventDefault();
  }
});
