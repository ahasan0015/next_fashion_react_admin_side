import { useState } from "react";

interface Order {
  id: number;
  order_number: string;
  user_name: string;
  total: number;
  status: string;
  created_at: string;
}

interface Product {
  id: number;
  name: string;
  sold: number;
  revenue: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
}

const Reports = () => {
  // Static summary numbers
  const totalOrders = 120;
  const totalRevenue = 9875.50;
  const totalProducts = 50;
  const totalUsers = 200;

  // Static recent orders
  const [recentOrders] = useState<Order[]>([
    { id: 1, order_number: "ORD-1001", user_name: "John Doe", total: 150.5, status: "Pending", created_at: "2026-02-04" },
    { id: 2, order_number: "ORD-1002", user_name: "Sarah Smith", total: 299.99, status: "Completed", created_at: "2026-02-03" },
    { id: 3, order_number: "ORD-1003", user_name: "Admin User", total: 75.0, status: "Processing", created_at: "2026-02-02" },
  ]);

  // Static top products
  const [topProducts] = useState<Product[]>([
    { id: 1, name: "Men Shirt Blue", sold: 50, revenue: 1275 },
    { id: 2, name: "Women Dress Red", sold: 35, revenue: 1575 },
    { id: 3, name: "Men T-Shirt", sold: 20, revenue: 300 },
  ]);

  // Static recent users
  const [recentUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", status: "Inactive" },
    { id: 3, name: "Admin User", email: "admin@example.com", status: "Active" },
  ]);

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Dashboard Reports</h4>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-3 mb-2">
          <div className="card text-white bg-primary shadow">
            <div className="card-body">
              <h5>Total Orders</h5>
              <h3>{totalOrders}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="card text-white bg-success shadow">
            <div className="card-body">
              <h5>Total Revenue</h5>
              <h3>${totalRevenue.toFixed(2)}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="card text-white bg-warning shadow">
            <div className="card-body">
              <h5>Total Products</h5>
              <h3>{totalProducts}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="card text-white bg-info shadow">
            <div className="card-body">
              <h5>Total Users</h5>
              <h3>{totalUsers}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="card mb-4 shadow">
        <div className="card-header">
          <h5>Recent Orders</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Order Number</th>
                <th>User</th>
                <th>Total ($)</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(o => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.order_number}</td>
                  <td>{o.user_name}</td>
                  <td>{o.total.toFixed(2)}</td>
                  <td>
                    <span className={`badge ${o.status === "Completed" ? "bg-success" : o.status === "Pending" ? "bg-warning text-dark" : "bg-primary"}`}>
                      {o.status}
                    </span>
                  </td>
                  <td>{o.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products Table */}
      <div className="card mb-4 shadow">
        <div className="card-header">
          <h5>Top Products</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Sold</th>
                <th>Revenue ($)</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.sold}</td>
                  <td>{p.revenue.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Users Table */}
      <div className="card shadow mb-4">
        <div className="card-header">
          <h5>Recent Users</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <span className={`badge ${u.status === "Active" ? "bg-success" : "bg-danger"}`}>
                      {u.status}
                    </span>
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

export default Reports;
