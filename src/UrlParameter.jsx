import { useParams  } from "react-router-dom"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const UrlParameter = () => {
    const { id } = useParams();//100 
    const { search } = useLocation();//?name=hogehoge
    const query = new URLSearchParams(search);//クエリパラメータを扱うための便利なメソッドを提供してくれる
    console.log(query);
    console.log(search);
    return (
      <div>
        <h1>UrlParameterページです</h1>
        <p>パラメータは{id}です</p>
        <p>クエリパラメータは{query.get("name")}です</p>//hogehogeです
      </div>
    );
  };
  