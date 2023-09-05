import ContentfulImage from '@/components/ContentfulImage'
import { client } from '@/lib/contentful/client'

export const getPageData = async (page: string) => {
  const res = await client.getEntries({ content_type: 'page', 'fields.title': page })
  return res.items[0]
}

const getSection = async (section: string) => {
  const res = await client.getEntries({ content_type: 'section', 'fields.title': section })
  return res.items[0]
}

export default async function Home() {
  const page = await getPageData('Landing Page')
  const membersSection = await getSection('Members')
  //console.log(membersSection.fields.list)

  return (
    <div className="flex flex-col gap-16">
      {page.fields.sections?.map((section: any) => {
        const { title, image, text, variant } = section.fields
        const { url, details } = image.fields.file

        return (
          <section key={section.sys.id}>
            <h2 className="typo-h2">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <p className="typo-p indent-4">{text}</p>
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
                <small className="typo-small">{role}</small>
              </div>
            )
          })}
          <p className="typo-p indent-4">{membersSection.fields.text}</p>
        </div>
      </section>
    </div>
  )
}
