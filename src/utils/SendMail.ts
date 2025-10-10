import { sendEmail } from "@/actions/sendEmail";

export const sendMail = async ({ email , token }: { email: string , token: string }) => {
 const domain = `http://localhost:3000/verify?token=${token}`
  await sendEmail({
    email,
    subject: "SecondGo",
    msg: `
     <div style="font-family: Arial, sans-serif; padding: 20px;">
       <h2 style="color: #2563eb;">Welcome to SecondGo 🎉</h2>
       <p>Hi Ali, how are you? We're excited to invite you to become a seller on SecondGo!</p>
       <p>To verify your seller account, please click the button below:</p>
       <a 
         href="${domain}"
         style="
           display: inline-block;
           padding: 10px 20px;
           background: linear-gradient(to right, #4f46e5, #06b6d4);
           color: white;
           text-decoration: none;
           border-radius: 8px;
           margin-top: 10px;
         "
       >
         Verify Your Account
       </a>
       <p style="margin-top: 20px; color: #6b7280;">
         If you didn’t request this, please ignore this email.
       </p>
     </div>
   `,
  });
};
