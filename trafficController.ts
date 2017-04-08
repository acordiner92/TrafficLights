import TrafficLight from "./TrafficLight";
import { COLOUR, DIRECTION } from "./TrafficLightConstants";
import { events } from "./pubsub";

class TrafficController {
  private trafficLights: TrafficLight[];

  constructor() {
    this.trafficLights = [];
    this.trafficLights.push(new TrafficLight(DIRECTION.north, COLOUR.green));
    this.trafficLights.push(new TrafficLight(DIRECTION.south, COLOUR.green));
    this.trafficLights.push(new TrafficLight(DIRECTION.east, COLOUR.red));
    this.trafficLights.push(new TrafficLight(DIRECTION.west, COLOUR.red));
    this.trafficLights.forEach( x => this.notifyTrafficLightChange(x));
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
      this.notifyTrafficLightChange(x);
    });
    trafficLights.forEach(x => {
      x.changeStatus(COLOUR.red);
      this.notifyTrafficLightChange(x);
    });
  }

  private changeLightsToGreen(trafficLights: TrafficLight[]) {
    trafficLights.forEach(x => {
      x.changeStatus(COLOUR.green);
      this.notifyTrafficLightChange(x);
    });
  }

  private notifyTrafficLightChange(trafficLight: TrafficLight) {
    events.emit("LIGHT_CHANGE", trafficLight);
  }
}

export default TrafficController;