import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.pncsoft.tech' });
  const writeStream = createWriteStream(`${__dirname}/public/sitemap.xml`);

  sitemap.pipe(writeStream);

  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about', changefreq: 'daily', priority: 0.1 });
  sitemap.write({ url: '/contact', changefreq: 'daily', priority: 0.1 });
  sitemap.write({ url: '/services', changefreq: 'daily', priority: 0.1 });
  sitemap.write({ url: '/team', changefreq: 'daily', priority: 0.1 });
  sitemap.write({ url: '/projects/mern', changefreq: 'daily', priority: 0.1 });
  sitemap.write({ url: '/projects/php', changefreq: 'daily', priority: 0.1 });
  sitemap.write({ url: '/projects/flutter', changefreq: 'daily', priority: 0.1 });
  sitemap.write({ url: '/projects/react-native', changefreq: 'daily', priority: 0.1 });
  // Add more URLs as needed

  sitemap.end();

  await streamToPromise(sitemap);
};

generateSitemap()
  .then(() => {
    console.log('Sitemap generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });
