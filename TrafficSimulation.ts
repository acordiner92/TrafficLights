import TrafficIntersectionController from "./TrafficIntersectionController";

const YELLOW_LIGHT_DURATION = 0.5;
const LIGHT_DURATION = 5;


/**
 * Executes a traffic simulation for a duration of time
 * 
 * @class TrafficSimulation
 */
class TrafficSimulation {
  private duration: number;
  private numTraffficChanges: number;
  constructor(duration: number) {
    this.duration = duration;
    this.numTraffficChanges = 0;
  }

  /**
   * Executes the traffic simulation for the duration of time
   * 
   * 
   * @memberOf TrafficSimulation
   */
  runSimulation() {
    let time = 0;
    let trafficInserctionController = new TrafficIntersectionController();

    while (time < this.duration) {
      trafficInserctionController.executeTrafficLightChange();
      time = time + YELLOW_LIGHT_DURATION + LIGHT_DURATION;
      this.numTraffficChanges++;
    }
  }

  getNumTrafficChanges() {
    return this.numTraffficChanges;
  }

}

export default TrafficSimulation;