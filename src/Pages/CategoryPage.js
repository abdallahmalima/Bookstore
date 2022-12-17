import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const handleStatusCheck = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <main className="h-[80vh] w-full flex flex-col gap-3   justify-center items-center">
        <h2 className=" bg-inherit w-fit text-center text-3xl text-red-600">{status}</h2>
        <button
          type="button"
          className="text-dirty-white app-bg-primary my-4 rounded w-fit font-light font-roboto px-12 py-3 text-base font-bold"
          onClick={handleStatusCheck}
        >
          Check status
        </button>

      </main>
    </>
  );
};

export default CategoryPage;