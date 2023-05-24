const { createWyre } = require("@wyre-client/core");

async function loader() {
  console.log("started.");
  // const { createWyre } = await import("@wyre-client/core");
  const sync = createWyre({
    data: {},
    onChange: () => {},
  });
  const data = await sync.init("testing:dyn:imp");
  console.log("done.");
}

loader();
