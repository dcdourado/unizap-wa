import STATES from "../utils/states.js";
import Logger from "./logger.js";

let sessions = [];

const exists = (message) => {
  const id = message.from;

  const session = sessions.find((s) => s.id === id);

  if (session === undefined) {
    return false;
  }

  return true;
};

const start = (message) => {
  const id = message.from;

  Logger.info(`Starting session with id ${id}`);

  return sessions.push({
    id,
    state: STATES.INITIAL,
    createdAt: new Date(),
  });
};

const remove = (id) => {
  Logger.info(`Removing session with id ${id}`)

  const newSessions = sessions.filter((s) => s.id !== id);

  sessions = newSessions;

  return;
}

const Sessions = {
  exists,
  start,
  remove,
};

export default Sessions;
