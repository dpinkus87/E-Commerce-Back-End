const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  
  // find all categories
  // be sure to include its associated Products

  try {
    const categoriesData = await Category.findAll();
    res.status(200).json(categoriesData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
try {
  const categoriesData = Category.findByPk(req.params.id, {
    include: [{ model: Product}]
  }
    );
    if(categoriesData) {
      res.status(404).json({message: "No category with that id!"});
      return;
    }
    res.status(200).json(categoriesData);
} catch (error) {
  res.status(500).json(err);
}
});

router.post('/', async (req, res) => {
  // create a new category
try {
  const categoriesData = await Category.create(req.body);
  res.status(200).json(categoriesData);
} catch (error) {
  res.status(400).json(error);
}
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
try {
  const categoriesData = await Category.update(req.body);
} catch (error) {
  
}
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
