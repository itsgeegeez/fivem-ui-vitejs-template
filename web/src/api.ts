class api {
  constructor() {
    window.addEventListener("message", (e) => {
      const data = e.data;
      if (data.event && (this as any)[`on${data.event}`]) {
        (this as any)[`on${data.event}`](e.data);
      }
    });
  }

  onTest(data: string) {
    console.log(data);
  }
}

export const Api = new api();
