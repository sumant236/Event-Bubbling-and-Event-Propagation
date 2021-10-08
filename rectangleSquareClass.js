class Rectangle{
    #l;
    #b;
    constructor(l, b){
        this.#l = l;
        this.#b = b;
    }
    getArea(){
        console.log(`Area of ${this.#l} and ${this.#b}: ${this.#l * this.#b}`)
    }
}

class Square extends Rectangle{
    constructor(l,b){
        super(l,b)
    }
}

const area = new Square(2,4);
area.getArea();