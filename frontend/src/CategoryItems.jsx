import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Itemcard from './Itemcard';
import './Itemcard.css';

const CategoryItems = () => {
  const { categoryName } = useParams();
  const [itemArray, setItemArray] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/items');
        const data = await response.json();
        const filtered = data.filter(
          item => item.category.toLowerCase() === categoryName.toLowerCase()
        );
        setItemArray(filtered);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [categoryName]);

  return (
    <div className="item-container">
      {itemArray.map((item, i) => (
        <Itemcard
          key={i}
          id={item._id}
          image={item.image}
          itemname={item.name}
          quantity={item.quantity}
          cost={item.cost}
        />
      ))}
    </div>
  );
};

export default CategoryItems;
