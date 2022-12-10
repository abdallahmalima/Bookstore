import React, { useState } from 'react';

const Book = ({ title, author }) => (
        <div className='book-wrapper'>
             <div>
              <h4>Action</h4>
              <h2>{ title }</h2>
              <p>{ author }</p>
              <ul>
                <li>Comments</li>
                <li>Remove</li>
                <li>Edit</li>
              </ul>
              </div>
              <div>
              <h4>64%</h4>
              <p>completed</p>
              </div>
              <div>
              <p>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
              <button>UPDATE PROGRESS</button>
              </div>
         </div>
);

export default Book;