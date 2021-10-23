import Express from "express";

const getRandomNum = (min = -15, max = 40) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export default () => {
  const app = new Express();

  app.use((req, res, next) => {
    console.log(`received request`);
    next();
  });

  app.get('/api/v2/cities/:city', (req, res) => {
    const temperature = getRandomNum();
    const city = req.params.city;
    res.json({
      city,
      temperature,
    });
  });

  return app;
}

