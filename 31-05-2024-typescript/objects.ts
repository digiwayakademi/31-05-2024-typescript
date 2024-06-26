interface Point {
    x:number,
    y:number
}



interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;   
}


class Taxi implements Vehicle{
    //ekstra özellik
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} konumundan y: ${point.y} konumuna gidiyor.`);
    }
}

class Bus implements Vehicle{
    //ekstra özellik
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`otobüs x: ${point.x} konumundan y: ${point.y} konumuna gidiyor.`); 
    }
}


let taxi_1: Taxi = new Taxi();

taxi_1.travelTo({x:1, y:2});
taxi_1.currentLocation = { x:2, y:5};

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let taxi_2 = new Taxi();

taxi_2.travelTo({x:3, y:4});
taxi_2.currentLocation = { x:1, y:8};

console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);


let bus_1 = new Bus();

bus_1.travelTo({x:2, y:7});
bus_1.currentLocation = {x:3, y:9};

console.log(bus_1.currentLocation.x);
console.log(bus_1.currentLocation.y);