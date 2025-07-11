import { listingData } from '../../../lib/listingData'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = parseInt(searchParams.get('limit') || '5', 10)

  const start = (page - 1) * limit
  const end = start + limit

  return NextResponse.json({
    listings: listingData.slice(start, end),
    total: listingData.length
  })
}