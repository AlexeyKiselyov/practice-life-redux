import { AddBookPage } from 'pages/AddBookPage/AddBookPage/AddBookPage';
import { HomePage } from 'pages/AddBookPage/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="addbook" element={<AddBookPage />} />
        </Route>
      </Routes>
    </>
  );
};
