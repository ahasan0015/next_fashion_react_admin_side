import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

interface Role { id: number; name: string; }
interface Status { id: number; name: string; }

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  role_id: number;
  status_id: number;
  created_at: string;
}

interface Props {
  userId: number; // ID of the user to edit
}

const EditUser: React.FC<Props> = ({ userId }) => {
  // Static roles (DB)
  const roles: Role[] = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Manager" },
    { id: 3, name: "Customer" },
  ];

  // Static statuses (DB)
  const statuses: Status[] = [
    { id: 1, name: "Active" },
    { id: 2, name: "Inactive" },
    { id: 3, name: "Banned" },
  ];

  // Static users (pretend this comes from API)
  const staticUsers: User[] = [
    { id: 1, name: "Admin User", email: "admin@example.com", phone: "0123456789", password: "*****", role_id: 1, status_id: 1, created_at: "2026-02-04" },
    { id: 2, name: "John Doe", email: "john@example.com", phone: "0123456789", password: "*****", role_id: 3, status_id: 1, created_at: "2026-02-03" },
  ];

  // Find the user to edit
  const userToEdit = staticUsers.find(u => u.id === userId);

  const [formData, setFormData] = useState<User>({
    id: 0, name: "", email: "", phone: "", password: "", role_id: 3, status_id: 1, created_at: ""
  });

  // Pre-fill form with user data
  useEffect(() => {
    if (userToEdit) setFormData(userToEdit);
  }, [userToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated User Data:", formData);
    alert("User updated (static, check console)");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h4 className="mb-3">Edit User</h4>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
            />
            <Form.Text className="text-muted">Leave blank to keep existing password</Form.Text>
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

          <Button type="submit" variant="primary">Update User</Button>
        </Form>
      </div>
    </div>
  );
};

export default EditUser;
