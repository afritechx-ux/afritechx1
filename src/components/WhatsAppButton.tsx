import { whatsappLink } from '@/data/site';
import WhatsAppIcon from './WhatsAppIcon';

/** Floating WhatsApp button, bottom right on every page. The chat widget sits above it. */
export default function WhatsAppButton() {
    return (
        <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Afrixtech on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-xl bg-[#128C4A] text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#0f7a40]"
        >
            <WhatsAppIcon className="size-7" />
        </a>
    );
}
