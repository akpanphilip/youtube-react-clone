import Navbar from './components/Navbar'
import Feed from './components/Feed'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer';
// import VideoDetail from './components/VideoDetail'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>

  )
}
{/* <VideoDetail /> */ }

export default App
