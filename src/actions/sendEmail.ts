"use server"

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
 host: "sandbox.smtp.mailtrap.io",
 port: 2525,
 secure: false,
 auth: {
   user: process.env.MAILTRAP_USERNAME,
   pass: process.env.MAILTRAP_PASSWORD,
 },
})
interface IEmail {
 email: string,
 subject: string,
 msg: string,
}
//TODO : use google and SMTP  
export const sendEmail = async ({ email, subject, msg }: IEmail) => {
 if (!email || !subject || !msg) throw new Error("Missing fields");
 await transporter.sendMail({
  from:process.env.FROM_EMAIL,
  to: email,
  subject,
  html: `<p>${msg}</p>`,
 })
 return true
}