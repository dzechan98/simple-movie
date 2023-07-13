import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Header from "./components/Header/Header";
import Movies from "./page/Movies/Movies";
import DetailMovie from "./page/DetailMovie/DetailMovie";
import Footer from "./components/Footer/Footer";
function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movie/:id" element={<DetailMovie />} />
                    <Route path="/*" element={<h1>Error Page</h1>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
