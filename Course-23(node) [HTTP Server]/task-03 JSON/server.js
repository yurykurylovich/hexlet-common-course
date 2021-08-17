import http from 'http';

export default (usersById) => http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err.stack);
  });
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search.json')) {
      response.setHeader('Content-Type', 'application/json');

      const url = new URL(request.url, `http://${request.headers.host}`);
      const q = url.searchParams.get('q');
      const normalizedSearch = q ? q.trim().toLowerCase() : '';

      const result = Object.values(usersById)
        .filter((user) => user.name.toLowerCase().includes(normalizedSearch));

      response.end(JSON.stringify(result));
    } else if (request.url.startsWith('/users.json')) {
      // BEGIN (write your solution here)
      response.setHeader("Content-Type", "application/json");
      const url = new URL(request.url, `http://${request.headers.host}`);
      const page = parseInt(url.searchParams.get('page')) || 1;
      const perPage = parseInt(url.searchParams.get('perPage')) || 10;
      const data = page !== 1
        ? Object.values(usersById).slice(page * perPage - perPage, page * perPage)
        : Object.values(usersById).slice(0, perPage)
      const result = {
        meta: {
          page,
          perPage,
          totalPages: Math.ceil(Object.keys(usersById).length/perPage)
        },
        data
      }
      response.end(JSON.stringify(result))
      // END
    }
  });
  request.resume();
});
