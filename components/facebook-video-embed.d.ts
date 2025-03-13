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
  }
  
  export default function FacebookVideoEmbed(props: FacebookVideoEmbedProps): ReactElement;
} 