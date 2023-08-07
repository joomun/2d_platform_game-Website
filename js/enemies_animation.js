//to Let javascript include html canvas elements in it
/** @type {HTMLCanvasElement} */

export let score_result = 0;
const enemy_canvas = document.getElementById("canvas_3");
const ctx_enemies = enemy_canvas.getContext("2d");

const CANVAS_WIDTH = (enemy_canvas.width = 5250);
const CANVAS_HEIGHT = (enemy_canvas.height = 525);

let gameSpeed = 1;

let number_enemies = 2;
const enemiesArray = [];
const enemiesArray_right = [];
const enemiesArray_on = [];
const enemiesArray_circle = [];
const enemiesArray_right_left = [];

const explostionArray_on = [];
const walk_left_width = 654;
let x_final_attack = 0;
let y_final_attack = 0;

let score = false;
let damage_audio;

let damaged = false;
let health = 100;


let logged_in_user =  JSON.parse(sessionStorage.getItem("currentloggedin"));

try {
  let highscore=JSON.stringify(logged_in_user.high_Score);
}

catch{
  console.log('not logged-in')
  document.getElementById("main").remove()
  document.getElementById("not_logged-in").innerHTML = '<object type="text/html" data="./modal_window_not_logged-in.html" ></object>'
}

let highscore=JSON.parse(localStorage[logged_in_user.name]).high_Score;
function preload() {
  damage_audio = loadSound("./Assests/Sound/scream.mp3");
}

function play(audio_location) {
  var audio = new Audio(audio_location);
  audio.play();
}

var progressBar = function (canvas) {
  return {
    ctx_progress: document.getElementById("Progress_bar").getContext("2d"),
    display: function (p, color) {
      this.ctx_progress.clearRect(
        0 + 100,
        30,
        CANVAS_WIDTH * 2,
        CANVAS_HEIGHT / 30
      );
      this.ctx_progress.fillStyle = "#444444";
      this.ctx_progress.fillRect(
        0 + 100,
        30,
        CANVAS_WIDTH * 2,
        CANVAS_HEIGHT / 30
      );
      this.ctx_progress.fillStyle = color;
      this.ctx_progress.fillRect(
        0 + 100,
        30,
        (p * CANVAS_WIDTH) / 2500,
        CANVAS_HEIGHT / 30
      );
    },
  };
};

