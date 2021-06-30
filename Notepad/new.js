function flour(egg,bakingpowder,whitesugar){
    this.egg=egg;
    this.bakingpowder=bakingpowder;
    this.whitesugar=whitesugar;
}


// Slogan
flour.prototype.slogan=function(){
    return `thhis is the best cake`;
}

let make=new flour(2,500,7);
console.log(make.slogan());

function cake(egg,bakingpowder,whitesugar,water,oven){
    flour.call(this,egg,bakingpowder,whitesugar);
    this.water=water;
    this.oven=oven;
} 

cake.prototype=Object.create(flour.prototype);

cake.prototype.constructor=cake;

let cook= new cake(4,500,7,500,15);
console.log(cook);