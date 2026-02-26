interface Props {
  children?: React.ReactNode
  className?: string
  desc: string
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
      className="w-36 h-8 ascii ascii-shadow-bl pl-2 flex justify-center items-center"
      href={href}
      target="_blank"
    >
      <p>{children}</p>
    </a>
  )
}

export default function WorkCard({
  children,
  className = '',
  desc,
  website,
  websiteLabel,
  github,
}: Props) {
  return (
    <div className={`border ascii aspect-3/2 relative ${className}`}>
      <div className="grid grid-cols-1 grid-rows-9 h-full">
        <div className="row-span-2">{children}</div>
        <p className="pl-4 pt-4 row-span-5">{desc}</p>
        <div className="flex justify-center space-x-10 pl-2">
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
