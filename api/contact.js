export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, company, email, message } = req.body || {};

    if (!name || !message) {
      return res.status(400).json({ ok: false, error: 'Name and message are required.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'luandarodrigues30@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';

    if (!apiKey) {
      return res.status(500).json({
        ok: false,
        error: 'Missing RESEND_API_KEY environment variable.'
      });
    }

    const safeName = String(name).slice(0, 120);
    const safeCompany = company ? String(company).slice(0, 160) : 'Not informed';
    const safeEmail = email ? String(email).slice(0, 160) : 'Not informed';
    const safeMessage = String(message).slice(0, 4000);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: safeEmail !== 'Not informed' ? safeEmail : undefined,
        subject: `Portfolio contact — ${safeName}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
            <h2>New portfolio contact</h2>
            <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
            <p><strong>Company:</strong> ${escapeHtml(safeCompany)}</p>
            <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(safeMessage).replace(/\n/g, '<br>')}</p>
          </div>
        `,
        text: `Name: ${safeName}\nCompany: ${safeCompany}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(502).json({ ok: false, error: errorText });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message || 'Unexpected error.' });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
