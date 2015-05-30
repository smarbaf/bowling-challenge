function Game(){
  this.score = 0;
  this.rollCount = 0;
};

Game.prototype.roll = function(pinsDown) {
  this.score += pinsDown;
  if (this.rollCount >= 20)  {
    throw "Game Over";
  }
  this.rollCount += 1;
};

Game.prototype.roll = function(pinsDown) {
  this.score += pinsDown;
  if (this.rollCount >= 20)  {
    throw "Game Over";
  }
  this.rollCount += 1;
};

Game.prototype.roll = function(pinsDown) {
  if (this.frame > 10) {
  if (pinsDown > 10) {
    throw "Invalid roll (> 10)";
  }

  if (this.frame > 10) {
    throw "Game Over";
  }
  this.score += pinsDown;
  if (this.rollCount == 1) {
    this.rollCount += 1;
  } else {
    this.frame += 1;
    this.rollCount = 1;
  };
 };
};
