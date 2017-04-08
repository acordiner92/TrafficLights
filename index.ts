import { events } from "./pubsub";
import TrafficController from "./trafficController";
import { DIRECTION } from "./TrafficLightConstants";
import * as Logger from "./TrafficLightLogger";

Logger.initialiseLoggin();
let trafficController = new TrafficController();
trafficController.addTrafficChangeAction([DIRECTION.north, DIRECTION.south], [DIRECTION.east, DIRECTION.west]);
trafficController.addTrafficChangeAction([DIRECTION.east, DIRECTION.west], [DIRECTION.north, DIRECTION.south]);
trafficController.startSimulation(30);
