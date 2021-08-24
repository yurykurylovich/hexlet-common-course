// @ts-check

import http from 'http';

const getParams = (address, host) => {
  const url = new URL(address, `http://${host}`);
  return Object.fromEntries(url.searchParams);
};

const router = {
  GET: {
    '/users/(\\w+).json': (req, res, matches, usersById) => {
      // BEGIN (write your solution here)
      const index = matches[1];
      const user = usersById[index];

      if (user) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ data: user }))
      } else {
        res.statusCode = 404;
        res.end();
      }
      // END
    },
    '/': (req, res, matches, usersById) => {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      res.end(messages.join('\n'));
    },

    '/search.json': (req, res, matches, usersById) => {
      res.setHeader('Content-Type', 'application/json');

      const { q = '' } = getParams(req.url, req.headers.host);
      const normalizedSearch = q.trim().toLowerCase();
      const ids = Object.keys(usersById);

      const usersSubset = ids
        .filter((id) => usersById[id].name.toLowerCase().includes(normalizedSearch))
        .map((id) => usersById[id]);
      res.end(JSON.stringify({ data: usersSubset }));
    },

    '/users.json': (req, res, matches, usersById) => {
      res.setHeader('Content-Type', 'application/json');

      const { page = 1, perPage = 10 } = getParams(req.url, req.headers.host);
      const ids = Object.keys(usersById);

      const usersSubset = ids.slice((page * perPage) - perPage, page * perPage)
        .map((id) => usersById[id]);
      const totalPages = Math.ceil((ids.length) / perPage);
      res.end(JSON.stringify({ meta: { page, perPage, totalPages }, data: usersSubset }));
    },
  },
};

export default (users) => http.createServer((request, response) => {
  const { pathname } = new URL(request.url, `http://${request.headers.host}`);
  const routes = router[request.method];

  const result = pathname && Object.keys(routes).find((str) => {
    const regexp = new RegExp(`^${str}$`);
    const matches = pathname.match(regexp);

    if (!matches) {
      return false;
    }

    routes[str](request, response, matches, users);
    return true;
  });

  if (!result) {
    response.writeHead(404);
    response.end();
  }
});
