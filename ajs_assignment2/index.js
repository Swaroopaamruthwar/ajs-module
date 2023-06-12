class Car{
    constructor(model,milesPerGallon){
        this.model=model;
        this.milesPerGallon=milesPerGallon;
        this.tank=0;
        this.odometer=0
    
    }
    fill(gallons){
      this.tank+=gallons
    }
    drive(distance){
        this.odometer+=distance;
        this.tank = this.tank - (distance/this.milesPerGallon);
        return `I ran out of fuel at ${this.odometer} miles!`
    }
}
  let car1 = new Car('Audi',20)
  car1.fill(10)
  console.log(car1.drive(30))












  //   function Car(Model, MilesPerGallon ){
//       this.Model = Model,
//       this.MilesPerGallon = MilesPerGallon,
//       this.tank = 0,
//       this.odometer = 0
//   }
//      Car.prototype.fill = function(gallons){
//       this.tank += gallons
//       return this.tank;
//      }
//      Car.prototype.drive = function(distance,tank){
//       this.odometer  += distance
//       tank = tank - distance / this.MilesPerGallon
//       if(tank <= 0)
//       {
//           return "i RUNS OUT OF FUEL "+this.odometer+" miles";
//       }
//       else{
//           return "odometer is
//   "+this.odometer+" miles and tank is "+ tank+" gallons"
//       }
//      }
  
//      let newCar= new Car("maruthi",10);
//      let tank = newCar.fill(5)
//      console.log(newCar.drive(50,tank))