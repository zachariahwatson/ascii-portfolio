interface Props {
  children?: React.ReactNode
  className?: string
  desc: string
  tags?: string
  website?: string
  websiteLabel?: string
  github?: string
  websiteWidth?: number
}

const ButtonLink = ({
  href,
  width,
  children,
}: {
  href: string
  width: number
  children: React.ReactNode
}) => {
  return (
    <a
      className="h-12 ascii-border ascii-shadow-bl pl-2 flex justify-center items-center relative pt-4"
      style={{ width: width }}
      href={href}
      target="_blank"
    >
      <p className="absolute ascii-text ascii-underline">{children}</p>
    </a>
  )
}

export default function WorkCard({
  children,
  className = '',
  desc,
  tags,
  website,
  websiteLabel,
  github,
  websiteWidth,
}: Props) {
  return (
    <div className={`ascii ascii-parent md:aspect-3/2 relative ${className}`}>
      <div className="flex flex-col justify-start h-full relative">
        <div className="ascii-text ascii-no-fill">{children}</div>
        <div className="px-4 mt-4 ascii-text ascii-no-fill flex-1">{desc}</div>
        <div className="px-4 mt-4 ascii-text ascii-no-fill">{tags}</div>
        <div className="flex justify-center md:space-x-10 space-x-8 justify-self-end pb-9 mt-4">
          {website && (
            <ButtonLink
              href={website}
              width={websiteWidth ? websiteWidth : 0}
            >{`${websiteLabel ? websiteLabel : 'website'} ↲`}</ButtonLink>
          )}
          {github && (
            <ButtonLink width={96} href={github}>
              github ↲
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  )
}
