
class circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(r){
        this.radius = r;
    }

    getColor(){
        return this.color;
    }

    setColor(c){
        this.color = c;
    }

    toString(){
        return `Circle [radius = ${this.radius} , color = ${this.color}]`
    }

    getArea(){
        return 3.14*Math.pow(this.radius,2);
    }

    getCircumference(){
        return 2*3.14*this.radius;
    }

}

const c1 = new circle();
const c2 = new circle(3.2);
const c3 = new circle(6.42,"blue");

c1.setRadius(4.51);
console.log(`Radius of c1 => ${c1.getRadius()}`);  //4.51

c1.setColor("red");
console.log(`Color of c1 => ${c1.getColor()}`);  // red

console.log(c1.toString());  //Circle [radius = 4.51 , color = red]

console.log(`Area of c1 => ${c1.getArea()}`);

console.log(`Circumference of c1 => ${c1.getCircumference()}`);

