interface Props {
  children?: React.ReactNode
  className?: string
  desc: string
  tags?: string
  website?: string
  websiteLabel?: string
  github?: string
}

const ButtonLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <a
      className="w-36 h-8 ascii-border ascii-shadow-bl pl-2 flex justify-center items-center relative pt-4"
      href={href}
      target="_blank"
    >
      <p className="absolute ascii-text whitespace-pre ascii-underline">
        {children}
      </p>
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
}: Props) {
  return (
    <div className={`ascii md:aspect-3/2 relative ${className}`}>
      <div className="flex flex-col justify-start h-full relative">
        <div className="ascii-text ascii-no-fill">{children}</div>
        <p className="px-4 pt-4 ascii-text ascii-no-fill flex-1 whitespace-pre-wrap">
          {desc}
        </p>
        <p className="px-4 pt-4 pb-4 ascii-text ascii-no-fill  whitespace-pre-wrap">
          {tags}
        </p>
        <div className="flex justify-center md:space-x-10 space-x-8 justify-self-end pb-12">
          {website && (
            <ButtonLink
              href={website}
            >{`${websiteLabel ? websiteLabel : 'website'} ↲`}</ButtonLink>
          )}
          {github && <ButtonLink href={github}>github ↲</ButtonLink>}
        </div>
      </div>
    </div>
  )
}
