// Gửi email cho form Liên hệ / Đăng ký bảo hành / Đăng ký nhận tin qua Gmail SMTP.
// Dùng chung cho server.js (Node) — xem .env.example để biết cách cấu hình.

require('dotenv').config();
const nodemailer = require('nodemailer');

const MAIL_TO = process.env.MAIL_TO || 'nhatquanjsc18@gmail.com';

let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) return null;
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
  return transporter;
}

const FORM_LABELS = {
  'lien-he': 'Liên hệ tư vấn',
  'dang-ky-bao-hanh': 'Đăng ký bảo hành',
  newsletter: 'Đăng ký nhận tin',
};

const FIELD_LABELS = {
  name: 'Họ và tên',
  phone: 'Số điện thoại',
  email: 'Email',
  company: 'Công ty / Đơn vị',
  product: 'Sản phẩm quan tâm',
  message: 'Nội dung',
  model: 'Model máy / Mã sản phẩm',
  serial: 'Số serial',
  purchaseDate: 'Ngày mua hàng',
  store: 'Nơi mua hàng',
};

function buildEmail(formType, fields) {
  const label = FORM_LABELS[formType] || 'Form website';
  const rows = Object.keys(fields)
    .filter((key) => key !== 'website' && key !== 'formType' && fields[key])
    .map((key) => {
      const fieldLabel = FIELD_LABELS[key] || key;
      return `${fieldLabel}: ${fields[key]}`;
    });

  return {
    subject: `[Mirka VN] ${label}${fields.name ? ' - ' + fields.name : ''}`,
    text: rows.join('\n'),
    html: `<p><strong>${label}</strong> từ website Mirka Việt Nam:</p><ul>${rows
      .map((r) => `<li>${r}</li>`)
      .join('')}</ul>`,
  };
}

/**
 * Gửi email thông báo cho một lượt submit form.
 * @param {string} formType 'lien-he' | 'dang-ky-bao-hanh' | 'newsletter'
 * @param {Object} fields dữ liệu form (đã lọc field honeypot)
 * @returns {Promise<{ok: boolean, error?: string}>}
 */
async function sendFormEmail(formType, fields) {
  const t = getTransporter();
  if (!t) {
    return { ok: false, error: 'not_configured' };
  }
  const { subject, text, html } = buildEmail(formType, fields);
  try {
    await t.sendMail({
      from: `"Website Mirka Việt Nam" <${process.env.GMAIL_USER}>`,
      to: MAIL_TO,
      replyTo: fields.email || undefined,
      subject,
      text,
      html,
    });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

module.exports = { sendFormEmail };
