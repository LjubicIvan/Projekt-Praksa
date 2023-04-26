import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Nopage from "./Nopage";
import AdminPanel from "./admin/AdminPanel";
import CreatePost from "./admin/CreatePost";
import ListUser from "./admin/ListUser";
import UserPage from "./User/UserPage"
import PostId from "./User/PostId"
import AdminList from "./admin/AdminList"

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
