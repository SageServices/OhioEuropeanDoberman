import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <MapPin className="w-6 h-6 text-primary shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-accent mb-1">Location</h3>
          <p className="text-accent/70">Newark, Ohio</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Phone className="w-6 h-6 text-primary shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-accent mb-1">Phone</h3>
          <p className="text-accent/70">1 (740) 403-0851</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <Clock className="w-6 h-6 text-primary shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-accent mb-1">Email</h3>
          <p className="text-accent/70">jarmstrongohio@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;