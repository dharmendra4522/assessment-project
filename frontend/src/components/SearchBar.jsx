export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Customer Name or Phone"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />
  );
}
