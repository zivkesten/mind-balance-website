import React, { useState } from 'react';
import { sendEmail } from '../api/sendEmail';

export default function EmailTest() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTestEmail = async () => {
    setIsLoading(true);
    setStatus('Sending test email...');
    
    try {
      const result = await sendEmail({
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        program: 'Test Program',
        message: 'This is a test email from the contact form.'
      });

      if (result.success) {
        setStatus('✅ Test email sent successfully!');
      } else {
        setStatus(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setStatus(`❌ Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Test Email Functionality</h2>
      <button
        onClick={handleTestEmail}
        disabled={isLoading}
        className="w-full py-2 px-4 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Sending...' : 'Send Test Email'}
      </button>
      {status && (
        <div className="mt-4 p-4 rounded-lg bg-gray-100">
          <p className="text-center">{status}</p>
        </div>
      )}
    </div>
  );
} 