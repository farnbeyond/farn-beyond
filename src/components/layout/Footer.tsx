import { client } from '@/lib/contentful/client'
import Markdown from '@/components/ui/Markdown'

const getSection = async (section: string) => {
  const res = await client.getEntries({ content_type: 'section', 'fields.title': section })
  return res.items[0]
}

interface FooterProps {}

export default async function Footer() {
  const footer = await getSection('Footer')
  const footerText = footer.fields.text

  return (
    <footer className=" bg-foreground italic items-center rounded-t-xl shadow-lg px-6 sm:px-8 py-16">
      <div className="max-w-content w-content mx-auto">
        <Markdown
          className="typo-small text-center text-faded prose prose-a:text-faded prose-a:hover:text-white"
          markdown={footerText}
        />
      </div>
    </footer>
  )
}
