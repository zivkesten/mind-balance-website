export async function sendEmail(data) {
  const { name, email, phone, program, message } = data;

  const emailData = {
    subject: `New Contact Form Submission from ${name}`,
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
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const contentType = response.headers.get("content-type");
    if (!response.ok) {
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      } else {
        const text = await response.text();
        throw new Error('Server error: ' + text);
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
} 