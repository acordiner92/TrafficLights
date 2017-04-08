import { COLOUR } from "./TrafficLightConstants";

class TrafficLight {
  direction: string;
  status: string;
  constructor(direction: string, status: string) {
    this.direction = direction;
    this.status = status;
  }

  changeStatus(status: string) {
      this.status = status;
  }
}
export default TrafficLight;