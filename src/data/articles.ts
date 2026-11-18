/**
 * Insights articles. All three are DRAFTS: they show a "Draft" label, are hidden from
 * search engines and are left out of the sitemap until you set `draft: false`.
 * Review, edit and add your own examples before publishing.
 */

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  draft: boolean;
  /** TODO: set the real publish date when you publish. */
  date: string;
  body: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: 'how-much-does-a-website-cost-in-ghana-2026',
    title: 'How much does a website cost in Ghana in 2026?',
    excerpt:
      'What decides the price of a website, what to ask for before you pay, and what a fixed-price package should include.',
    category: 'Websites',
    draft: true,
    date: '',
    body: [
      {
        type: 'p',
        text: "If you have asked three web developers for a price, you have probably received three very different answers. One says a few hundred cedis, another says several thousand, and a third says it depends. All three can be honest. The price of a website depends on what you actually need built, and on what is included besides the design.",
      },
      { type: 'h2', text: 'What changes the price of a website' },
      {
        type: 'p',
        text: "The biggest factor is size. A website with five pages that explains your business, shows your work and lets people contact you is a small job. A website with hundreds of products, customer accounts and online payments is a much bigger one, because there is more to design, build and test.",
      },
      {
        type: 'ul',
        items: [
          'Number of pages: a simple company site needs far less work than a site with many sections.',
          'Features: a contact form is simple, while bookings, payments and customer logins take longer to build properly.',
          'Content: if you already have your text and photos, the job is quicker. If we need to help write and organise content, it takes more time.',
          'Design: a clean design built on a proven layout costs less than a fully custom design.',
          'Ongoing running costs: the domain name and hosting must be paid for every year, whoever builds the site.',
        ],
      },
      { type: 'h2', text: 'The costs people forget' },
      {
        type: 'p',
        text: "Many people only compare the design price, and later find extra charges. Before you agree to anything, ask what is included. A website needs a domain name, which is your address such as yourbusiness.com, and it needs hosting, which is the computer that keeps your site online. Both are renewed each year. Ask who owns the domain, and make sure it is registered in your name or your business name.",
      },
      {
        type: 'p',
        text: "Also ask whether the site will work well on a phone. Most visitors will open it on a phone, so a site that only looks right on a laptop is not finished. And ask what happens if something breaks, or if you want to change a phone number or a price next month.",
      },
      { type: 'h2', text: 'Questions to ask before you pay' },
      {
        type: 'ul',
        items: [
          'What exactly is included in the price, page by page and feature by feature?',
          'Is the domain name included, and is it registered in my name?',
          'How long is hosting included for, and what does it cost after that?',
          'Will the site work properly on mobile phones?',
          'Can I see websites you have built that are live today?',
          'How long will it take, and what do you need from me to start?',
        ],
      },
      { type: 'h2', text: 'Why a fixed-price package helps' },
      {
        type: 'p',
        text: "A fixed price removes the guesswork. You know the amount before work starts, and you know what you will get. That is why we offer a Corporate Website package at a flat GH₵999. It includes up to five pages, a free domain name, one year of hosting, a mobile-friendly design, a contact form and a WhatsApp button. For many small and growing businesses, that is everything needed to be found online and to be contacted by customers.",
      },
      {
        type: 'p',
        text: "If you need more than that, such as an online shop or a system to manage your orders, the price will be different, and we will tell you why before you decide.",
      },
      { type: 'h2', text: 'Next step' },
      {
        type: 'p',
        text: "Want a professional website for your business? The Corporate Website package is GH₵999 flat, with a free domain name and one year of hosting. Message us on WhatsApp and tell us about your business, and we will tell you what you need and how long it will take.",
      },
    ],
  },
  {
    slug: 'why-your-business-needs-an-online-ordering-website',
    title: 'Why your business needs an online ordering website',
    excerpt:
      'How a simple website that takes orders can save you time, reduce mistakes and help customers buy when it suits them.',
    category: 'Online ordering',
    draft: true,
    date: '',
    body: [
      {
        type: 'p',
        text: "Many Ghanaian businesses take orders through phone calls, direct messages and voice notes. It works, until it does not. Messages get buried, a customer's order is forgotten, or two people ask for the same last item. An online ordering website does not replace talking to your customers. It gives every order a proper place to land.",
      },
      { type: 'h2', text: 'What an ordering website actually does' },
      {
        type: 'p',
        text: "At its simplest, an ordering website shows what you sell, lets customers choose what they want, and sends you the order in a clear format. The customer does not need to ask what is available, and you do not need to type the same price list into a chat again and again.",
      },
      { type: 'h2', text: 'Benefits for your business' },
      {
        type: 'ul',
        items: [
          'Fewer mistakes: the order arrives written down exactly as the customer chose it, so you do not rely on memory or scrolling through old chats.',
          'Saved time: you stop answering the same questions about prices and availability all day.',
          'Orders outside working hours: customers can browse and order in the evening or at the weekend, and you see the order when you open for business.',
          'A record of every order: you can see what sells, who buys, and when. That helps you plan stock and spot your best customers.',
          'A more serious image: a proper website tells new customers that you are an established business.',
        ],
      },
      { type: 'h2', text: 'It does not have to be complicated' },
      {
        type: 'p',
        text: "You do not need a huge online shop to start. Many businesses begin with a simple site that lists their products, lets customers send an order request, and then confirms the price and delivery by phone or WhatsApp. This keeps the personal touch that Ghanaian customers like, while removing the confusion.",
      },
      {
        type: 'p',
        text: "As you grow, you can add more. An online store with a management system lets you manage products, orders, customers and reports in one place, so you can see the whole business at a glance instead of in scattered chats and notebooks.",
      },
      { type: 'h2', text: 'A simple example' },
      {
        type: 'p',
        text: "Imagine a small bakery in Kumasi that takes cake orders through WhatsApp. Every order means asking the same questions: which flavours, what size, what date, delivery or pickup. With an ordering page, the customer answers those questions once, in a form, and the bakery receives everything it needs in a single message. The baker spends less time typing and more time baking, and fewer orders go wrong because a detail was missed.",
      },
      { type: 'h2', text: 'Common worries' },
      {
        type: 'p',
        text: "Some owners worry that customers will not use an ordering website. The easy answer is to keep your existing ways of ordering and add the website next to them. Put the link on your WhatsApp profile and your social pages, and let customers choose whatever is easiest for them. Over time you will see which way they prefer.",
      },
      { type: 'h2', text: 'What to prepare before you start' },
      {
        type: 'ul',
        items: [
          'A list of what you sell, with clear names and prices.',
          'Good photos of your products. Clear photos make a big difference.',
          'How you deliver: pickup, delivery, or both, and which areas you cover.',
          'How you want to be paid, and how you will confirm orders with customers.',
        ],
      },
      { type: 'h2', text: 'Where to begin' },
      {
        type: 'p',
        text: "Start by getting your business online properly. Our Corporate Website package is GH₵999 flat. It includes up to five pages, a free domain name, one year of hosting, a mobile-friendly design, a contact form and a WhatsApp button, so customers can reach you straight away.",
      },
      {
        type: 'p',
        text: "If you want customers to place orders and you want a system to manage them, ask us about the E-commerce Store package. Message us on WhatsApp, tell us what you sell, and we will recommend the simplest option that fits your business.",
      },
    ],
  },
  {
    slug: 'website-vs-facebook-page-ghana',
    title: 'Website vs Facebook page: what Ghanaian businesses need',
    excerpt:
      'A Facebook page is a good start, but there are things only your own website can do. Here is how to think about both.',
    category: 'Getting online',
    draft: true,
    date: '',
    body: [
      {
        type: 'p',
        text: "For many Ghanaian businesses, a Facebook or Instagram page was the first step online, and it is a good one. It is free, quick to set up and your customers are already there. So why would you also need a website? The honest answer is that they do different jobs, and the best results usually come from using both.",
      },
      { type: 'h2', text: 'What a Facebook page does well' },
      {
        type: 'ul',
        items: [
          'It is free and you can start today.',
          'Customers can message you quickly and see what others say about you.',
          'You can share news, offers and photos with people who already follow you.',
        ],
      },
      { type: 'h2', text: 'Where a Facebook page falls short' },
      {
        type: 'p',
        text: "A social media page is space you borrow. The platform decides how it looks, who sees your posts and what rules apply. If the page is suspended, hacked or changed, your customers and your content can disappear overnight. You also cannot choose your own web address, and a page is not designed to explain your services in a structured, professional way.",
      },
      {
        type: 'p',
        text: "Search is another limit. When someone looks for a service in Kumasi, a well-built website has a much better chance of appearing in the results, and of being shared with a clear link. Social posts are mostly seen for a short time and then pushed down the feed.",
      },
      { type: 'h2', text: 'What your own website gives you' },
      {
        type: 'ul',
        items: [
          'Your own address, such as yourbusiness.com, which you control completely.',
          'One place that clearly explains what you do, your prices or packages, and how to contact you.',
          'A more professional first impression, especially with companies, schools and organisations that want to check you out before buying.',
          'A foundation to grow on: online orders, bookings, a customer area or a management system can be added later.',
        ],
      },
      { type: 'h2', text: 'Use both, and connect them' },
      {
        type: 'p',
        text: "You do not have to choose. Keep posting where your customers already spend time, and use those posts to send people to your website for the full picture. Put your website link on your page, your business cards, your invoices and your WhatsApp profile. A WhatsApp button on the site lets a visitor reach you in one tap, which keeps the personal, quick service your customers like.",
      },
      { type: 'h2', text: 'Common questions' },
      {
        type: 'p',
        text: "Do I have to close my Facebook page? No. Keep it, and treat it as one of the doors to your business. The website is the main house behind the door, where the full details live.",
      },
      {
        type: 'p',
        text: "Is a website only for big companies? No. A small business with a clear website often looks more reliable than a larger one with only a social page. What matters is that the information is clear, correct and easy to find on a phone.",
      },
      {
        type: 'p',
        text: "Will I need to keep updating it? Only when something changes, such as a new phone number, a new service or a new price. A simple website does not need daily posts, so it will not take over your time the way a busy social page can.",
      },
      { type: 'h2', text: 'A simple way to decide' },
      {
        type: 'p',
        text: "If you only need to share updates with people who already know you, a page may be enough for now. If you want new customers to find you, trust you and contact you, if you sell to businesses, or if you want to take orders online, you need a website.",
      },
      { type: 'h2', text: 'Get started' },
      {
        type: 'p',
        text: "Our Corporate Website package is GH₵999 flat and is designed for exactly this step. It includes up to five pages, a free domain name, one year of hosting, a mobile-friendly design, a contact form and a WhatsApp button. Message us on WhatsApp and we will help you decide what your website should say and what pages you need.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
