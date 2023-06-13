import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Post from "./components/pages/Post/Post";
import Edit from "./components/pages/Edit/Edit";
import Add from "./components/pages/Add/Add";
import WrongAddress from "./components/pages/WrongAddress/WrongAddress";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/*" element={<Post />} />
        <Route path="/post/add" element={Add} />
        <Route path="/post/edit/*" element={<Edit />} />
        <Route path="/*" element={<WrongAddress />} />
      </Routes>
    </div>
  );
}

export default App;
