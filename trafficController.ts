import TrafficLight from "./TrafficLight";
import DIRECTION from "./Direction";
import { events } from "./pubsub";

class TrafficController {
  trafficLights: TrafficLight[];
  trafficChangeActions: TrafficChangeAction[];
  constructor() {
    this.trafficLights = [];
    this.trafficLights.push(new TrafficLight(DIRECTION.North));
    this.trafficLights.push(new TrafficLight(DIRECTION.East));
    this.trafficLights.push(new TrafficLight(DIRECTION.South));
    this.trafficLights.push(new TrafficLight(DIRECTION.West));
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
      let redTrafficLights = this.trafficLights.filter(y => action.toRed.indexOf(y.direction) > -1 && y.status !== "RED");
      redTrafficLights = redTrafficLights.map(s => {
        s.changeStatus("YELLOW");
        this.notifyTrafficLightChange(s);
        return s;
      });
      redTrafficLights = redTrafficLights.map(s => {
        s.changeStatus("RED");
        this.notifyTrafficLightChange(s);
        return s;
      });
      // });
      time = time + 30; // 30s for change to yellow

      action.toGreen.forEach((x: any) => {
        let trafficLights = this.trafficLights.filter(y => y.direction === x);
        trafficLights = trafficLights.map(s => {
          s.changeStatus("GREEN");
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