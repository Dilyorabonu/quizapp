// react router dom imports
import { Outlet } from "react-router-dom";

// component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="https://t.me/iiiii_dd" target="_blank">
          Telegram
        </a>{" "}
        |
        <a href="https://www.github.com/Dilyorabonu" target="_blank">
          Github
        </a>
      </footer>
    </>
  );
}

export default MainLayout;
