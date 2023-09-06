import { remark } from 'remark'
import html from 'remark-html'

interface MarkdownProps {
  markdown: any
  className?: string
}

export default async function Markdown({ markdown, className }: MarkdownProps) {
  const processedContent = await remark().use(html).process(markdown)
  const contentHtml = processedContent.toString()

  return <span className={className} dangerouslySetInnerHTML={{ __html: contentHtml }}></span>
}
