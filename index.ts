import TrafficController from "./trafficController";
import { DIRECTION } from "./TrafficLightConstants";

const SIM_DURATION = 30;
const YELLOW_LIGHT_DURATION = 0.5;
const LIGHT_DURATION = 5;

let trafficController = new TrafficController();
let time = 0;
while (time < SIM_DURATION) {
  trafficController.executeTrafficLightChange();
  time = time + YELLOW_LIGHT_DURATION; // 30s for change to yellow
  time = time + LIGHT_DURATION; // 5min light change
}

