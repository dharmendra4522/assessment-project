import { useState } from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import SalesTable from './components/SalesTable';
import Pagination from './components/Pagination';
import { useSales } from './hooks/useSales';

export default function App() {
  const [search, setSearch] = useState('');
  const [regions, setRegions] = useState([]);
  const [genders, setGenders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [ageRange, setAgeRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [page, setPage] = useState(1);

  const filters = {
    CustomerRegion: regions.map(r => r.value),
    Gender: genders.map(g => g.value),
    AgeRange: ageRange,
    ProductCategory: categories.map(c => c.value),
    PaymentMethod: paymentMethods.map(p => p.value),
    dateFrom,
    dateTo
  };

  const salesData = useSales(filters, search, { sortBy, sortOrder }, page);

  return (
    <div className="app-container">


      <div className="main-content">
        <div className="header-row">
          <h1>Retail Sales Dashboard</h1>
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <div className="controls-row">
          <FilterPanel
            regions={regions} setRegions={setRegions}
            genders={genders} setGenders={setGenders}
            categories={categories} setCategories={setCategories}
            paymentMethods={paymentMethods} setPaymentMethods={setPaymentMethods}
            dateFrom={dateFrom} setDateFrom={setDateFrom}
            dateTo={dateTo} setDateTo={setDateTo}
            ageRange={ageRange} setAgeRange={setAgeRange}
          />

          <div className="sort-controls">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="date">Date</option>
              <option value="quantity">Quantity</option>
              <option value="customerName">Customer Name</option>
            </select>
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>


        <SalesTable sales={salesData.items} />
        <Pagination
          page={salesData.page}
          totalPages={salesData.totalPages}
          prevPage={() => setPage(prev => Math.max(prev - 1, 1))}
          nextPage={() => setPage(prev => Math.min(prev + 1, salesData.totalPages))}
        />
      </div>
    </div>
  );
}
