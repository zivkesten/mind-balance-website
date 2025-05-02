export async function sendEmail(data) {
  const { name, email, phone, program, message } = data;

  const emailData = {
    personalizations: [
      {
        to: [{ email: process.env.RECIPIENT_EMAIL }],
        subject: `New Contact Form Submission from ${name}`
      }
    ],
    from: { email: 'noreply@michalrapoport.com' },
    content: [
      {
        type: 'text/plain',
        value: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Program: ${program}
          Message: ${message}
        `
      },
      {
        type: 'text/html',
        value: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Program:</strong> ${program}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      }
    ]
  };

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0]?.message || 'Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
} 