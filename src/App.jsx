import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Background } from "./components/background";
import { Home } from "./pages/Home";
import SearchMedicine from "./pages/searchMedicine";
import { UserPage } from "./pages/userPage";

const App = () => {
  return (
    <Router>
      <Background>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-medicine" element={<SearchMedicine />} />
          {/*<Route path="/user" element={<UserPage />} />*/}
        </Routes>
      </Background>
    </Router>
  );
};

export default App;
