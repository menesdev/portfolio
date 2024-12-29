import { Request, Response } from 'express';
import { Contact } from '../models/Contact.js';

export const submitContact = async (req: Request, res: Response) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting contact form' });
  }
};