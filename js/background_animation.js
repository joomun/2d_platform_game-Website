import { score_result } from "./enemies_animation.js";

const back_canvas=document.getElementById('canvas_2');
const ctx_back=back_canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width =5250;
const CANVAS_HEIGHT = canvas.height =525;
//setting game intial speed

const backgroundLayer1 = new  Image();

backgroundLayer1.src = './Assests/Images/game_background_1/layers/clouds_1.png';


const backgroundLayer2 = new  Image();
backgroundLayer2.src = './Assests/Images/game_background_1/layers/clouds_2.png';


const backgroundLayer3 = new  Image();
backgroundLayer3.src = './Assests/Images/game_background_1/layers/clouds_3.png';


const backgroundLayer4 = new  Image();
backgroundLayer4.src = './Assests/Images/game_background_1/layers/clouds_4.png';


const backgroundLayer5 = new  Image();
backgroundLayer5.src = './Assests/Images/game_background_1/layers/rocks_1.png';

const backgroundLayer6 = new  Image();
backgroundLayer6.src = './Assests/Images/game_background_1/layers/rocks_2.png';

const backgroundLayer7 = new  Image();
backgroundLayer7.src = './Assests/Images/game_background_1/layers/sky.png';

function play_background() {
    var audio = new Audio('./Assests/Sound/track1.mp3');
    audio.loop=true;
    audio.play();
  }


class Layer{
    constructor(image,speedChnage){
        this.x=0;
        this.y=0;
        this.width=352;
        this.height=153;
        this.x2=this.width;
        //set image properties
        this.image=image;
        this.speedChnage=speedChnage;
        this.speed=gameSpeed * this.speedChnage;
    }

    //bakcground move speed 
    update(){
        this.speed=gameSpeed*this.speedChnage

        if (this.x <= -this.width){
            this.x=this.width+this.x2 -this.speed
        }

        if (this.x2 <= -this.width){
            this.x2=this.width+this.x -this.speed
        }
        
        //math.floor to remove decimal places
        this.x=Math.floor(this.x-this.speed)
        this.x2=Math.floor(this.x2-this.speed)
    }

    //drawing the 2 image on canvas
    draw(){
        ctx_back.drawImage(this.image,this.x,this.y,this.width,this.height);
        ctx_back.drawImage(this.image,this.x2,this.y,this.width,this.height);
    }

}


const layer1=new Layer(backgroundLayer1,0.5);
const layer2=new Layer(backgroundLayer2,1);
const layer3=new Layer(backgroundLayer3,1.5);
const layer4=new Layer(backgroundLayer4,1.5);
const layer5=new Layer(backgroundLayer5,2);

const layer6=new Layer(backgroundLayer6,2.5);
const layer7=new Layer(backgroundLayer7,4);


let x =0;

let x_2=361;
function animate(){
    
    ctx_back.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    layer7.draw();
    layer7.update();
    layer1.draw();
    layer1.update();
    layer2.draw();
    layer2.update();
    layer3.draw();
    layer3.update();
    layer4.draw();
    layer4.update();
    
    layer5.draw();
    layer5.update();
    
    layer6.draw();
    layer6.update();
    console.log(score_result)

    if (score_result==20)
    {
        gameSpeed=20;
    }
    else if (score_result==21)
    {
        backgroundLayer7.src = './Assests/Images/game_background_2/layers/sky.png';
        backgroundLayer1.src = './Assests/Images/game_background_2/layers/clouds_1.png';

        backgroundLayer2.src = './Assests/Images/game_background_2/layers/clouds_2.png';
        backgroundLayer3.src = './Assests/Images/game_background_2/layers/clouds_3.png';
        backgroundLayer4.src = './Assests/Images/game_background_2/layers/rocks_3.png';
        backgroundLayer5.src = './Assests/Images/game_background_2/layers/rocks_1.png';
        backgroundLayer6.src = './Assests/Images/game_background_2/layers/rocks_2.png';

        gameSpeed=1;
    }
    
    requestAnimationFrame(animate);
}

animate()
play_background()