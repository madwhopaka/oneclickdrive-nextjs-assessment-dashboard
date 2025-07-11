import { NextResponse, NextRequest } from 'next/server';
import { listingData } from '../../../../lib/listingData'


type Context =  {
  params: {
    id: string;
  }

}

export async function PATCH(req: NextRequest, context: Context ) {
  const id = context.params.id ;
  const body = await req.json()

  const index = listingData.findIndex(item => item?.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
  }

  const updated = {
    ...listingData[index],
    ...body,
    ...(body.status !== 'pending' && {
      reviewedBy: 'admin@company.com',
      reviewedAt: new Date().toISOString()
    })
  }

  listingData[index] = updated

  return NextResponse.json({ message: 'Updated', listing: updated })
}