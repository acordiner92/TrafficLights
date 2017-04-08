import * as Traffic from "./TrafficLightConstants";

class TrafficLight {
  direction: string;
  status: string;
  constructor(direction: string) {
    this.direction = direction;
    this.status = Traffic.COLOUR.red;
  }

  changeStatus(status: string) {
      this.status = status;
  }
}
export default TrafficLight;