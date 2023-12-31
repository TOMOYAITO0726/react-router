import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/detailA");//DetailAに遷移できる
    return (
      <div>
        <h1>Page1ページです</h1>
        <Link to={{ pathname:"/page1/detailA", state: arr}}>DetailA</Link> {/*オブジェクトとしてpathnameを設定 */}
        <br />
        <Link to="/page1/detailB">DetailB</Link>
        <br />
        <button onClick={onClickDetailA}>DetailA</button>
      </div>
    );
  };
  