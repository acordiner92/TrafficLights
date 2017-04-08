import TrafficLight from "./TrafficLight";
import { COLOUR, DIRECTION } from "./TrafficLightConstants";
import { events } from "./pubsub";

class TrafficController {
  trafficLights: TrafficLight[];

  constructor() {
    this.trafficLights = [];
    this.trafficLights.push(new TrafficLight(DIRECTION.north, COLOUR.green));
    this.trafficLights.push(new TrafficLight(DIRECTION.south, COLOUR.green));
    this.trafficLights.push(new TrafficLight(DIRECTION.east, COLOUR.red));
    this.trafficLights.push(new TrafficLight(DIRECTION.west, COLOUR.red));
    this.trafficLights.forEach( x => this.notifyTrafficLightChange(x));
  }

  public startSimulation(minutesDur: number): void {
    let time = 0;
    while (time < minutesDur * 60) {
      this.executeTrafficLightChange();
      time = time + 30; // 30s for change to yellow
      time = time + 60 * 5; // 5min light change
    }
  }

  private executeTrafficLightChange() {
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