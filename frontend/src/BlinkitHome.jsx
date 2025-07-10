import React, { useState, useEffect } from 'react';
import './BlinkitHome.css';
import Categorycard from './Categorycard';
import Itemcard from './Itemcard';

const BlinkitHome = () => {
  const [CatArray, setCatArray] = useState([]);
  const [items, setItems] = useState([]);

  // Normalize helper for matching
  const normalize = (str) =>
    str?.toLowerCase().trim().replace(/\s+/g, ' ') || '';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/categories');
        const data = await response.json();
        console.log("Fetched Categories:", data);
        setCatArray(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchItems = async () => {
      console.log("Fetching items started");
      try {
        const response = await fetch('http://localhost:5000/items');
        const data = await response.json();
        console.log("Fetched Items:", data);
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchCategories();
    fetchItems();
  }, []);

  return (
    <>
      {/* Promo Banners */}
      <div className="promo-images">
        <div className="card">
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/print_crystal_WEB_0.jpg" alt="Paan Corner" />
        </div>
        <div className="card">
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="Pet Care" />
        </div>
        <div className="card">
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="Pharmacy" />
        </div>
        <div className="card">
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="Babycare" />
        </div>
      </div>

      {/* Category Cards Row */}
      <div className='category-row'>
        {CatArray.map((cat, index) => (
          <Categorycard key={index} image={cat.image} category={cat.category} />
        ))}
      </div>

      {/* Items under each category */}
      <div className='category-items-section'>
        {CatArray.map((cat, index) => {
          const catName = normalize(cat.category);
          const itemsForCategory = items.filter(
            (item) => normalize(item.category) === catName
          );

          console.log(`Rendering category: ${cat.category}`);
          console.log('Items for category:', itemsForCategory);

          return (
            <div key={index} className="category-section">
              <h2 className="category-title">{cat.category}</h2>
              <div className="items-row">
                {itemsForCategory.length > 0 ? (
                  itemsForCategory.map((item, i) => (
                    <Itemcard
                      key={i}
                      id={item._id}
                      image={item.image}
                      itemname={item.name}
                      quantity={item.quantity}
                      cost={item.cost}
                    />
                  ))
                ) : (
                  <p>No items found.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlinkitHome;
