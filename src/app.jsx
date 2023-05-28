import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Layout } from "./components/layout";
import { useAuth } from "./hooks/useAuth";
import { Invoice } from "./pages/invoice/invoice";
import { Add } from "./pages/add/add";
import { Edit } from "./pages/edit/edit";

export const App = () => {
  const [token] = useAuth();

  if (token) {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Layout>
    );
  }
  return <Login />;
};
