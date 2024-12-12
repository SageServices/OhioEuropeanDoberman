import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <MapPin className="w-6 h-6 text-primary shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-accent mb-1">Location</h3>
          <p className="text-accent/70">123 Doberman Drive, Columbus, OH 43215</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Phone className="w-6 h-6 text-primary shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-accent mb-1">Phone</h3>
          <p className="text-accent/70">(614) 555-0123</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Mail className="w-6 h-6 text-primary shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-accent mb-1">Email</h3>
          <p className="text-accent/70">info@ohioeuropeandoberman.com</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Clock className="w-6 h-6 text-primary shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-accent mb-1">Hours</h3>
          <p className="text-accent/70">
            Monday - Friday: 9:00 AM - 5:00 PM<br />
            Saturday: 10:00 AM - 3:00 PM<br />
            Sunday: By Appointment
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;