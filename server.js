const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for development
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle API requests
app.post('/api/send-email', async (req, res) => {
  console.log('Received email request:', req.body);
  
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not set');
    return res.status(500).json({ 
      success: false, 
      error: 'Server configuration error: SendGrid API key is missing' 
    });
  }
  if (!process.env.RECIPIENT_EMAIL) {
    console.error('RECIPIENT_EMAIL is not set');
    return res.status(500).json({ 
      success: false, 
      error: 'Server configuration error: Recipient email is missing' 
    });
  }

  // Add the to field here
  const emailData = {
    personalizations: [
      {
        to: [{ email: process.env.RECIPIENT_EMAIL }],
        subject: req.body.subject || 'New Contact Form Submission'
      }
    ],
    from: { email: 'zivkesten@gmail.com' },
    content: req.body.content
  };

  console.log('Constructed emailData:', JSON.stringify(emailData, null, 2));

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const responseText = await response.text();
    let responseData;
    try {
      responseData = responseText ? JSON.parse(responseText) : {};
    } catch (e) {
      responseData = { raw: responseText };
    }

    if (!response.ok) {
      console.error('SendGrid API error:', responseData);
      throw new Error(responseData.errors?.[0]?.message || responseData.raw || 'Failed to send email');
    }

    console.log('Email sent successfully');
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Internal server error'
    });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('SendGrid API Key present:', !!process.env.SENDGRID_API_KEY);
}); 