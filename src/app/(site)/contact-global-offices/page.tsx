import { PageHero } from '@/components/ui';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CONTACT, CONTACT_ADDRESS_LINE, whatsappLink } from '@/data/site';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us in Kumasi, Ghana',
  description:
    'Contact Afrixtech to talk about a website, online store or software project. Call, email or chat on WhatsApp. Based in Kumasi, Ghana.',
};

export default function ContactPage() {
  const { street } = CONTACT.address;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Whether you need a company website, an online store or custom software, tell us what you have in mind and we will get back to you."
      />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">Reach us directly</h2>
              <ul className="mt-4">
                <li className="row flex items-center gap-4 py-4">
                  <span className="material-symbols-outlined text-[22px] text-primary" aria-hidden="true">mail</span>
                  <div>
                    <p className="text-xs text-ink-muted">Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-sm font-medium hover:text-primary">{CONTACT.email}</a>
                  </div>
                </li>
                {CONTACT.phones.map((p) => (
                  <li key={p.e164} className="row flex items-center gap-4 py-4">
                    <span className="material-symbols-outlined text-[22px] text-primary" aria-hidden="true">call</span>
                    <div>
                      <p className="text-xs text-ink-muted">{p.label}</p>
                      <a href={`tel:${p.e164}`} className="text-sm font-medium hover:text-primary">{p.display}</a>
                    </div>
                  </li>
                ))}
                <li className="row flex items-center gap-4 py-4">
                  <span className="text-primary"><WhatsAppIcon className="size-[22px]" /></span>
                  <div>
                    <p className="text-xs text-ink-muted">WhatsApp</p>
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary">
                      Chat with us on WhatsApp
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">Where we are</h2>
              <div className="mt-4 flex items-start gap-4">
                <span className="material-symbols-outlined text-[22px] text-primary" aria-hidden="true">location_on</span>
                <address className="text-sm not-italic leading-relaxed">
                  <p className="font-medium">Afrixtech</p>
                  {/* Street address is hidden until it is set in src/data/site.ts */}
                  {street && <p className="text-ink-muted">{street}</p>}
                  <p className="text-ink-muted">{CONTACT_ADDRESS_LINE}</p>
                </address>
              </div>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight">Send us a message</h2>
            <p className="mt-1 mb-6 text-sm text-ink-muted">Fill in the form and we will get back to you.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
