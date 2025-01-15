const car = {
    brand: "Toyota",
    model: "Camry",
    weight: "850kg",
    color: "white",
    start: function(){
        console.log("car has started");
    },
    drive: function(){
        console.log("car is driving");
    },
    getDetails: function(){
        return `${car.brand} ${car.model} ${car.color} ${car.weight}`
        // we used the native dot notation way of refrencing an Object key
    },
    getDetailsUsingThis: function(){
        return `${this.brand} ${this.model} ${this.color} ${this.weight}`
        // we used the this method of refrencing an Object key
    },
    getdetailsUsingBracketNotation: function(){
        console.log(`${car["brand"]} ${car["model"]} ${car["color"]} ${car["weight"]}`)
        // we used the bracket notation way of refrencing an Object key
    },
};

// car.getdetailsUsingBracketNotation()