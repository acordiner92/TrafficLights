import { events } from "./pubsub";
import TrafficController from "./trafficController";
import * as Traffic from "./TrafficLightConstants";
import * as Logger from "./TrafficLightLogger";

Logger.initialiseLoggin();
let trafficController = new TrafficController();
trafficController.addTrafficChangeAction([Traffic.DIRECTION.north, Traffic.DIRECTION.south], [Traffic.DIRECTION.east, Traffic.DIRECTION.west]);
trafficController.addTrafficChangeAction([Traffic.DIRECTION.east, Traffic.DIRECTION.west], [Traffic.DIRECTION.north, Traffic.DIRECTION.south]);
trafficController.startSimulation(30);
