import TrafficIntersectionController from "../TrafficIntersectionController";
import { DIRECTION, COLOUR } from "../TrafficLightConstants";
import * as sinon from "sinon";


describe("TrafficIntersectionController", () => {
  test("Check when creating a intersection Controller all lights are red", () => {
    // action
    let trafficIntersectionController = new TrafficIntersectionController();

    // Assert 
    let trafficLights = trafficIntersectionController.getTrafficLights();
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.north)[0].getColour()).toBe(COLOUR.red);
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.south)[0].getColour()).toBe(COLOUR.red);
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.east)[0].getColour()).toBe(COLOUR.red);
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.west)[0].getColour()).toBe(COLOUR.red);
  });

  test("Check if the first traffic light change is called the North and South lights are green and East and West are red", () => {
    // setup
    let trafficIntersectionController = new TrafficIntersectionController();

    // action
    trafficIntersectionController.executeTrafficLightChange();

    // Assert 
    let trafficLights = trafficIntersectionController.getTrafficLights();
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.north)[0].getColour()).toBe(COLOUR.green);
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.south)[0].getColour()).toBe(COLOUR.green);
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.east)[0].getColour()).toBe(COLOUR.red);
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.west)[0].getColour()).toBe(COLOUR.red);

  });

  test("Check if the second cyle of traffic light changes is called the North and South lights are red and East and West are green", () => {
    // setup
    let trafficIntersectionController = new TrafficIntersectionController();

    // action
    trafficIntersectionController.executeTrafficLightChange();
    trafficIntersectionController.executeTrafficLightChange();

    // Assert 
    let trafficLights = trafficIntersectionController.getTrafficLights();
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.north)[0].getColour()).toBe(COLOUR.red);
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.south)[0].getColour()).toBe(COLOUR.red);
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.east)[0].getColour()).toBe(COLOUR.green);
    expect(trafficLights.filter(x => x.getDirection() === DIRECTION.west)[0].getColour()).toBe(COLOUR.green);

  });

});