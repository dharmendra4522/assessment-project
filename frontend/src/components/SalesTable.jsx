
export default function SalesTable({ sales }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Region</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Date</th>
          <th>Payment</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {sales.map((s, i) => (
          <tr key={i}>
            <td>{s.customerName}</td>
            <td>{s.phoneNumber}</td>
            <td>{s.gender}</td>
            <td>{s.age}</td>
            <td>{s.region}</td>
            <td>{s.product}</td>
            <td>{s.quantity}</td>
            <td>{s.date ? new Date(s.date).toISOString().slice(0, 10) : ""}</td>
            <td>{s.payment}</td>
            <td>{s.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
