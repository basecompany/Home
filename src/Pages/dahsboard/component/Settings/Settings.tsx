// src/component/Settings/Settings.tsx

import { useState } from 'react';
import { CreditCard, User as UserIcon } from 'lucide-react';
import './Settings.css';

type SettingsProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Settings({
                                     isOpen,
                                     onClose
                                 }: SettingsProps) {
    const [activeTab, setActiveTab] = useState<'billing' | 'user'>('billing');
    const [cardNumber, setCardNumber] = useState('');
    const [invoices] = useState([
        { id: 'INV-001', date: '2025-07-01', amount: '$120.00' },
        { id: 'INV-002', date: '2025-08-01', amount: '$150.00' }
    ]);
    const [userInfo, setUserInfo] = useState({
        name: 'Ilyass Baba',
        email: 'ilyass@example.com'
    });

    if (!isOpen) return null;

    const handleAddCard = () => {
        if (!cardNumber.trim()) return;
        alert(`Card ${cardNumber} added`);
        setCardNumber('');
    };

    const handleSaveUser = () => {
        alert(`Saved: ${userInfo.name} / ${userInfo.email}`);
    };

    return (
        <div
            className="
                settings-overlay
                animate__animated
                animate__fadeIn
                animate__faster
              "
            onClick={onClose} >
            <div
                className="settings-content"
                onClick={e => e.stopPropagation()}
            >
                <div className="settings-tabs">
                    <button
                        className={activeTab === 'billing' ? 'tab active' : 'tab'}
                        onClick={() => setActiveTab('billing')}
                    >
                        <CreditCard size={16} /> Billing
                    </button>
                    <button
                        className={activeTab === 'user' ? 'tab active' : 'tab'}
                        onClick={() => setActiveTab('user')}
                    >
                        <UserIcon size={16} /> User Info
                    </button>
                </div>

                {activeTab === 'billing' && (
                    <div className="pane">
                        <h2>Billing</h2>
                        <div className="form-group">
                            <label>New Card Number</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={e => setCardNumber(e.target.value)}
                            />
                            <button onClick={handleAddCard}>Add Card</button>
                        </div>
                        <h3>Your Invoices</h3>
                        <ul className="invoices">
                            {invoices.map(inv => (
                                <li key={inv.id}>
                                    {inv.id} — {inv.date} — {inv.amount}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === 'user' && (
                    <div className="pane">
                        <h2>User Information</h2>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                value={userInfo.name}
                                onChange={e =>
                                    setUserInfo({ ...userInfo, name: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={userInfo.email}
                                onChange={e =>
                                    setUserInfo({ ...userInfo, email: e.target.value })
                                }
                            />
                        </div>
                        <button onClick={handleSaveUser}>Save</button>
                    </div>
                )}
            </div>
        </div>
    );
}
