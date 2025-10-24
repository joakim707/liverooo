// routes/restaurants.js

router.get('/', async (req, res) => {
  const { cuisine } = req.query;
  const filter = cuisine ? { cuisine } : {};
  const restaurants = await Restaurant.find(filter);
  res.json(restaurants);
});
