import fs from 'fs/promises';
import http from 'http';

export default async (port, callback) => {
  const data = await fs.readFile('phonebook.txt');
  const users = data.toString().trim().split('\n');

  const server = http.createServer((req, res) => {
    const messages = [
      'Welcome to The Phonebook',
      `Records count: ${users.length}`,
    ];
    res.end(messages.join('\n'));
  })

  server.listen(port, callback);
}
