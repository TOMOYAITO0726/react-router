import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1DetailA } from "../PageDetailA";
import { Page1DetailB } from "../PageDetailB";

export const Router = () => {
    return (
        <Switch>{/* Swictでコンポーネントを分ける */}
      <Route exact path="/">{/* RouteでURLとコンポーネントを結びつける、exactを付けることで完全一致のみマッチさせる */}
        <Home />
      </Route>
      <Route 
        path="/page1" 
        render={({match: { url }}) => ( 
        <Switch> {/*propsの中のmatchの中にurl(/page1)があるからそれを利用する */}
          <Route exact path={url}>
            <Page1 />
          </Route>
          <Route  path={"${url}/detailA"}>
            <Page1DetailA />
          </Route>
          <Route  path={"${url}/detailB"}>
            <Page1DetailB />
          </Route>
        </Switch>
      )} />
      <Route path="/page2">
        <Page2 />
      </Route>
      </Switch>
    );
};