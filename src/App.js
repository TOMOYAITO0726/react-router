import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
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
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        
      </div>
      <Switch>{/* Swictでコンポーネントを分ける */}
      <Route exact path="/">{/* RouteでURLとコンポーネントを結びつける */}
        <Home />
      </Route>
      <Route path="/page1">{/* RouteでURLとコンポーネントを結びつける */}
        <Page1 />
      </Route>
      <Route path="/page2">{/* RouteでURLとコンポーネントを結びつける */}
        <Page2 />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}
