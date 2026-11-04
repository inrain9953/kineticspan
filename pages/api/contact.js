import mongoose from 'mongoose'
import { KineticProduct } from './lib/product'
import nodemailer from 'nodemailer'

export default async function signup (req, res) {
  const username = process.env.kineticmail
  const password = process.env.kineticpassword
  const sub = 'Leads from website - KineticSpan'
  const GoogleAds = 'This is not from Google Ads'

  try {
    if (req.method === 'POST') {
      const { name, email, mobile, message } = req.body

      await mongoose.connect(process.env.url)
      let product = new KineticProduct({
        name: name,
        email: email,
        mobile: mobile,
        message: message
      })
      const result = await product.save()

      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: username,
            pass: password
          }
        })

        const mailOptions = {
          from: username,
          to: process.env.receivingmail,
          subject: sub,
          text: `Submission: ${GoogleAds} \n\n Name: ${name} \n\n Email: ${email} \n\n Mobile No: ${mobile} \n\n Message: ${message}`
        }

        const info = transporter.sendMail(mailOptions)
        console.log('Email sent successfully')
      } catch (err) {
        console.log('Connection not build')
      }

      res.send('Our Team will get back to you soon...')
    } else {
      res.setHeader('Allow', ['POST'])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
