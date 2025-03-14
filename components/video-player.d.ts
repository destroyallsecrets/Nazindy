export interface VideoItem {
  id: string;
  title: string;
  date: string;
  url: string;
  embedUrl: string;
  description?: string;
  thumbnail?: string;
}

export interface VideoPlayerProps {
  videos: VideoItem[];
  showRelated?: boolean;
}

export default function VideoPlayer(props: VideoPlayerProps): JSX.Element;
