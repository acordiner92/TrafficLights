import TrafficLight from "./TrafficLight";
import { COLOUR, DIRECTION } from "./TrafficLightConstants";


/**
 * Handles the traffic light changes at a traffic light intersection
 * 
 * @class TrafficIntersectionController
 */
class TrafficIntersectionController {
  private trafficLights: TrafficLight[];

  constructor() {
    this.trafficLights = [];
    this.trafficLights.push(new TrafficLight(DIRECTION.north, COLOUR.green));
    this.trafficLights.push(new TrafficLight(DIRECTION.south, COLOUR.green));
    this.trafficLights.push(new TrafficLight(DIRECTION.east, COLOUR.red));
    this.trafficLights.push(new TrafficLight(DIRECTION.west, COLOUR.red));
  }


  /**
   * Changes the traffic light sets
   * 
   * 
   * @memberOf TrafficIntersectionController
   */
  executeTrafficLightChange() {
    this.trafficLights.forEach(x => {
      if (x.getColour() === COLOUR.green) {
        x.stop();
      } else {
        x.go();
      }
    });
  }

  getTrafficLights(): TrafficLight[] {
    return this.trafficLights;
  }
}

export default TrafficIntersectionController;