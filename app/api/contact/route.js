import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, phone, email, country, message } = await request.json();

  // Nodemailer transporter ayarları
  const transporter = nodemailer.createTransport({
    service: 'gmail', // veya başka bir servis
    auth: {
      user: process.env.EMAIL_USER, // Gmail hesabınız
      pass: process.env.EMAIL_PASS  // Gmail app password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@travelvize.com', // Alıcı e-posta info@travelvize.com
    subject: `Yeni İletişim Formu | travel-vize.com - ${name}`,
    html: `
      <h3>Yeni İletişim Formu Mesajı</h3>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Ülke:</strong> ${country}</p>
      <p><strong>Mesaj:</strong> ${message}</p>
    `
  };


  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}