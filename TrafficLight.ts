class TrafficLight {
  direction: string;
  status: string;
  constructor(direction: string) {
    this.direction = direction;
    this.status = "RED";
  }

  changeStatus(status: string) {
      this.status = status;
  }
}
export default TrafficLight;