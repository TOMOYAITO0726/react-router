import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import { Router } from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      {/* //囲った配下でルーティングを有効にする */}
      <div className="App">
        <Link to="/">Home</Link> {/*Linkでページ遷移を設定できる */}
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
