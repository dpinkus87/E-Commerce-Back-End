const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "",
  onDelete: "",
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "",
  onDelete: "",
})

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {})  

// Tags belongToMany Products (through ProductTag)

module.exports = {Product, Category, Tag, ProductTag};
