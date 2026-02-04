import { useState } from "react";

interface Status { id: number; name: string; }

interface Category {
  id: number;
  name: string;
  parent_id: number | null;
  status_id: number;
  slug: string;
}

const ManageCategories = () => {
  // Static statuses
  const statuses: Status[] = [
    { id: 1, name: "Active" },
    { id: 2, name: "Inactive" },
  ];

  // Static categories
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Men", parent_id: null, status_id: 1, slug: "men" },
    { id: 2, name: "Women", parent_id: null, status_id: 1, slug: "women" },
    { id: 3, name: "Shirts", parent_id: 1, status_id: 1, slug: "shirts" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState<Omit<Category, "id">>({
    name: "",
    parent_id: null,
    status_id: 1,
    slug: "",
  });

  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure?")) return;
    setCategories(categories.filter(c => c.id !== id));
  };

  const handleAddCategory = () => {
    const id = categories.length ? Math.max(...categories.map(c => c.id)) + 1 : 1;
    setCategories([...categories, { ...newCategory, id }]);
    setShowModal(false);
    setNewCategory({ name: "", parent_id: null, status_id: 1, slug: "" });
  };

  const getStatusName = (id: number) => statuses.find(s => s.id === id)?.name || "";
  const getParentName = (parent_id: number | null) => {
    if (!parent_id) return "-";
    const parent = categories.find(c => c.id === parent_id);
    return parent ? parent.name : "-";
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Categories Management</h5>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Add Category</button>
        </div>

        <div className="card-body">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Parent Category</th>
                <th>Slug</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{getParentName(c.parent_id)}</td>
                  <td>{c.slug}</td>
                  <td>
                    <span className={`badge ${c.status_id === 1 ? "bg-success" : "bg-danger"}`}>
                      {getStatusName(c.status_id)}
                    </span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-secondary btn-sm me-2">View</button>
                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal (Plain Bootstrap) */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Category</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newCategory.name}
                    onChange={e => setNewCategory({ ...newCategory, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newCategory.slug}
                    onChange={e => setNewCategory({ ...newCategory, slug: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Parent Category</label>
                  <select
                    className="form-select"
                    value={newCategory.parent_id || ""}
                    onChange={e => setNewCategory({ ...newCategory, parent_id: e.target.value ? parseInt(e.target.value) : null })}
                  >
                    <option value="">None</option>
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={newCategory.status_id}
                    onChange={e => setNewCategory({ ...newCategory, status_id: parseInt(e.target.value) })}
                  >
                    {statuses.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={handleAddCategory}>Add Category</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageCategories;
