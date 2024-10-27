import nodemailer from "nodemailer";
// reader is the users email
// tokenID is the verification token stored in the database
// userID is the users mongodb id
export const sender = async (reader, tokenID) => {
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
      subject: "Weblocker Verification OTP",
      text: "This is your Email Verification OTP for Login to Web-Locker . This OTP is Valid only for 1 Hour.",
      html: `<div>
              <h1> Web-Locker Verification Code.</h1>
              <p> Only Valid for 1 Hour.</p>
              <h1>OTP :${tokenID} </h1>
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

