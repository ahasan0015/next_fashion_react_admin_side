import { useState } from "react";

interface OrderStatus { id: number; name: string; }

interface Order {
  id: number;
  order_number: string;
  user_name: string;
  total: number;
  payment_method: string;
  order_status_id: number;
  created_at: string;
}

const ManageOrders = () => {
  // Static order statuses
  const statuses: OrderStatus[] = [
    { id: 1, name: "Pending" },
    { id: 2, name: "Processing" },
    { id: 3, name: "Completed" },
    { id: 4, name: "Cancelled" },
  ];

  // Static orders
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, order_number: "ORD-1001", user_name: "John Doe", total: 150.5, payment_method: "Credit Card", order_status_id: 1, created_at: "2026-02-04" },
    { id: 2, order_number: "ORD-1002", user_name: "Sarah Smith", total: 299.99, payment_method: "PayPal", order_status_id: 3, created_at: "2026-02-03" },
    { id: 3, order_number: "ORD-1003", user_name: "Admin User", total: 75.0, payment_method: "Cash On Delivery", order_status_id: 2, created_at: "2026-02-02" },
  ]);

  const getStatusName = (id: number) => statuses.find(s => s.id === id)?.name || "";

  const getStatusBadgeClass = (id: number) => {
    switch(id) {
      case 1: return "bg-warning text-dark";
      case 2: return "bg-primary";
      case 3: return "bg-success";
      case 4: return "bg-danger";
      default: return "bg-secondary";
    }
  };

  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    setOrders(orders.filter(o => o.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Orders Management</h5>
          <button className="btn btn-primary">+ Add Order</button>
        </div>

        <div className="card-body">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Order Number</th>
                <th>User</th>
                <th>Total ($)</th>
                <th>Payment</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.order_number}</td>
                  <td>{o.user_name}</td>
                  <td>{o.total.toFixed(2)}</td>
                  <td>{o.payment_method}</td>
                  <td>
                    <span className={`badge ${getStatusBadgeClass(o.order_status_id)}`}>
                      {getStatusName(o.order_status_id)}
                    </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-secondary btn-sm me-2">View</button>
                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(o.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
