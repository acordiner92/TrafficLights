import TrafficLight from "../TrafficLight";
import { DIRECTION, COLOUR } from "../TrafficLightConstants";

test("Check that creating new traffic light constructor values are sets correctly", () => {
  // action
  let trafficLight = new TrafficLight(DIRECTION.east, COLOUR.red);

  // Assert 
  expect(trafficLight.getDirection()).toBe(DIRECTION.east);
  expect(trafficLight.getColour()).toBe(COLOUR.red);
});

test("Check if traffic light is red and the light is toggled it should now be green", () => {
  // setup
  let trafficLight = new TrafficLight(DIRECTION.east, COLOUR.red);
  

  // action
  trafficLight.toggleChange();

  // Assert 
  expect (trafficLight.getColour()).toBe(COLOUR.green);
});

test("Check if traffic light is green and the light is toggled it should now be red", () => {
  // setup
  let trafficLight = new TrafficLight(DIRECTION.east, COLOUR.green);
  
  // action
  trafficLight.toggleChange();

  // Assert 
  expect (trafficLight.getColour()).toBe(COLOUR.red);
});

test("Check if traffic light is toggle twice is should be the same colour as it originally was", () => {
  // setup
  let trafficLight = new TrafficLight(DIRECTION.east, COLOUR.green);
  
  // action
  trafficLight.toggleChange();
  trafficLight.toggleChange();

  // Assert 
  expect (trafficLight.getColour()).toBe(COLOUR.green);
});