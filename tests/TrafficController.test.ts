import TrafficController from "../TrafficController";
import { DIRECTION, COLOUR } from "../TrafficLightConstants";

test("Check upon initialisation that North and South lights are green and the East and West lights are red", () => {
  // setup
  let trafficController = new TrafficController();
  
  // action
  let trafficLights = trafficController.getTrafficLights();

  // Assert 
  expect (trafficLights.filter(x => x.direction === DIRECTION.north)[0].status).toBe(COLOUR.green);
  expect (trafficLights.filter(x => x.direction === DIRECTION.south)[0].status).toBe(COLOUR.green);
  expect (trafficLights.filter(x => x.direction === DIRECTION.east)[0].status).toBe(COLOUR.red);
  expect (trafficLights.filter(x => x.direction === DIRECTION.west)[0].status).toBe(COLOUR.red);
});

test("Check after one traffic light cycle the intersection light have swapped", () => {
  // setup
  let trafficController = new TrafficController();
  
  // action
  trafficController.executeTrafficLightChange();
  let trafficLights = trafficController.getTrafficLights();

  // Assert 
  expect (trafficLights.filter(x => x.direction === DIRECTION.north)[0].status).toBe(COLOUR.red);
  expect (trafficLights.filter(x => x.direction === DIRECTION.south)[0].status).toBe(COLOUR.red);
  expect (trafficLights.filter(x => x.direction === DIRECTION.east)[0].status).toBe(COLOUR.green);
  expect (trafficLights.filter(x => x.direction === DIRECTION.west)[0].status).toBe(COLOUR.green);
});

test("Check after two traffic light cycle the intersection light have swapped and are back to their original position", () => {
  // setup
  let trafficController = new TrafficController();
  
  // action
  trafficController.executeTrafficLightChange();
  trafficController.executeTrafficLightChange();
  let trafficLights = trafficController.getTrafficLights();

  // Assert 
  expect (trafficLights.filter(x => x.direction === DIRECTION.north)[0].status).toBe(COLOUR.green);
  expect (trafficLights.filter(x => x.direction === DIRECTION.south)[0].status).toBe(COLOUR.green);
  expect (trafficLights.filter(x => x.direction === DIRECTION.east)[0].status).toBe(COLOUR.red);
  expect (trafficLights.filter(x => x.direction === DIRECTION.west)[0].status).toBe(COLOUR.red);
});