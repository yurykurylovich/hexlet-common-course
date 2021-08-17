import fs from "fs/promises";
import _ from "lodash";
import path from "path";

import makeServer from "./server.js";

export default async (port, callback = () => {}) => {
  const data = await fs.readFile('./phonebook.txt', 'utf-8');
  const users = data
    .trim()
    .split('\n')
    .map((user) => user.split('|').map((item) => item.trim()))

  const usersIds = users.map(([id]) => id);
  const usersData = users.map(([, name, phone]) => ({ name, phone }))
  const usersById = _.zipObject(usersIds, usersData)

  const server = makeServer(usersById);
  server.listen(port, () => callback(server));
}
