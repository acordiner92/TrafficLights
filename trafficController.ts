import TrafficLight from "./TrafficLight";
import { COLOUR, DIRECTION } from "./TrafficLightConstants";
import { events } from "./pubsub";

class TrafficController {
  trafficLights: TrafficLight[];
  trafficChangeActions: TrafficChangeAction[];

  constructor() {
    this.trafficLights = [];
    this.trafficLights.push(new TrafficLight(DIRECTION.north));
    this.trafficLights.push(new TrafficLight(DIRECTION.east));
    this.trafficLights.push(new TrafficLight(DIRECTION.south));
    this.trafficLights.push(new TrafficLight(DIRECTION.west));
    this.trafficChangeActions = [];
  }

  public addTrafficChangeAction(toGreen: string[], toRed: string[]) {
    let greenLights = this.trafficLights.filter(x => toGreen.indexOf(x.direction) > -1);
    let redLights = this.trafficLights.filter(x => toRed.indexOf(x.direction) > -1);
    this.trafficChangeActions.push({ greenLights, redLights });
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
    let trafficAction = this.getTrafficChangeAction();
    this.changeLightsToRed(trafficAction.redLights);
    this.changeLightsToGreen(trafficAction.greenLights);
  }

  private getTrafficChangeAction(): TrafficChangeAction {
    let action = this.trafficChangeActions.shift();
    this.trafficChangeActions.push(action);
    return action;
  }

  private changeLightsToRed(trafficLights: TrafficLight[]) {
    trafficLights = trafficLights.filter(x => x.status === COLOUR.green);
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

class TrafficChangeAction {
  greenLights: TrafficLight[];
  redLights: TrafficLight[];
}

export default TrafficController;