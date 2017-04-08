import { COLOUR } from "./TrafficLightConstants";

class TrafficLight {
  direction: string;
  status: string;
  constructor(direction: string, status: string) {
    this.direction = direction;
    this.status = status;
    this.printTrafficLightChange();
  }

  changeStatus(status: string) {
      this.status = status;
      this.printTrafficLightChange();
  }

  private printTrafficLightChange() {
    console.log("TL: " + this.direction + " ==> " + this.status);
  }
}
export default TrafficLight;