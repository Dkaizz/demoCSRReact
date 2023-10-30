import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Home from "./pages/Home";

const router = [
  {
    path: "postcsr",
    page: Posts,
  },
  {
    path: "postcsr/:postId",
    page: Post,
  },
  {
    path: "",
    page: Home,
  },
];

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {router.map((item, index) => {
            let Layout = RootLayout;
            if (!!item.layout) {
              Layout = item.layout;
            }
            const Page = item.page;
            return (
              <Route
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
