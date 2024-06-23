import express, { Request, Response } from 'express';
import { EmailTemplate } from '../../components/email-template/email-template';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const resend = new Resend(process.env.RESEND_API_KEY as string);

app.use(express.json());

app.post('/api/send-email', async (res: Response) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['jules.drevon@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
