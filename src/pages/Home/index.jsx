import { ItemsContainer } from "../../components/ItemsContainer";
import { Filter } from "../../components/Filter";
import homeStyles from "./index.module.css";

export const Home = () => {
  return (
    <div className={homeStyles.bgContainer}>
      <ItemsContainer />
      <div className={homeStyles.filterContainer}>
        <Filter />
      </div>
    </div>
  );
};