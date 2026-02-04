import { useState } from "react";

const Settings = () => {
  // Static state for form fields
  const [siteName, setSiteName] = useState("Next Fashion Store");
  const [siteEmail, setSiteEmail] = useState("admin@nextfashion.com");
  const [phone, setPhone] = useState("+880123456789");
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("UTC+0");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveSettings = () => {
    alert("Settings saved (static demo)");
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    alert("Password changed (static demo)");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Admin Settings</h4>

      <div className="card shadow mb-4">
        <div className="card-header">
          <h5>General Settings</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Site Name</label>
            <input type="text" className="form-control" value={siteName} onChange={e => setSiteName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={siteEmail} onChange={e => setSiteEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Currency</label>
            <select className="form-select" value={currency} onChange={e => setCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BDT">BDT</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Language</label>
            <select className="form-select" value={language} onChange={e => setLanguage(e.target.value)}>
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Timezone</label>
            <select className="form-select" value={timezone} onChange={e => setTimezone(e.target.value)}>
              <option value="UTC+0">UTC+0</option>
              <option value="UTC+6">UTC+6 (Bangladesh)</option>
              <option value="UTC-5">UTC-5</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={handleSaveSettings}>Save Settings</button>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-header">
          <h5>Change Password</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Current Password</label>
            <input type="password" className="form-control" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input type="password" className="form-control" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm New Password</label>
            <input type="password" className="form-control" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </div>
          <button className="btn btn-warning" onClick={handleChangePassword}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
