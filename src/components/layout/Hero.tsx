import Image from 'next/image'
import Link from 'next/link'
import ContentfulImage from '../ContentfulImage'
import { buttonVariants } from '../ui/Button'
import { cn } from '@/lib/utils'

interface HeroProps {
  siteData: any
}

export default function Hero({ siteData }: HeroProps) {
  //console.log('⭐ CTAs:', siteData.fields.callsToAction)

  const { heroTitle, logo, heroPicture, callsToAction, heroDescription } = siteData.fields
  const logoUrl = logo.fields.file.url
  const heroUrl = heroPicture.fields.file.url

  return (
    <div className=" bg-foreground text-background relative z-0 shadow-lg rounded-b-3xl">
      <ContentfulImage
        src={heroUrl}
        height={siteData.fields.heroPicture.fields.file.details.image.height}
        width={siteData.fields.heroPicture.fields.file.details.image.width}
        alt={siteData.fields.title}
        className="object-cover h-full w-full absolute top-0 object-right opacity-50 -z-10 rounded-b-3xl"
      />
      <div className="flex flex-col max-w-content w-content mx-auto min-h-[40vh] px-6 sm:px-8  ">
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
          <div id="nav-items" className="flex gap-4">
            <Link className="hover:underline" href="/">
              About
            </Link>
            <Link className="hover:underline" href="/">
              Contact
            </Link>
          </div>
        </nav>
        <div className="flex flex-grow flex-col justify-center pt-12 pb-14 gap-3 items-center sm:items-start">
          <h1 className="typo-title text-center sm:text-left">{heroTitle}</h1>
          {heroDescription && <p className="typo-p text-faded italic">{heroDescription}</p>}
          <div className="flex gap-4 flex-col sm:flex-row">
            {callsToAction.map((cta: any) => {
              return (
                <a
                  key={cta.sys.id}
                  href={cta.fields.url}
                  target="_blank"
                  className={cn(
                    buttonVariants({
                      variant: cta.fields.variant,
                      size: cta.fields.size,
                      animation: cta.fields.animation,
                    }),
                    ''
                  )}
                >
                  {cta.fields.text}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
