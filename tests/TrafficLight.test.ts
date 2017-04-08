import TrafficLight from "../TrafficLight";
import { DIRECTION, COLOUR } from "../TrafficLightConstants";
import * as sinon from "sinon";


describe("TrafficLight", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  test("Check that creating new traffic light constructor values are sets correctly", () => {
    // action
    let trafficLight = new TrafficLight(DIRECTION.east, COLOUR.red);

    // Assert 
    expect(trafficLight.getDirection()).toBe(DIRECTION.east);
    expect(trafficLight.getColour()).toBe(COLOUR.red);
    expect(console.log).toBeCalledWith("TL: east ==> red");
  });

  test("Check if traffic light is red and then is set to go it should become green", () => {
    // setup

    let trafficLight = new TrafficLight(DIRECTION.east, COLOUR.red);

    // action
    trafficLight.go();

    // Assert 

    expect(trafficLight.getColour()).toBe(COLOUR.green);
    expect(console.log).toHaveBeenLastCalledWith("TL: east ==> green");
  });

  test("Check if traffic light is green and the light is stopped it should now be red", () => {
    // setup
    let trafficLight = new TrafficLight(DIRECTION.east, COLOUR.green);

    // action
    trafficLight.stop();

    // Assert 
    expect(trafficLight.getColour()).toBe(COLOUR.red);
    expect(console.log).toBeCalledWith("TL: east ==> yellow");
    expect(console.log).toHaveBeenLastCalledWith("TL: east ==> red");
  });

});