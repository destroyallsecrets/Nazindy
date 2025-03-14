import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Create a rate limiter with Redis
const redis = Redis.fromEnv()
const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '1m'), // 10 requests per minute
  analytics: true,
})

// API routes that should be protected
const PROTECTED_ROUTES = ['/api/facebook-videos']

export async function middleware(request: NextRequest) {
  // Only rate limit API routes
  const path = request.nextUrl.pathname
  if (!PROTECTED_ROUTES.some(route => path.startsWith(route))) {
    return NextResponse.next()
  }

  const ip = request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for') ?? '127.0.0.1'
  const { success, limit, reset, remaining } = await limiter.limit(ip)
  
  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests', reset },
      { status: 429, headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
        'X-RateLimit-Reset': reset.toString(),
      }}
    )
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}