import { events } from "./pubsub";
import TrafficLight from "./TrafficLight";

export function initialiseLoggin() {
  events.on("LIGHT_CHANGE", (trafficLight: TrafficLight) => {
    console.log("Traffic Light: " + trafficLight.direction + " Status: " + trafficLight.status);
  });
}