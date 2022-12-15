import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const handleStatusCheck = () => {
    dispatch(checkStatus());
  };

  return <div className='category-page'>
      {status && <button onClick={handleStatusCheck} >Check Status</button>}
      {status && <h4>{status}</h4>}
      </div>;
};

export default CategoryPage;