declare module '@/components/facebook-video-embed' {
  import { ReactElement } from 'react';
  
  interface FacebookVideoEmbedProps {
    videoUrl: string;
    width?: number | string;
    showText?: boolean;
    title?: string;
    description?: string;
    pageUrl?: string;
    pageName?: string;
    postDate?: string;
    allowFullscreen?: boolean;
    autoplay?: boolean;
    showCaptions?: boolean;
    lazy?: boolean;
    aspect?: "auto" | "square" | "vertical" | "horizontal";
    videoInfo?: boolean;
    onLoad?: () => void;
    onError?: (error: any) => void;
  }
  
  export default function FacebookVideoEmbed(props: FacebookVideoEmbedProps): ReactElement;
} 