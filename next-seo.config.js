const title =
  'Easy Feedback – The easiest way to add comments or reviews to your static site.';
const description = 'Easy Feedback enables your audience to engage with your content with just an iFrame on your site.';

const SEO = {
  title,
  description,
  canonical: 'https://easyfeedback.xyz',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://easyfeedback.xyz',
    title,
    description,
    images: [
      {
        url: 'https://easyfeedback.xyz/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
