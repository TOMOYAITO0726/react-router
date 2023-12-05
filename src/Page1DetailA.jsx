import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
export const Page1DetailA = () => {
  const{ state }  = useLocation();
  console.log(state);  

  const history = useHistory();

  const onClickBack = () => history.goBack();//戻れるようになる
  return (
      <div>
        <h1>Page1DetailAページです</h1>
        <button onClick={onClickBack}>戻る</button>
      </div>
    );
  };
  