import { ADD_BOOK, DELETE_BOOK } from './booksTypes';

// export const addBook = book => {
//   return {
//     type: ADD_BOOK,
//     payload: book,
//   };
// };

// export const deleteBook = id => {
//   return {
//     type: DELETE_BOOK,
//     payload: id,
//   };
// };

import { createAction } from "@reduxjs/toolkit";

export const addBook=createAction(ADD_BOOK);
export const deleteBook=createAction(DELETE_BOOK);

