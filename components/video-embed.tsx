interface VideoEmbedProps {
  embedUrl: string
  title: string
  width?: number
  height?: number
}

export default function VideoEmbed({ embedUrl, title, width = 560, height = 314 }: VideoEmbedProps) {
  return (
    <div className="video-embed-container relative w-full pt-[56.25%]">
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title={title}
      />
    </div>
  )
}
