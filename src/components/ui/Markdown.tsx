import { remark } from 'remark'
import html from 'remark-html'

interface MarkdownProps {
  markdown: any
  className?: string
  as?: React.ReactNode
}

export default async function Markdown({ markdown, className, as }: MarkdownProps) {
  const processedContent = await remark().use(html).process(markdown)
  const contentHtml = processedContent.toString()

  return <div className={className} dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
}
