import { useItemContext } from "../Store/ItemsProvider.js";
import Users from '../Pages/Users';
import Admin from '../Pages/Admin';

const Body = () => {
  const { switchPage } = useItemContext();
  return (
    <>
      {switchPage ? <Users /> : <Admin /> }
    </>
  )
}

export default Body;