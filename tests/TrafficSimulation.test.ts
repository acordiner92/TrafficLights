import TrafficSimulation from "../TrafficSimulation";
import { DIRECTION, COLOUR } from "../TrafficLightConstants";

describe("TrafficSimulation", () => {

  test("Check if duration is exactly 5min 30s it should execute changing lights once ", () => {
    // setup
    let sim = new TrafficSimulation(5.5);

    // action
    sim.runSimulation();

    // Assert 
    expect(sim.getNumTrafficChanges()).toBe(1);
  });

  test("Check if duration is more than 5min 30s it should only cycle twice ", () => {
   // setup
    let sim = new TrafficSimulation(5.51);

    // action
    sim.runSimulation();

    // Assert 
    expect(sim.getNumTrafficChanges()).toBe(2);
  });

});