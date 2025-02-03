import Markdown from '@/components/ui/Markdown'
import { getSection } from '@/lib/contentful/service'

interface FooterProps {}

export default async function Footer() {
  const footer = await getSection('Footer')
  const footerText = footer.fields.text

  return (
    <footer className="flex flex-col bg-foreground italic items-center rounded-t-xl shadow-lg px-6 sm:px-8 py-16">
      <div className="flex flex-col max-w-content w-content mx-auto">
        <Markdown
          className="typo-small text-center text-faded prose prose-a:text-faded prose-a:hover:text-white"
          markdown={footerText}
        />
      </div>
    </footer>
  )
}
