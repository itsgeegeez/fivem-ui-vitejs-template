on("onClientResourceStart", (resource: string) => {
  if (resource === GetCurrentResourceName()) {
    console.log("client side works!");
    SendNUIMessage({
      event: "test",
      data: "test",
    })
  }
});
