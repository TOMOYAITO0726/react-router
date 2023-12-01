import { BrowserRouter, Link } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      {/* //囲った配下でルーティングを有効にする */}
      <div className="App">
        <Link to="/">Home</Link> {/*Linkでページ遷移を設定できる */}
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Home />
        <Page1 />
        <Page2 />
      </div>
    </BrowserRouter>
  );
}
