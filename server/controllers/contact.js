export const submitContact = (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically send an email or store the contact form submission
  console.log('Contact form submission:', { name, email, message });
  
  res.status(200).json({ message: 'Message sent successfully' });
};