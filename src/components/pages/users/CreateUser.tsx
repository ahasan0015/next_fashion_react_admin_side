import { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface Role { id: number; name: string; }
interface Status { id: number; name: string; }

interface UserFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  role_id: number;
  status_id: number;
}

const CreateUserForm = () => {
  // Static roles (from DB)
  const roles: Role[] = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Manager" },
    { id: 3, name: "Customer" },
  ];

  // Static statuses (from DB)
  const statuses: Status[] = [
    { id: 1, name: "Active" },
    { id: 2, name: "Inactive" },
    { id: 3, name: "Banned" },
  ];

  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    role_id: 3,
    status_id: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New User Data:", formData);
    alert("User Created (static, check console)");
    // Reset form
    setFormData({ name: "", email: "", phone: "", password: "", role_id: 3, status_id: 1 });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h4 className="mb-3">Create New User</h4>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              placeholder="Enter full name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              placeholder="Enter phone number"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
              placeholder="Enter password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select
              value={formData.role_id}
              onChange={e => setFormData({...formData, role_id: parseInt(e.target.value)})}
            >
              {roles.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={formData.status_id}
              onChange={e => setFormData({...formData, status_id: parseInt(e.target.value)})}
            >
              {statuses.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="primary">Create User</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateUserForm;
