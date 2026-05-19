import React from 'react';
import { X } from 'lucide-react';

export function PaymentModal({ course, onClose, onConfirm }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal payment-modal">
        <div className="modal-header">
          <div>
            <p className="eyebrow">Payment Required</p>
            <h2>{course.title}</h2>
          </div>
          <button type="button" className="icon-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="payment-details">
          <p className="payment-intro">Please send <strong>PKR {course.price}</strong> to the following account:</p>
          <ul className="payment-list">
            <li><strong>Account Title:</strong> Muhammad Abubakar Saif</li>
            <li><strong>Payment Account Number:</strong> 03306664425</li>
            <li><strong>Pay through:</strong> Nayapay</li>
          </ul>
          <p className="payment-note">
            After you confirm your payment, the approval request will be sent to the admin.
            The admin will approve the request within 24 hours.
          </p>
        </div>
        <div className="modal-actions">
          <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
          <button type="button" className="primary-btn" onClick={onConfirm}>Confirm Payment</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
