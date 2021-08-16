#!/usr/bin/env node

import solution from "../server.js";

const port = 8080;
solution(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server has been started!');
});
