const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

function getSales() {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, "..", "data", "sales.csv");
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        const sale = {
          customerName: row["Customer Name"],
          phoneNumber: row["Phone Number"],
          gender: row["Gender"],
          age: row["Age"],
          region: row["Customer Region"],
          product: row["Product Name"],
          quantity: row["Quantity"],
          date: row["Date"],
          payment: row["Payment Method"],
          status: row["Order Status"],
        };

        results.push(sale);
      })
      .on("end", () => resolve(results))
      .on("error", reject);
  });
}

// NEW FUNCTION
async function querySales(options) {
  let sales = await getSales();

  // Apply filters
  if (options.filters?.dateFrom) {
    sales = sales.filter(
      (s) => new Date(s.date) >= new Date(options.filters.dateFrom)
    );
  }

  if (options.filters?.dateTo) {
    sales = sales.filter(
      (s) => new Date(s.date) <= new Date(options.filters.dateTo)
    );
  }

  // search query
  if (options.q) {
    const q = options.q.toLowerCase();

    sales = sales.filter(
      (s) =>
        s.customerName?.toLowerCase().includes(q) ||
        s.phoneNumber?.toLowerCase().includes(q) 

    );
  }

  // Sorting
  if (options.sortBy) {
    const { sortBy, sortOrder = "asc" } = options;

    sales.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Pagination
  const start = (options.page - 1) * options.pageSize;
  const paginated = sales.slice(start, start + options.pageSize);

  return {
  page: options.page,
  pageSize: options.pageSize,
  total: sales.length,
  data: paginated,
};

}

module.exports = { getSales, querySales };
