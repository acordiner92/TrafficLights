import { events } from "./pubsub";
import TrafficController from "./trafficController";
import { DIRECTION } from "./TrafficLightConstants";
import * as Logger from "./TrafficLightLogger";

Logger.initialiseLoggin();
let trafficController = new TrafficController();
let time = 0;
while (time < 30) {
  trafficController.executeTrafficLightChange();
  time = time + 30; // 30s for change to yellow
  time = time + 60 * 5; // 5min light change
}

