import React from 'react'
import './Categorycard.css';
import { useNavigate } from 'react-router-dom';

const Categorycard = ({image,category}) => {
    const navigate = useNavigate();
  return (
    <div className="category-card" onClick={() => navigate(`/category/${encodeURIComponent(category.toLowerCase())}`)}>
        <img src={image} alt={category}  className='category-image'/>
        <h2>{category}</h2>
    </div>    

  )
}

export default Categorycard