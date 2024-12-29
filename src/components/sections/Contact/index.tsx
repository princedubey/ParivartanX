import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function Contact() {
  return (
    <section className="py-24 bg-gray-900 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}