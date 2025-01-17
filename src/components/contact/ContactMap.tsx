import React from 'react';

const ContactMap = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-primary/20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195386.14636662928!2d-82.58326409727292!3d40.07745222907701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883817d9b080117d%3A0x11616c35e1b4991c!2sNewark%2C%20OH%2C%20USA!5e0!3m2!1sen!2sae!4v1736951940219!5m2!1sen!2sae"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactMap;