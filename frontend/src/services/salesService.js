import axios from 'axios';

const API_URL = 'http://localhost:5000/api/sales';

export const fetchSales = async (params) => {
  try {
    const response = await axios.get(API_URL, { params });

    return {
      items: response.data.data,               
      page: response.data.page,               
      totalPages: Math.ceil(response.data.total / response.data.pageSize)
    };

  } catch (err) {
    console.error(err);
    return { items: [], page: 1, totalPages: 1 };
  }
};
