import TrafficLight from "./TrafficLight";
import { COLOUR, DIRECTION } from "./TrafficLightConstants";

class TrafficController {
  private trafficLights: TrafficLight[];

  constructor() {
    this.trafficLights = [];
    this.trafficLights.push(new TrafficLight(DIRECTION.north, COLOUR.green));
    this.trafficLights.push(new TrafficLight(DIRECTION.south, COLOUR.green));
    this.trafficLights.push(new TrafficLight(DIRECTION.east, COLOUR.red));
    this.trafficLights.push(new TrafficLight(DIRECTION.west, COLOUR.red));
    this.trafficLights.forEach( x => this.printTrafficLightChange(x));
  }

  public executeTrafficLightChange() {
    let greenTrafficLights = this.trafficLights.filter(x => x.status === COLOUR.green);
    let redTrafficLight = this.trafficLights.filter(x => x.status === COLOUR.red);

    this.changeLightsToRed(greenTrafficLights);
    this.changeLightsToGreen(redTrafficLight);
  }

  private changeLightsToRed(trafficLights: TrafficLight[]) {
    trafficLights.forEach(x => {
      x.changeStatus(COLOUR.yellow);
      this.printTrafficLightChange(x);
    });
    trafficLights.forEach(x => {
      x.changeStatus(COLOUR.red);
      this.printTrafficLightChange(x);
    });
  }

  private changeLightsToGreen(trafficLights: TrafficLight[]) {
    trafficLights.forEach(x => {
      x.changeStatus(COLOUR.green);
      this.printTrafficLightChange(x);
    });
  }

  private printTrafficLightChange(trafficLight: TrafficLight) {
    console.log("TL: " + trafficLight.direction + " ==> " + trafficLight.status);
  }
}

export default TrafficController;