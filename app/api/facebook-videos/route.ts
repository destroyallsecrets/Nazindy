import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

// Define types
export type VideoMetadata = {
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  videoId: string;
  url: string;
};

// Function to extract video ID from a Facebook video URL
const extractVideoIdFromUrl = (url: string): string | null => {
  const patterns = [
    /facebook\.com\/.*\/videos\/(\d+)/i,
    /facebook\.com\/watch\/.*\/(\d+)/i,
    /facebook\.com\/watch\?v=(\d+)/i,
    /fb\.watch\/([^\/]+)/i,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

// Function to scrape metadata from a Facebook video page
async function scrapeVideoMetadata(videoUrl: string): Promise<VideoMetadata | null> {
  try {
    // Add user agent to mimic a browser
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
    };

    const response = await axios.get(videoUrl, { headers });
    const $ = cheerio.load(response.data);
    
    // Try to extract metadata - Facebook structure is complex and changes often
    // These selectors might need updates over time
    const title = $('meta[property="og:title"]').attr('content') || 
                 $('._52jc._5qc4._78cz._7cdk').text() || 
                 'Untitled Facebook Video';
                 
    const description = $('meta[property="og:description"]').attr('content') || 
                       $('._5pbx').text() || 
                       '';
                       
    const thumbnail = $('meta[property="og:image"]').attr('content') || 
                     '';
                     
    const date = $('._5ptz').attr('title') || 
                $('._42ft').attr('data-tooltip-content') || 
                new Date().toLocaleDateString();
                
    const videoId = extractVideoIdFromUrl(videoUrl) || '';
    
    return {
      title,
      description,
      thumbnail,
      date,
      videoId,
      url: videoUrl,
    };
  } catch (error) {
    console.error('Error scraping Facebook video:', error);
    return null;
  }
}

// API handler
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;
    
    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }
    
    const metadata = await scrapeVideoMetadata(url);
    
    if (!metadata) {
      return NextResponse.json(
        { error: 'Failed to scrape video metadata' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ video: metadata });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 