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
    });
    trafficLights.forEach(x => {
      x.changeStatus(COLOUR.red);
    });
  }

  private changeLightsToGreen(trafficLights: TrafficLight[]) {
    trafficLights.forEach(x => {
      x.changeStatus(COLOUR.green);
    });
  }
}

export default TrafficController;