import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthProvider, { useAuth } from "./security/AuthContext";
import "./BoardApp.css";
import Login from "./Login";
import Header from "./Header";
import PostBoard from "./PostBoard";
import ReadPost from "./ReadPost";
import WritePost from "./WritePost";
import UpdatePost from "./UpdatePost";
import SignUpUser from "./SignUpUser";
import SearchedPostBoard from "./SearchedPostBoard";
import SideBar from "./SideBox";
import Footer from "./Footer";
import SearchNotFound from "./SearchNotFound";

const AuthenticatedRoute = ({ children }) => {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />;
};
const UnAuthenticatedRoute = ({ children }) => {
  const authContext = useAuth();
  if (!authContext.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

const App = () => {
  return (
    <div className="BoardApp">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <div>
            <SideBar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/page/1" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/page/:pageNumber" element={<PostBoard />} />
              <Route path="/post/:id" element={<ReadPost />} />
              <Route
                path="/post/posting"
                element={
                  <AuthenticatedRoute>
                    <WritePost />
                  </AuthenticatedRoute>
                }
              />
              <Route
                path="/post/update/:id"
                element={
                  <AuthenticatedRoute>
                    <UpdatePost />
                  </AuthenticatedRoute>
                }
              />
              <Route
                path="/post/search/:type/:keyword/:pageNumber"
                element={<SearchedPostBoard />}
              />
              <Route
                path="/auth"
                element={
                  <UnAuthenticatedRoute>
                    <SignUpUser />
                  </UnAuthenticatedRoute>
                }
              />
              <Route
                path="/post/search/notfound"
                element={<SearchNotFound />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};
export default App;
