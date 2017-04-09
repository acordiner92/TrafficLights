import { COLOUR } from "./TrafficLightConstants";


/**
 * Traffic Light and its associated functionality.
 * 
 * @class TrafficLight
 */
class TrafficLight {
  private direction: string;
  private colour: string;
  constructor(direction: string, colour: string) {
    this.direction = direction;
    this.colour = colour;
    this.printTrafficLightChange();
  }
  

  /**
   * Changes Traffic Light to green
   * 
   * 
   * @memberOf TrafficLight
   */
  go() {
    this.changeColour(COLOUR.green);
  }


  /**
   * Changes Traffic to yellow then red
   * 
   * 
   * @memberOf TrafficLight
   */
  stop() {
      this.changeColour(COLOUR.yellow);
      this.changeColour(COLOUR.red);
  }

  getDirection() {
    return this.direction;
  }

  getColour() {
    return this.colour;
  }

  
  /**
   * Changes colour of traffic light and console.log
   * the changes
   * 
   * @private
   * @param {string} colour 
   * 
   * @memberOf TrafficLight
   */
  private changeColour(colour: string) {
    this.colour = colour;
    this.printTrafficLightChange();
  }

  private printTrafficLightChange() {
    console.log("TL: " + this.direction + " ==> " + this.colour);
  }
}
export default TrafficLight;