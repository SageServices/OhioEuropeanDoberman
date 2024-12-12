import React from 'react';
import { Send } from 'lucide-react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          required
        />
        <FormInput
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          required
        />
      </div>
      
      <FormInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
      />
      
      <FormInput
        label="Phone"
        type="tel"
        placeholder="Enter your phone number"
      />
      
      <FormInput
        label="Subject"
        type="text"
        placeholder="What is this regarding?"
        required
      />
      
      <FormTextarea
        label="Message"
        placeholder="Tell us more about your inquiry..."
        required
      />
      
      <button
        type="submit"
        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-accent hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <span>Send Message</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
};

export default ContactForm;