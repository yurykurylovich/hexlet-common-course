import Express from 'express';

export default () => {
  const app = new Express();
  const initial = 0;
  let counter = initial;

  app.get('/', (req, res) => {
    res.json({ value: initial })
  });

  app.delete('/reset', (req, res) => {
    counter = initial;
    res.status(204).end();
  });

  app.post('/increment', (req, res) => {
    counter += 1;
    res.status(204).end();
  });

  app.post('/decrement', (req, res) => {
    counter -= 1
    res.status(204).end();
  });

  app.put('/set', (req, res) => {
    counter = Number(req.query.value);
    res.status(204).end();
  });

  return app;
}
