import wa from "@open-wa/wa-automate";

import resolveMessage from "./commands/resolveMessage.js";

wa.create({
  sessionId: "UNIZAP_WA",
  sessionData: process.env.SESSION,
  qrTimeout: 0,
}).then((client) => start(client));

const start = (client) => {
  client.onMessage(resolveMessage);
};
