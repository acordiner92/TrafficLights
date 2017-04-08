import TrafficLight from "./TrafficLight";
import * as Traffic from "./TrafficLightConstants";
import { events } from "./pubsub";

class TrafficController {
  trafficLights: TrafficLight[];
  trafficChangeActions: TrafficChangeAction[];
  constructor() {
    this.trafficLights = [];
    this.trafficLights.push(new TrafficLight(Traffic.DIRECTION.north));
    this.trafficLights.push(new TrafficLight(Traffic.DIRECTION.east));
    this.trafficLights.push(new TrafficLight(Traffic.DIRECTION.south));
    this.trafficLights.push(new TrafficLight(Traffic.DIRECTION.west));
    this.trafficChangeActions = [];
  }

  addTrafficChangeAction(toGreen: string[], toRed: string[]) {
    this.trafficChangeActions.unshift({ toGreen, toRed });
  }

  startSimulation(minutesDur: number): void {
    let time = 0;
    while (time < minutesDur * 60) {
      let action = this.getTrafficChangeAction();

      // action.toRed.forEach((x: string) => {
      let redTrafficLights = this.trafficLights.filter(y => action.toRed.indexOf(y.direction) > -1 && y.status !== Traffic.COLOUR.red);
      redTrafficLights = redTrafficLights.map(s => {
        s.changeStatus(Traffic.COLOUR.yellow);
        this.notifyTrafficLightChange(s);
        return s;
      });
      redTrafficLights = redTrafficLights.map(s => {
        s.changeStatus(Traffic.COLOUR.red);
        this.notifyTrafficLightChange(s);
        return s;
      });
      // });
      time = time + 30; // 30s for change to yellow

      action.toGreen.forEach((x: any) => {
        let trafficLights = this.trafficLights.filter(y => y.direction === x);
        trafficLights = trafficLights.map(s => {
          s.changeStatus(Traffic.COLOUR.green);
          this.notifyTrafficLightChange(s);
          return s;
        });
      });

      time = time + 60 * 5; // 5min light change
    }
  }

  getTrafficChangeAction(): TrafficChangeAction {
    let action = this.trafficChangeActions.pop();
    this.trafficChangeActions.unshift(action);
    return action;
  }

  notifyTrafficLightChange(trafficLight: TrafficLight) {
    events.emit("LIGHT_CHANGE", trafficLight);
  }
}

class TrafficChangeAction {
  toGreen: string[];
  toRed: string[];
}

export default TrafficController;