import nodemailer from 'nodemailer';

export const sendEmail = async ({ to, subject, text }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or your email service provider
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    return transporter.sendMail(mailOptions);
};

