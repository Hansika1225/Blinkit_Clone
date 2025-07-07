const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Category = require('./models/category');
const Item = require('./models/item');
const User = require('./models/user'); 
const categories = require('./categoriesData');
const items = require('./itemsData');
const users = require('./UserData');  

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blinkit-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("Connected To MongoDB");

  const countCat = await Category.countDocuments();
  if (countCat === 0) {
    await Category.insertMany(categories);
    console.log("Auto-seeded categories data");
  } else {
    console.log("Categories already exist");
  }

  const countItem = await Item.countDocuments();
  if (countItem === 0) {
    await Item.insertMany(items); 
    console.log("Auto-seeded items data");
  } else {
    console.log("Items already exist");
  }

  const countUsers = await User.countDocuments();
  if (countUsers === 0) {
    await User.insertMany(users);
    console.log("Auto-seeded users data");
  } else {
    console.log("Users already exist");
  }

}).catch(err => {
  console.log("Error connecting to MongoDB:", err);
});


app.post('/api/login', async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    let user = await User.findOne({ phoneNumber });

    if (user) {
      if (user.password === password) {
        return res.json({ status: 'existing', message: 'Welcome back!' });
      } else {
        return res.status(401).json({ status: 'error', message: 'Incorrect password' });
      }
    } else {
      const newUser = new User({ phoneNumber, password });
      await newUser.save();
      return res.json({ status: 'new', message: 'New user created' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});


app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.post('/categories', async (req, res) => {
  const { imageURL, category } = req.body;
  try {
    const newCategory = new Category({ image: imageURL, category });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.put('/categories/:id', async (req, res) => {
  const { id } = req.params;
  const { image, category } = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, { image, category }, { new: true });
    if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.delete('/categories/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server error' });
  }
});


app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.post('/items', async (req, res) => {
  const { image, category, name, quantity, cost } = req.body;
  try {
    const newItem = new Item({ image, category, name, quantity, cost });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { image, category, name, quantity, cost } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { image, category, name, quantity, cost }, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server error' });
  }
});

app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
