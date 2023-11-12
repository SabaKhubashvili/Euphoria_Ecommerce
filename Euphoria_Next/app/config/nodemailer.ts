import nodemailer from 'nodemailer'

const email = process.env.NEXT_PUBLIC_EMAIL;

export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: email,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    }
})


export const mailOptions = {
    from: email,
    to:"khubashvili.saba12@gmail.com"
}