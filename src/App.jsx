
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Home from './Home/Home'; // Import the home page
import ChartPage from './ChartPage'; // Import the chart page

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home page */}
        <Route path="/" element={<Home />} />
        {/* Route for Chart page */}
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
