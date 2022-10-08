import { RegisterNuiCB } from "../utils/registerNuiCb";

RegisterNuiCB<"hello">("ping", (data, cb) => {
  console.log("pinged! | data received: ", data);
  if (data == "hello") {
    cb("world");
  }
  cb("nope");
});