progressBar("Progress_bar").display(health, "#04AA6D");
function damage() {
  play("./Assests/Sound/scream.mp3");
  //creating image
  const playerImage = new Image();
  playerImage.src = "./Assests/Images/Life_dead.png";

  const attack_width = 643;

  let framX = 0;
  let count = 0;
  health = health - 10;
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

    x_final_attack = x_final;

    y_final_attack = y_final;
    if (gameFrame % staggerFrames == 0) {
      if (framX < 12) framX++;
      else {
        framX = 0;
      }
    }
    count++;

    if (count == 25) {
      damaged = false;
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

class explosion {
  constructor(x, y) {
    this.image = new Image();
    this.image.src = "./Assests/Images/Explosion.png";
    this.speed = gameSpeed * 3;
    this.spriteWidth = 96;
    this.spriteHeight = 96;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.x = x;
    this.count;

    this.y = y;
    this.frame = 0;

    this.flapspeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    if (gameFrame % this.flapspeed == 0) {
      //ternary operator for if statement
      this.frame > 11 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx_enemies.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
    gameFrame++;
  }
}

class Enemy_on {
  constructor() {
    this.image = new Image();
    this.image.src = "./Assests/Images/enemies/enemy5-2.png";
    this.speed = gameSpeed * 3;
    this.spriteWidth = 1214;
    this.spriteHeight = 787;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 10;
    this.x = CANVAS_WIDTH - Math.floor(Math.random() * 900 + 100);

    if (this.x > CANVAS_WIDTH) {
      this.x = CANVAS_WIDTH + Math.floor(Math.random() * 5 + 10);
    }
    this.y = y_final + gameSpeed;
    this.frame = 0;
    this.count = 0;
    this.flapspeed = Math.floor(Math.random() * 3 + 1) + gameSpeed;

    //properties for sin movement

    this.angle = 0;

    //properties for curve speed
    this.angleSpeed = Math.random() * 0.2;

    //properties for curve size
    this.curve = Math.random() * 5;
  }
  update() {
    this.x = this.x - 10;
    if (this.x + this.width < 0) this.x = enemy_canvas.width;
    if (gameFrame % this.flapspeed == 0) {
      //ternary operator for if statement
      this.frame > 19 ? (this.frame = 0) : this.frame++;
    }

    this.count = this.count + 1;
  }

  draw() {
    ctx_enemies.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
    gameFrame++;
  }

  check() {
    document.addEventListener("keyup", (event) => {
      if (event.code == "Space") {
        if (
          this.x < x_final + 818 &&
          this.x + this.width > x_final &&
          this.y < y_final + this.height &&
          this.y + this.height > y_final
        ) {
          score = true;
          return;
        }
      }
    });

    if (score == true) {
      explostionArray_on.push(new explosion(this.x, this.y));
      enemiesArray_on.splice(this.Enemy_on, 1);

      if (explostionArray_on.length == 2) {
        explostionArray_on.splice(this.explosion, 1);
      }

      score_result = score_result + 1;
      score = false;

      play("./Assests/Sound/attack.mp3");
      
    }

    if (
      this.x < x_final + (70 + 100) &&
      this.x + this.width > x_final &&
      this.y < y_final + this.height &&
      this.y + this.height > y_final
    ) {
      damaged = true;

      if (damaged == true) {
        requestAnimationFrame(damage);
      }
      health = health - 5;

      progressBar("Progress_bar").display(health, "#04AA6D");
      var elem = document.getElementById("myBar");
      elem.innerHTML = "HEALTH:" + health + "%";

      x_final = x_final - 100;

      damaged - false;
    }
  }
}
class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "./Assests/Images/enemies/enemy1.png";
    //this.speed=(Math.random() * (gameSpeed+2)) - 1;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 1.5;
    this.height = this.spriteHeight / 3.5;
    this.x = Math.random() * (enemy_canvas.width - this.height);
    this.y = Math.random() * (enemy_canvas.height - this.width);
    this.frame = 0;
    this.flapspeed = gameSpeed;
  }
  update() {
    this.x += Math.random() * 3 - 1.5;
    this.y += Math.random() * 3 - 1.5;
    if (gameFrame % this.flapspeed == 0) {
      //ternary operator for if statement
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx_enemies.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      40
    );
    gameFrame++;
  }

  check() {
    document.addEventListener("keyup", (event) => {
      if (event.code == "Space") {
        if (
          this.x < x_final + 818 &&
          this.x + this.width > x_final &&
          this.y < y_final + this.height &&
          this.y + this.height > y_final
        ) {
          score = true;
          return;
        }
      }
    });

    if (score == true) {
      explostionArray_on.push(new explosion(this.x, this.y));
      enemiesArray.splice(this.Enemy_on, 1);

      if (explostionArray_on.length == 2) {
        explostionArray_on.splice(this.explosion, 1);
      }

      score_result = score_result + 1;
      score = false;

      play("./Assests/Sound/attack.mp3");
      
    }

    if (
      this.x < x_final + (70 + 100) &&
      this.x + this.width > x_final &&
      this.y < y_final + this.height &&
      this.y + this.height > y_final
    ) {
      damaged = true;

      if (damaged == true) {
        requestAnimationFrame(damage);
      }


      progressBar("Progress_bar").display(health, "#04AA6D");
      var elem = document.getElementById("myBar");
      elem.innerHTML = "HEALTH:" + health + "%";
      x_final = x_final - 100;

      damaged - false;
    }
  }
}

class Enemy_right {
  constructor() {
    this.image = new Image();
    this.image.src = "./Assests/Images/enemies/enemy2.png";
    this.speed = gameSpeed;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 1.5;
    this.height = this.spriteHeight / 3.5;
    this.x = Math.random() * (enemy_canvas.width - this.height);
    this.y = Math.random() * (enemy_canvas.height - this.width);
    this.frame = 0;

    this.flapspeed = Math.floor(Math.random() * 3 + 1);

    //properties for sin movement

    this.angle = 0;

    //properties for curve speed
    this.angleSpeed = Math.random() * 0.2;

    //properties for curve size
    this.curve = Math.random() * 5;
  }
  update() {
    this.x -= this.speed;

    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) this.x = enemy_canvas.width;
    if (gameFrame % this.flapspeed == 0) {
      //ternary operator for if statement
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx_enemies.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
    gameFrame++;
  }

  check() {
    document.addEventListener("keyup", (event) => {
      if (event.code == "Space") {
        if (
          this.x < x_final + 818 &&
          this.x + this.width > x_final &&
          this.y < y_final + this.height &&
          this.y + this.height > y_final
        ) {
          score = true;
          return;
        }
      }
    });

    if (score == true) {
      explostionArray_on.push(new explosion(this.x, this.y));
      enemiesArray_right.splice(this.Enemy_on, 1);

      if (explostionArray_on.length == 2) {
        explostionArray_on.splice(this.explosion, 1);
      }

      score_result = score_result + 1;
      score = false;

      play("./Assests/Sound/attack.mp3");
      
    }

    if (
      this.x < x_final + (70 + 100) &&
      this.x + this.width > x_final &&
      this.y < y_final + this.height &&
      this.y + this.height > y_final
    ) {
      damaged = true;

      if (damaged == true) {
        requestAnimationFrame(damage);
      }


      progressBar("Progress_bar").display(health, "#04AA6D");
      var elem = document.getElementById("myBar");
      elem.innerHTML = "HEALTH:" + health + "%";
      x_final = x_final - 100;

      damaged - false;
    }
  }
}

class Enemy_circle {
  constructor() {
    this.image = new Image();
    this.image.src = "./Assests/Images/enemies/enemy3.png";
    this.speed = gameSpeed;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 1.5;
    this.height = this.spriteHeight / 3.5;
    this.x = Math.random() * (enemy_canvas.width - this.height);
    this.y = Math.random() * (enemy_canvas.height - this.width);
    this.frame = 0;

    this.flapspeed = Math.floor(Math.random() * 3 + 1);

    //properties for sin movement

    this.angle = 0;

    //properties for curve speed
    this.angleSpeed = Math.random() * 5.0;

    //properties for curve size
    this.curve = Math.random() * 5;
  }
  update() {
    this.x -= Math.sin((this.angle * Math.PI) / 180);

    this.y -= Math.cos((this.angle * Math.PI) / 180);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) this.x = enemy_canvas.width;
    if (gameFrame % this.flapspeed == 0) {
      //ternary operator for if statement
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx_enemies.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
    gameFrame++;
  }

  check() {
    document.addEventListener("keyup", (event) => {
      if (event.code == "Space") {
        if (
          this.x < x_final + 818 &&
          this.x + this.width > x_final &&
          this.y < y_final + this.height &&
          this.y + this.height > y_final
        ) {
          score = true;
          return;
        }
      }
    });

    if (score == true) {
      explostionArray_on.push(new explosion(this.x, this.y));
      enemiesArray_circle.splice(this.Enemy_on, 1);

      if (explostionArray_on.length == 2) {
        explostionArray_on.splice(this.explosion, 1);
      }

      score_result = score_result + 1;
      score = false;

      play("./Assests/Sound/attack.mp3");
      
    }

    if (
      this.x < x_final + (70 + 100) &&
      this.x + this.width > x_final &&
      this.y < y_final + this.height &&
      this.y + this.height > y_final
    ) {
      damaged = true;

      if (damaged == true) {
        requestAnimationFrame(damage);
      }


      progressBar("Progress_bar").display(health, "#04AA6D");
      var elem = document.getElementById("myBar");
      elem.innerHTML = "HEALTH:" + health + "%";
      x_final = x_final - 100;

      damaged - false;
    }
  }
}

class Enemy_right_left {
  constructor() {
    this.image = new Image();
    this.image.src = "./Assests/Images/enemies/enemy3.png";
    this.speed = gameSpeed;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 1.5;
    this.height = this.spriteHeight / 3.5;
    this.x = Math.random() * (enemy_canvas.width - this.height);
    this.y = Math.random() * (enemy_canvas.height - this.width);
    this.frame = 0;

    this.flapspeed = Math.floor(Math.random() * 3 + 1);

    //properties for sin movement

    this.angle = 0;

    //properties for curve speed
    this.angleSpeed = Math.random() * 5.0;

    //properties for curve size
    this.curve = Math.random() * 5;
  }
  update() {
    this.x -= Math.sin((this.angle * Math.PI) / 180);

    this.y -= Math.cos((this.angle * Math.PI) / 180);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) this.x = enemy_canvas.width;
    if (gameFrame % this.flapspeed == 0) {
      //ternary operator for if statement
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx_enemies.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
    gameFrame++;
  }

  check() {
    document.addEventListener("keyup", (event) => {
      if (event.code == "Space") {
        if (
          this.x < x_final + 818 &&
          this.x + this.width > x_final &&
          this.y < y_final + this.height &&
          this.y + this.height > y_final
        ) {
          score = true;
          return;
        }
      }
    });

    if (score == true) {
      explostionrigh.push(new explosion(this.x, this.y));
      enemiesArray_right_left.splice(this.Enemy_on, 1);

      if (explostionArray_on.length == 2) {
        explostionArray_on.splice(this.explosion, 1);
      }

      score_result = score_result + 1;
      score = false;

      play("./Assests/Sound/attack.mp3");
      
    }

    if (
      this.x < x_final + (70 + 100) &&
      this.x + this.width > x_final &&
      this.y < y_final + this.height &&
      this.y + this.height > y_final
    ) {
      damaged = true;

      if (damaged == true) {
        requestAnimationFrame(damage);
      }


      progressBar("Progress_bar").display(health, "#04AA6D");
      var elem = document.getElementById("myBar");
      elem.innerHTML = "HEALTH:" + health + "%";
      x_final = x_final - 100;

      damaged - false;
    }
  }
}

for (let i = 0; i < number_enemies; i++) {
  enemiesArray.push(new Enemy());
  enemiesArray_right.push(new Enemy_right());
  enemiesArray_circle.push(new Enemy_circle());
  enemiesArray_right_left.push(new Enemy_right_left());
  enemiesArray_on.push(new Enemy_on());
}

function animate_enemy() {
  ctx_enemies.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  if (score_result == 10) {
    gameSpeed = 4;
  }
  enemiesArray.forEach((enemy) => {
    enemy.draw();
    enemy.update();
    //enemy.check()
  });

  enemiesArray_right.forEach((enemy) => {
    enemy.draw();
    enemy.update();
    //enemy.check()
  });

  enemiesArray_circle.forEach((enemy) => {
    enemy.draw();
    enemy.update();
    //enemy.check()
  });

  enemiesArray_right_left.forEach((enemy) => {
    enemy.draw();
    enemy.update();
    //enemy.check()
  });

  enemiesArray_on.forEach((enemy) => {
    enemy.draw();
    enemy.update();
    enemy.check();
  });

  if (enemiesArray.length == 0) {
    let random_number = Math.floor(Math.random() * 100 + 1);

    if (random_number == 5) {
      random_number = 0;
      for (let i = 0; i < number_enemies; i++) {
        enemiesArray.push(new Enemy_on());
      }
    }
  }

  if (enemiesArray_on.length == 0) {
    let random_number = Math.floor(Math.random() * 100 + 1);

    if (random_number == 5) {
      random_number = 0;
      for (let i = 0; i < number_enemies; i++) {
        enemiesArray_on.push(new Enemy_on());
      }
    }
  }

  if (enemiesArray_right.length == 0) {
    let random_number = Math.floor(Math.random() * 100 + 1);

    if (random_number == 5) {
      random_number = 0;
      for (let i = 0; i < number_enemies; i++) {
        enemiesArray_right.push(new Enemy_on());
      }
    }
  }

  if (enemiesArray_circle.length == 0) {
    let random_number = Math.floor(Math.random() * 100 + 1);

    if (random_number == 5) {
      random_number = 0;
      for (let i = 0; i < number_enemies; i++) {
        enemiesArray_circle.push(new Enemy_on());
      }
    }
  }

  explostionArray_on.forEach((enemy) => {
    enemy.draw();
    enemy.update();
  });

  var elem2 = document.getElementById("myScore");
  elem2.innerHTML = "SCORE:" + score_result;

  if (score_result> highscore){
    highscore=score_result
    console.log(logged_in_user)
    let logged_in_user2 =  JSON.parse(localStorage[logged_in_user.name]);
    console.log(logged_in_user2)
   
    let final_obj={
      name: logged_in_user2.name,
      email_Address:logged_in_user2.email_Address,
      password: logged_in_user2.password,
      high_Score: highscore,
    }
    console.log(final_obj)
    
    localStorage.setItem(logged_in_user.name, JSON.stringify(final_obj));

  }
  
  var elem3 = document.getElementById("myHighScore");
  elem3.innerHTML = "HIGHSCORE:" + highscore;
  
  if (health<=0){
    
    document.getElementById("main").remove()
    document.getElementById("game_over").innerHTML = '<object type="text/html" data="./modal_window_gameover.html" ></object>'
     cancelAnimationFrame(animate_enemy);
   }
  requestAnimationFrame(animate_enemy);
}

animate_enemy();
