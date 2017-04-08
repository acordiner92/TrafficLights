import { COLOUR } from "./TrafficLightConstants";

class TrafficLight {
  direction: string;
  status: string;
  constructor(direction: string, status: string) {
    this.direction = direction;
    this.status = status;
    this.printTrafficLightChange();
  }

  toggleLight() {
    if (this.status === COLOUR.green) {
      this.changeToRed();
    } else {
      this.changeToGreen();
    }
  }

  private changeToGreen() {
    this.changeStatus(COLOUR.green);
  }

  private changeToRed() {
    this.changeStatus(COLOUR.yellow);
    this.changeStatus(COLOUR.red);
  }

  private changeStatus(status: string) {
    this.status = status;
    this.printTrafficLightChange();
  }

  private printTrafficLightChange() {
    console.log("TL: " + this.direction + " ==> " + this.status);
  }
}
export default TrafficLight;