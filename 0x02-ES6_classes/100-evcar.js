import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const evcar = Object.getPrototypeOf(this);
    const car = Object.getPrototypeOf(evcar);
    return new car.constructor();
  }
}
