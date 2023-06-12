class Airplane {
    constructor(name){
        this.name=name
        this.isFlying=false
    }
    takeOff(){
        this.isFlying=true
        //console.log(`${this.name} is flying`)
        //console.log(`isflying==${this.isFlying}`)
    }
    land(){
        this.isFlying=false
        //console.log(`${this.name} is landed`)
        //console.log(`isflying==${this.isFlying}`)
    }
    ifAirplaneFlying(){
         return this.isFlying
    }
}
const output=new Airplane('plane1')
//output.land()
console.log(output.ifAirplaneFlying())
output.takeOff()
console.log(output.ifAirplaneFlying())







// class Airplane {
//     constructor(name) {
//        this.name = name;
//        this.isFlying = false;
//     }
//     takeOff(){
//       this.isFlying = true;
//     }
//     land() {
//       this.isFlying = false;
//     }
//     //return if airplane is flying or not
//     ifAirplaneFlying(){
//       return this.isFlying;
//     }
//   }
//   let airplane = new Airplane("Indigo");
//   console.log(airplane.ifAirplaneFlying())
//   airplane.takeOff();
//   console.log(airplane.ifAirplaneFlying())
//   airplane.land();
//   console.log(airplane.ifAirplaneFlying())
//   PAVAN AGULLA4:02 AM
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