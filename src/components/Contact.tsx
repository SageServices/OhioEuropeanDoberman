import React from 'react';
import SectionTitle from './SectionTitle';
import ContactForm from './forms/ContactForm';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Get in Touch"
          subtitle="Contact us to learn more about our Dobermans and services"
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;