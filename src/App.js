import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Edit from "./components/pages/Edit/Edit";
import Add from "./components/pages/Add/Add";
import WrongAddress from "./components/pages/WrongAddress/WrongAddress";
import { Route, Routes } from "react-router-dom";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Container } from "react-bootstrap";
import SinglePostPage from "./components/pages/Post/SinglePostPage";


function App() {
  return (
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/post/add" element={<Add />} />
          <Route path="/post/edit/:id" element={<Edit />} />
          <Route path="/*" element={<WrongAddress />} />
        </Routes> 
        <Footer />
      </Container>
   
  );
}

export default App;
