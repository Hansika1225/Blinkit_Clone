import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Itemcard from './Itemcard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get('q')?.toLowerCase() || '';
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch('http://localhost:5000/items');
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results for "{searchTerm}"</h2>
      {filteredItems.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="item-container">
          {filteredItems.map((item, index) => (
            <Itemcard
              key={index}
              id={item._id}
              image={item.image}
              itemname={item.name}
              quantity={item.quantity}
              cost={item.cost}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
