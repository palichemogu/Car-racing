
var Car = function (x, y,speed) {
    this.x = x;
    this.y = y;
    this.speed=speed;
    var carHtml = '<img src="http://nostarch.com/images/car.png">';
    this.carElement = $(carHtml);
    this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
    });
    $("body").append(this.carElement);
    };
   //  Car.prototype.draw = function () {
   //  var carHtml = '<img src="http://nostarch.com/images/car.png">';
   //  this.carElement = $(carHtml);
   //  this.carElement.css({
   //  position: "absolute",
   //  left: this.x,
   //  top: this.y
   //  });
   //  $("body").append(this.carElement);
   // };
   Car.prototype.moveRight = function (speed) {
       if(tesla.x>800)
   {
       clearInterval(ID1);  
   }
   if(nissan.x>800)
   {
       clearInterval(ID2);  
   }
    this.x += speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   
   Car.prototype.moveLeft = function (speed) {
       if(tesla.x<1)
   {
       clearInterval(ID1);  
   }
   if(nissan.x<1)
   {
       clearInterval(ID2);  
   }
    this.x -= speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   Car.prototype.moveUp = function (speed) {
       if(tesla.y<1)
   {
       clearInterval(ID1);  
   }
   if(nissan.y<1)
   {
       clearInterval(ID2);  
   }
    this.y -= speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   Car.prototype.moveDown = function (speed) {
       if(this.y>300)
   {
       clearInterval(ID1);
       clearInterval(ID2);
   }
    this.y += speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   var tesla = new Car(20, 20,2);
   var nissan = new Car(100, 200,2);
   // tesla.draw();
   // nissan.draw();
   let ID1=setInterval(() => {
       tesla.moveRight(Math.floor(Math.random()*10));
   }, 30);
   let ID2=setInterval(() => {
       nissan.moveRight(Math.floor(Math.random()*10));
   }, 30);