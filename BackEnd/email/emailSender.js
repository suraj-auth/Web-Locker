import nodemailer from "nodemailer";
// reader is the users email
// tokenID is the verification token stored in the database
// userID is the users mongodb id
export const sender = async (reader, tokenID, userID) => {
  try {
    // Creating the Sender of Email
    const auth = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    // Creating the Reciever and Email Details
    const reciever = {
      from: process.env.GMAIL,
      to: reader,
      subject: "Weblocker Verification",
      text: "please login to verify your account",
      html: `<div>
              <h1>Click the button for Verification</h1>
              <a href="https://suraj-web-locker.vercel.app/verify?token=${tokenID}&userId=${userID}">click me</a>
            </div>`,
    };
    // Sending Email
    const mailResponse = await auth.sendMail(reciever);
    console.log("mailsended successfully");
    return true;
  } catch (error) {
    console.log("error in sending email " + error);
    return false;
  }
};
