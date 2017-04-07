import { events } from "./pubsub";

events.on("test", (val: string) => console.log(val));

events.emit("test", "hello");
