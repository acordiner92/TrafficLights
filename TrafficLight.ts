import { COLOUR } from "./TrafficLightConstants";

class TrafficLight {
  direction: string;
  status: string;
  constructor(direction: string) {
    this.direction = direction;
    this.status = COLOUR.red;
  }

  changeStatus(status: string) {
      this.status = status;
  }
}
export default TrafficLight;