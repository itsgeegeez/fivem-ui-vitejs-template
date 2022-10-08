on("onServerResourceStart", (resource: string) => {
  if (resource === GetCurrentResourceName()) {
    console.log("server side works!");
  }
});
