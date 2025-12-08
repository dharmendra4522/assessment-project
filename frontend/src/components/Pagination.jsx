export default function Pagination({ page, totalPages, prevPage, nextPage }) {
  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={page <= 1}>Prev</button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={nextPage} disabled={page >= totalPages}>Next</button>
    </div>
  );
}
