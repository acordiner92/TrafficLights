import TrafficIntersectionController from "./TrafficIntersectionController";
import { DIRECTION } from "./TrafficLightConstants";

const SIM_DURATION = 30;
const YELLOW_LIGHT_DURATION = 0.5;
const LIGHT_DURATION = 5;

let trafficInserctionController = new TrafficIntersectionController();
let time = 0;
while (time < SIM_DURATION) {
  trafficInserctionController.executeTrafficLightChange();
  time = time + YELLOW_LIGHT_DURATION; // 30s for change to yellow
  time = time + LIGHT_DURATION; // 5min light change
}

