import "../src/style/App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nopage from "./components/Nopage";
import AdminPanel from "./components/admin/AdminPanel";
import CreatePost from "./components/admin/CreatePost";
import ListUser from "./components/admin/ListUser";
import UserPage from "./components/User/UserPage"
import PostId from "./components/User/PostId"
import AdminList from "./components/admin/AdminList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Nopage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/createpost" element={<CreatePost />} />
        <Route path="/admin/listofposts" element={<AdminList />} />
        <Route path="/admin/listofusers" element={<ListUser />} />
        <Route path="/user/post" element={<UserPage />} />
        <Route path="/user/post/:id" element={<PostId  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
