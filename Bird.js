class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50); 
    this.simage= loadImage("sprites/smoke.png");
    this.image = loadImage("sprites/bird.png"); 
    this.arr1 = []
  } 


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY; 
    if (this.body.position.x >200 && this.body.velocity.x >10 ){
    var position = [this.body.position.x, this.body.position.y] 
    this.arr1.push(position)  
    }
    for(var i=0;i < this.arr1.length; i = i+1){ 
      image(this.simage,this.arr1[i][0],this.arr1[i][1]); 

    }
    super.display();
  }
}
