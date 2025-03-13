declare module '@/components/facebook-video-embed' {
  import { ReactElement } from 'react';
  
  interface FacebookVideoEmbedProps {
    videoUrl: string;
    width?: number | string;
    height?: number | string;
    showText?: boolean;
    allowFullscreen?: boolean;
    autoplay?: boolean;
    showCaptions?: boolean;
    lazy?: boolean;
    className?: string;
  }
  
  export default function FacebookVideoEmbed(props: FacebookVideoEmbedProps): ReactElement;
} 