import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./features/header/Header";
import { ProductCatalogLayout } from "./layouts/ProductCatalogLayout/ProductCatalogLayout";

import "./styles/style.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/category/:categoryId"
          element={<ProductCatalogLayout />}
        />
        <Route path="/" element={<Navigate to="/category/all" />} />
        <Route
          path="*"
          element={
            <>
              <div className="error">Ошибка</div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
