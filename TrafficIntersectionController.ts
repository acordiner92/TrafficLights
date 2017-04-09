import TrafficLight from "./TrafficLight";
import { COLOUR, DIRECTION } from "./TrafficLightConstants";


/**
 * Handles the traffic light changes at a traffic light intersection
 * 
 * @class TrafficIntersectionController
 */
class TrafficIntersectionController {
  private northLight: TrafficLight;
  private eastLight: TrafficLight;
  private southLight: TrafficLight;
  private westLight: TrafficLight;

  private trafficCycle = 0;

  constructor() {
    this.northLight = new TrafficLight(DIRECTION.north, COLOUR.red);
    this.eastLight = new TrafficLight(DIRECTION.east, COLOUR.red);
    this.southLight = new TrafficLight(DIRECTION.south, COLOUR.red);
    this.westLight = new TrafficLight(DIRECTION.west, COLOUR.red);
  }

  /**
   * Changes the traffic light sets
   * 
   * 
   * @memberOf TrafficIntersectionController
   */
  executeTrafficLightChange() {
    if (this.trafficCycle === 0) {
      this.executeInitialTrafficLightChange();
    } else {
      this.changeLights([this.northLight, this.southLight, this.eastLight, this.westLight]);
    }
    this.trafficCycle++;
  }

  getTrafficLights(): TrafficLight[] {
    return [this.northLight, this.southLight, this.eastLight, this.westLight];
  }

 
  /**
   * Changes the north and south lights to green for initial traffic change
   * 
   * @private
   * 
   * @memberOf TrafficIntersectionController
   */
  private executeInitialTrafficLightChange() {
    this.northLight.go();
    this.southLight.go();
  }

  
  /**
   * Changes all red lights to green and all green lights to red to
   * represent a intersection change
   * 
   * @private
   * @param {TrafficLight[]} trafficLight 
   * 
   * @memberOf TrafficIntersectionController
   */
  private changeLights(trafficLight: TrafficLight[]) {
    let greenLights = trafficLight.filter(x => x.getColour() === COLOUR.green);
    let redLights = trafficLight.filter(x => x.getColour() === COLOUR.red);

    greenLights.forEach(x => x.stop());
    redLights.forEach(x => x.go());
  }
}

export default TrafficIntersectionController;