import ContentfulImage from '@/components/ContentfulImage'
import Markdown from '@/components/ui/Markdown'
import { getPageData, getSection } from '@/lib/contentful/service'

export default async function Home() {
  const page = await getPageData('Landing Page')
  const membersSection = await getSection('Members')

  return (
    <div className="flex flex-col gap-16">
      {page.fields.sections?.map((section: any) => {
        const { title, image, text, variant } = section.fields
        const { url, details } = image.fields.file

        return (
          <section key={section.sys.id}>
            <h2 className="typo-h2">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="typo-p indent-4">
                <Markdown
                  className="prose-a:text-secondary prose-a:hover:text-secondary-hover prose-a:underline prose-p:my-2"
                  markdown={text}
                />
              </div>
              <ContentfulImage
                src={url}
                height={details.image.height}
                width={details.image.width}
                alt={title}
                className="object-cover rounded-lg shadow-lg w-full"
              />
            </div>
          </section>
        )
      })}
      <section className="" key={membersSection.sys.id}>
        <h2 className="typo-h2">{membersSection.fields.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {membersSection.fields.list.map((member: any) => {
            const { name, picture, role } = member.fields
            const { url, details } = picture.fields.file
            return (
              <div className="flex flex-col" key={member.sys.id}>
                <ContentfulImage
                  src={url}
                  height={details.image.height}
                  width={details.image.width}
                  alt={name}
                  className="object-cover rounded-lg shadow-lg w-full"
                />
                <span className="typo-h3">{name}</span>
                <small className="typo-small text-muted/80">{role}</small>
              </div>
            )
          })}
          <p className="typo-p indent-4">{membersSection.fields.text}</p>
        </div>
      </section>
    </div>
  )
}
