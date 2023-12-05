import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
export const Page1DetailA = () => {
  const{ state }  = useLocation();
  console.log(state);  
  return (
      <div>
        <h1>Page1DetailAページです</h1>
      </div>
    );
  };
  