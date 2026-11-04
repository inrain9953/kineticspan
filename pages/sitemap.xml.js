
const BASE_URL = 'https://www.kineticspan.com'
const weekTemp = new Date()
weekTemp.setDate(weekTemp.getDate() - 7)
const week = weekTemp.toISOString()

const dailyTemp = new Date()
dailyTemp.setDate(dailyTemp.getDate() - 1)
const daily = dailyTemp.toISOString()

function generateSiteMap () {
  const staticPages = [
    '/',
    '/about-us',
    '/contact-us',
    '/services',
    '/rainwater-harvesting-for-industries',
    // '/rainwater-harvesting-tank',
    // '/modular-rainwater-harvesting-system',
    // '/rooftop-rainwater-harvesting',
    // '/polymer-type-rainwater-harvesting-system',
    // '/storm-water-management-company',
    // '/new-technology-of-rainwater-harvesting'
  ]

  // Static pages
  const staticUrls = staticPages
    .map(
      page => `
      <url>
        <loc>${BASE_URL}${page}</loc>
        <lastmod>${week}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.80</priority>
      </url>
    `
    )
    .join('')

  // Rainwater Harvesting System Location Dynamic pages
//   const RainwaterHarvestingSystemLocation = CityData.map(
//     city => `
//       <url>
//         <loc>
//           ${BASE_URL}/rainwater-harvesting-system/${city.slug}
//         </loc>
//         <lastmod>${daily}</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>0.75</priority>
//       </url>
//     `
//   ).join('')

//   // Rainwater Harvesting Tank Location Dynamic pages
//   const RainwaterHarvestingTankLocation = CityData.map(
//     city => `
//       <url>
//         <loc>
//           ${BASE_URL}/rainwater-harvesting-tank/${city.slug}
//         </loc>
//         <lastmod>${daily}</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>0.75</priority>
//       </url>
//     `
//   ).join('')

//   // Modular Rainwater Harvesting System Location Dynamic pages
//   const ModularRWHSytemLocation = CityData.map(
//     city => `
//       <url>
//         <loc>
//           ${BASE_URL}/modular-rainwater-harvesting-system/${city.slug}
//         </loc>
//         <lastmod>${daily}</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>0.75</priority>
//       </url>
//     `
//   ).join('')

//   // Rooftop Rainwater Harvesting Location Dynamic pages
//   const RooftopRWH = CityData.map(
//     city => `
//       <url>
//         <loc>
//           ${BASE_URL}/rooftop-rainwater-harvesting/${city.slug}
//         </loc>
//         <lastmod>${daily}</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>0.75</priority>
//       </url>
//     `
//   ).join('')

//   // Polymer Type Rainwater Harvesting System Location Dynamic pages
//   const PolymerTypeRWHSystem = CityData.map(
//     city => `
//       <url>
//         <loc>
//           ${BASE_URL}/polymer-type-rainwater-harvesting-system/${city.slug}
//         </loc>
//         <lastmod>${daily}</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>0.75</priority>
//       </url>
//     `
//   ).join('')

//   // Storm Water Management Company Location Dynamic pages
//   const StormWaterManagementCompany = CityData.map(
//     city => `
//       <url>
//         <loc>
//           ${BASE_URL}/storm-water-management-company/${city.slug}
//         </loc>
//         <lastmod>${daily}</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>0.75</priority>
//       </url>
//     `
//   ).join('')

//   // New Technology of Rainwater Harvesting Location Dynamic pages
//   const NewTechnologyOfRWH = CityData.map(
//     city => `
//       <url>
//         <loc>
//           ${BASE_URL}/new-technology-of-rainwater-harvesting/${city.slug}
//         </loc>
//         <lastmod>${daily}</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>0.75</priority>
//       </url>
//     `
//   ).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
    xmlns:xhtml="http://www.w3.org/1999/xhtml" 
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  >
    ${staticUrls}
  </urlset>`
}

export async function getServerSideProps ({ res }) {
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')

  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default function Sitemap () {
  return null
}
