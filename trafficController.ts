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

  executeTrafficLightChange() {
    this.trafficLights.forEach(x => x.toggleLight());
  }
  
  getTrafficLights(): TrafficLight[] {
    return this.trafficLights;
  }
}

export default TrafficController;