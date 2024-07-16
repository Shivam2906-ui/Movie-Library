import Header from "./Header";
import Movies from "./Movies";
import Search from "./Search";
// import { AppContext } from "../utils/context";
// this Browse is basicially a Body bot are same
const Browse = () => {
  // const name = useContext(AppContext);

  return (
    <>
      <Header />
      <Search />
      <Movies />
    </>
  );
};

export default Browse;
