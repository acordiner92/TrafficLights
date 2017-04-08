import { events } from "./pubsub";
import TrafficController from "./trafficController";
import DIRECTION from "./Direction";
import * as Logger from "./TrafficLightLogger";

Logger.initialiseLoggin();
let trafficController = new TrafficController();
trafficController.addTrafficChangeAction([DIRECTION.North, DIRECTION.South], [DIRECTION.East, DIRECTION.West]);
trafficController.addTrafficChangeAction([DIRECTION.East, DIRECTION.West], [DIRECTION.North, DIRECTION.South]);
trafficController.startSimulation(30);
