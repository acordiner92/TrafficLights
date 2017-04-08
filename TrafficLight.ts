import { COLOUR } from "./TrafficLightConstants";

class TrafficLight {
  private direction: string;
  private colour: string;
  constructor(direction: string, colour: string) {
    this.direction = direction;
    this.colour = colour;
    this.printTrafficLightChange();
  }
  
  go() {
    this.changeColour(COLOUR.green);
  }

  stop() {
      this.changeColour(COLOUR.yellow);
      this.changeColour(COLOUR.red);
  }

  getDirection() {
    return this.direction;
  }

  getColour() {
    return this.colour;
  }

  private changeColour(colour: string) {
    this.colour = colour;
    this.printTrafficLightChange();
  }

  private printTrafficLightChange() {
    console.log("TL: " + this.direction + " ==> " + this.colour);
  }
}
export default TrafficLight;