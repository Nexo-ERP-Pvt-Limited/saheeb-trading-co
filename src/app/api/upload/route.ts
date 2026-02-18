import cloudinary from '../../../../lib/cloudinary'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return Response.json({ error: 'No file provided' }, { status: 400 })
    }

    // Convert file to buffer then to base64 data URI
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64 = buffer.toString('base64')
    const dataUri = `data:${file.type};base64,${base64}`

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: 'saheeb-trading-co',
      resource_type: 'image',
    })

    return Response.json({
      url: result.secure_url,
      public_id: result.public_id,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return Response.json({ error: 'Upload failed' }, { status: 500 })
  }
}
