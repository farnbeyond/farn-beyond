import { FC } from 'react'
import ContentfulImage from '../ContentfulImage'
import Link from 'next/link'

interface NavbarProps {
  siteData: any
}

export const Navbar: FC<NavbarProps> = ({ siteData }) => {
  const { logo } = siteData.fields
  const logoUrl = logo.fields.file.url

  return (
    <nav className="flex justify-between py-6 align-middle flex-col sm:flex-row gap-4">
      <Link href="/">
        <ContentfulImage
          src={logoUrl}
          height={siteData.fields.logo.fields.file.details.image.height}
          width={siteData.fields.logo.fields.file.details.image.width}
          alt={siteData.fields.title}
          className="object-contain h-7 object-left opacity-80 hover:opacity-100 transition-all"
        />
      </Link>
      {/* <div id="nav-items" className="flex gap-4">
        <Link className="hover:underline" href="/">
          About
        </Link>
        <Link className="hover:underline" href="/">
          Contact
        </Link>
      </div> */}
    </nav>
  )
}
