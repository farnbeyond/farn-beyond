import { client } from '@/lib/contentful/client'

export const getSiteData = async () => {
  const res = await client.getEntries({ content_type: 'site', 'fields.title': "Far'n Beyond" })
  return res.items[0]
}

export const getSection = async (section: string) => {
  const res = await client.getEntries({ content_type: 'section', 'fields.title': section })
  return res.items[0]
}

export const getPageData = async (page: string) => {
  const res = await client.getEntries({ content_type: 'page', 'fields.title': page })
  return res.items[0]
}

const service = { getSiteData, getSection, getPageData }

export default service
