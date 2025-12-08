import { useState, useEffect } from 'react';
import { fetchSales } from '../services/salesService';

export const useSales = (filters, search, sort, page) => {
  const [salesData, setSalesData] = useState({ items: [], page: 1, totalPages: 1 });

  useEffect(() => {
    const loadData = async () => {
      const params = {
        page,
        pageSize: 10,
        q: search,
        sortBy: sort.sortBy,
        sortOrder: sort.sortOrder,
        filters: JSON.stringify(filters),
      };
      const data = await fetchSales(params);
      setSalesData(data);
    };
    loadData();
  }, [filters, search, sort, page]);

  return salesData;
};

