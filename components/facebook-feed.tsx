import FacebookEmbed from "./facebook-embed"

export default function FacebookFeed({ className = "" }) {
  return (
    <FacebookEmbed
      url="https://www.facebook.com/NazareneMissionaryBaptistChurch"
      width={500}
      height={700}
      tabs="timeline,events"
      className={className}
    />
  )
}

