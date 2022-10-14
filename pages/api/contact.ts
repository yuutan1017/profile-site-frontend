const nodemailer = require("nodemailer");

export default function sendMail(
  req: { body: { name: any; message: string; email: string } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      end: { (): void; new (): any };
    };
  }
) {
  const transporter = nodemailer.createTransport({
    host: process.env.USER,
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.USER,
      pass: process.env.PASSWORD,
      clientId: process.env.CRIENT_ID,
      clientSecret: process.env.CRIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  const toHostMailData = {
    from: `${req.body.name}様より`,
    to: process.env.USER,
    subject: `【お問い合わせ】${req.body.name} 様より`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <p><b> 氏名 : ${req.body.name}</b></p>
      <p><b> メールアドレス : ${req.body.email}</b></p>
      <p><b>${req.body.message}</b></p>
    `,
  };

  transporter.sendMail(toHostMailData, (error: any, response: any) => {
    console.log(error || response);
    res.status(200).end();
  });
}
