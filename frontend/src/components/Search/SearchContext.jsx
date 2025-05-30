import React, { createContext, useState } from "react";
import searchData from "./searchData";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (q) => {
    const trimmedQ = (q || "").trim();
    setQuery(trimmedQ);
    if (!trimmedQ) {
      setResults([]);
      return;
    }
    const lowerQ = trimmedQ.toLowerCase();
    const filtered = searchData.filter(
      item =>
        (item.title && item.title.toLowerCase().includes(lowerQ)) ||
        (item.content && item.content.toLowerCase().includes(lowerQ)) ||
        (item.page && item.page.toLowerCase().includes(lowerQ))
    );
    setResults(filtered);
  };

  return (
    <SearchContext.Provider value={{ query, results, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
