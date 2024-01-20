import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
import { Test } from './Test';

const HomePage = lazy(() => import('../pages/HomePage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
};
