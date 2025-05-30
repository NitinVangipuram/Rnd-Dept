import React, { useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { SearchContext } from "../components/Search/SearchContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResultsPage = () => {
  const { results, handleSearch } = useContext(SearchContext);
  const query = useQuery().get("q") || "";

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  return (
    <div
      style={{
        padding: "2rem",
        minHeight: "calc(100vh - 70px - 60px)", // adjust 70px and 60px to your header/footer heights
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Search Results for "{query}"</h2>
      {query && results.length === 0 && <div>No results found.</div>}
      <ul style={{ flex: 1 }}>
        {results.map((item, idx) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <Link to={item.link}>
              <strong>{item.title}</strong>
              <div style={{ fontSize: "0.9em" }}>
                {item.displaycontent || item.content}
              </div>
              <span style={{ fontSize: "0.8em", color: "#888" }}>{item.page}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsPage;
