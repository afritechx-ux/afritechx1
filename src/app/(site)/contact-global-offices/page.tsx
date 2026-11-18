import { IconTile, PageHero } from '@/components/ui';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Contact Afrixtech to discuss your project. Offices in Kumasi and Accra, Ghana.',
};

const offices = [
  { city: 'Kumasi', detail: 'Ashanti Region, Ghana', phone: '+233 245 171 589', phoneHref: 'tel:+233245171589', hq: true },
  { city: 'Accra', detail: 'Greater Accra Region, Ghana', phone: '+233 209 624 647', phoneHref: 'tel:+233209624647', hq: false },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Whether you have a project in mind, need a technology partner, or just want to say hello, we'd like to hear from you."
      />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">Reach us directly</h2>
              <ul className="mt-4 space-y-3">
                <li className="row flex items-center gap-4 py-4">
                  <IconTile name="mail" size="sm" />
                  <div>
                    <p className="text-xs text-ink-subtle">Email</p>
                    <a href="mailto:afritechx@gmail.com" className="text-sm font-medium hover:text-primary">afritechx@gmail.com</a>
                  </div>
                </li>
                <li className="row flex items-center gap-4 py-4">
                  <IconTile name="schedule" size="sm" />
                  <div>
                    <p className="text-xs text-ink-subtle">Response time</p>
                    <p className="text-sm font-medium">Within 2 business hours</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">Offices</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {offices.map((o) => (
                  <li key={o.city} className="cell">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{o.city}</h3>
                      {o.hq && <span className="badge badge-primary">HQ</span>}
                    </div>
                    <p className="mt-1 text-sm text-ink-muted">{o.detail}</p>
                    <a href={o.phoneHref} className="mt-3 inline-block text-sm font-medium hover:text-primary">{o.phone}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Send us a message</h2>
            <p className="mt-1 mb-6 text-sm text-ink-muted">We&apos;ll get back to you within 2 business hours.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
