"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./search.module.css";
import { SearchCode } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  // search yaptığımda bunu url'de saklamak istiyorum
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    // search değeri varsa url'e yansıt yoksa url'den de sil
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <SearchCode />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
