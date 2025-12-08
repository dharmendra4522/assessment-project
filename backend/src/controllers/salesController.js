const salesService = require("../services/salesService");

async function getSales(req, res) {
  try {
    const options = {
      q: req.query.q || "",
      filters: {
        dateFrom: req.query.dateFrom,
        dateTo: req.query.dateTo,
      },
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder,
      page: parseInt(req.query.page) || 1,
      pageSize: parseInt(req.query.pageSize) || 10,
    };

    const data = await salesService.querySales(options);
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getSales };
