const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // Change this as per your requirement

// MongoDB Connection URI
const MONGO_URI = 'mongodb://localhost:27017/myDatabase'; // Example for local MongoDB instance

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error('MongoDB connection error:', err));


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error('MongoDB connection error:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

// POST endpoint to send message
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save the message to MongoDB
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();

    // Send email notification using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sweswesweris@gmail.com', // Replace with your email
        pass:  'ajxl vqjh vgsr wonc',   // Replace with your app password
      },
    });

    const mailOptions = {
      from: 'sweswesweris@gmail.com', // The sender email
      to: 'swethap.22it@kongu.edu', // Recipient email
      subject: `New Message from ${name} - ${subject}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending error:', error);
        return res.status(500).send('Error sending email');
      }
      console.log('Email sent:', info.response);
      res.status(200).send('Message sent and saved successfully');
    });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).send('Error saving message');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
