import { COLOUR } from "./TrafficLightConstants";

class TrafficLight {
  private direction: string;
  private colour: string;
  constructor(direction: string, colour: string) {
    this.direction = direction;
    this.colour = colour;
    this.printTrafficLightChange();
  }

  toggleChange() {
    if (this.colour === COLOUR.green) {
      this.changeToRed();
    } else {
      this.changeToGreen();
    }
  }

  getDirection() {
    return this.direction;
  }

  getColour() {
    return this.colour;
  }

  private changeToGreen() {
    this.changeColour(COLOUR.green);
  }

  private changeToRed() {
    this.changeColour(COLOUR.yellow);
    this.changeColour(COLOUR.red);
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