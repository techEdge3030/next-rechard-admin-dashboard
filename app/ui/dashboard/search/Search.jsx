import styles from "./search.module.css";
import { SearchCode } from "lucide-react";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <SearchCode />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
