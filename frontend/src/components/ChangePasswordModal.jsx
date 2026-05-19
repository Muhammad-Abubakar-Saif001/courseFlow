import React, { useState } from 'react';
import { X } from 'lucide-react';
import { apiRequest } from '../api/axiosConfig';

export function ChangePasswordModal({ onClose, token, showToast, Field }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      showToast('Passwords do not match.', 'error');
      return;
    }
    if (newPassword.length < 6) {
      showToast('Password must be at least 6 characters.', 'error');
      return;
    }

    try {
      setLoading(true);
      await apiRequest('/auth/change-password', {
        method: 'POST',
        body: { newPassword },
        token,
      });
      showToast('Password changed successfully.', 'success');
      onClose();
    } catch (error) {
      showToast(error.message, 'error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <form className="modal payment-modal" onSubmit={handleSubmit}>
        <div className="modal-header">
          <div>
            <p className="eyebrow">Security</p>
            <h2>Change Password</h2>
          </div>
          <button type="button" className="icon-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div style={{ display: 'grid', gap: '14px' }}>
          <Field 
            label="New Password" 
            type="password" 
            value={newPassword} 
            onChange={setNewPassword} 
            required 
          />
          <Field 
            label="Confirm Password" 
            type="password" 
            value={confirmPassword} 
            onChange={setConfirmPassword} 
            required 
          />
        </div>
        <div className="modal-actions" style={{ marginTop: '20px' }}>
          <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? 'Saving...' : 'Update Password'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePasswordModal;
