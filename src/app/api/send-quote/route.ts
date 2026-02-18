import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface QuoteProduct {
  name: string
  sku: string
  quantity: number
}

interface QuoteRequest {
  name: string
  email: string
  phone: string
  company: string
  address: string
  message: string
  products: QuoteProduct[]
}

export async function POST(request: Request) {
  try {
    const body: QuoteRequest = await request.json()
    const { name, email, phone, company, address, message, products } = body

    // Validate required fields
    if (!name || !email || !phone || !address || !products?.length) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const recipientEmail = process.env.QUOTE_RECIPIENT_EMAIL
    if (!recipientEmail) {
      console.error('QUOTE_RECIPIENT_EMAIL is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 },
      )
    }

    // Build product rows for the email
    const productRows = products
      .map(
        (p) => `
        <tr>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e5e7eb;">${p.name}</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e5e7eb;">${p.sku || '—'}</td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e5e7eb; text-align: center;">${p.quantity}</td>
        </tr>`,
      )
      .join('')

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #4a8c3f; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request</h1>
        </div>

        <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb;">
          <h2 style="font-size: 16px; color: #4a8c3f; margin: 0 0 16px; text-transform: uppercase; letter-spacing: 0.5px;">Customer Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px; vertical-align: top;">Name:</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #4a8c3f;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Phone:</td>
              <td style="padding: 6px 0;"><a href="tel:${phone}" style="color: #4a8c3f;">${phone}</a></td>
            </tr>
            ${company ? `<tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Company:</td><td style="padding: 6px 0;">${company}</td></tr>` : ''}
            <tr>
              <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Address:</td>
              <td style="padding: 6px 0;">${address}</td>
            </tr>
            ${message ? `<tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Message:</td><td style="padding: 6px 0;">${message}</td></tr>` : ''}
          </table>
        </div>

        <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none;">
          <h2 style="font-size: 16px; color: #4a8c3f; margin: 0 0 16px; text-transform: uppercase; letter-spacing: 0.5px;">Requested Products</h2>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
            <thead>
              <tr style="background: #f3f4f6;">
                <th style="padding: 10px 14px; text-align: left; font-size: 13px; text-transform: uppercase; color: #6b7280;">Product</th>
                <th style="padding: 10px 14px; text-align: left; font-size: 13px; text-transform: uppercase; color: #6b7280;">SKU</th>
                <th style="padding: 10px 14px; text-align: center; font-size: 13px; text-transform: uppercase; color: #6b7280;">Qty</th>
              </tr>
            </thead>
            <tbody>
              ${productRows}
            </tbody>
          </table>
          <p style="margin-top: 12px; font-size: 13px; color: #6b7280;">Total items: ${products.reduce((sum, p) => sum + p.quantity, 0)}</p>
        </div>

        <div style="background: #f3f4f6; padding: 16px 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">
            This quote request was submitted from saheebco.com
          </p>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: 'Saheeb Trading Co <sales@sales.saheebco.com>',
      to: recipientEmail,
      replyTo: email,
      subject: `New Quote Request from ${name}${company ? ` — ${company}` : ''}`,
      html: htmlContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending quote email:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
