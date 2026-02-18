import { cookies } from 'next/headers'

const SESSION_COOKIE = 'admin_session'
const SESSION_VALUE = 'authenticated'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { username, password } = body

    const validUser = process.env.ADMIN_USERNAME
    const validPass = process.env.ADMIN_PASSWORD

    if (!validUser || !validPass) {
      return Response.json(
        { error: 'Admin credentials not configured' },
        { status: 500 },
      )
    }

    if (username !== validUser || password !== validPass) {
      return Response.json(
        { error: 'Invalid username or password' },
        { status: 401 },
      )
    }

    // Set httpOnly cookie
    const cookieStore = await cookies()
    cookieStore.set(SESSION_COOKIE, SESSION_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    })

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }
}

export async function DELETE() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
  return Response.json({ success: true })
}

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  return Response.json({ authenticated: session?.value === SESSION_VALUE })
}
