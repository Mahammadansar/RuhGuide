import { NextRequest, NextResponse } from 'next/server'
import moodData from '@/data/mood_data.json'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name: moodName } = await params

  if (!moodName || typeof moodName !== 'string') {
    return NextResponse.json(
      { error: 'Mood name is required' },
      { status: 400 }
    )
  }

  const moodDataTyped = moodData as Record<string, any>
  const mood = moodDataTyped[moodName]

  if (!mood) {
    return NextResponse.json(
      { error: 'Mood not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(mood)
}

