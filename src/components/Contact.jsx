import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
  e.preventDefault();
  setIsSending(true);

  const templateParams = {
    from_name: form.current.from_name.value,
    from_email: form.current.from_email.value,
    subject: form.current.subject.value,
    message: form.current.message.value,
  };

  const SERVICE_ID = 'service_shqgtrd';
  const PUBLIC_KEY = 'AulvvgX5x0e-yx-Xu';

  // (Admin)
  emailjs.send(SERVICE_ID, 'template_lmb5e0c', templateParams, PUBLIC_KEY)
    .then(() => {
      // (Auto Reply)
      return emailjs.send(SERVICE_ID, 'template_8go0n2t', templateParams, PUBLIC_KEY);
    })
    .then((response) => {
      //SUCCESS
      console.log('ALL EMAILS SENT!', response.status, response.text);
      setStatus("success");
      setIsSending(false);
      e.target.reset();
      
      setTimeout(() => setStatus(""), 5000);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setStatus("error");
      setIsSending(false);
    });
};

  return (
    <section id="contact" className="lg:py-20 py-0 bg-white dark:bg-[#0a0a0a]">
      <div className="w-[94%] max-w-5xl mx-auto">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase">
            Get In <span className="text-green-500">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-green-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's talk about everything!</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Have a new project in mind or looking to collaborate? Drop me a message now, and I’ll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <ContactInfo icon={<FiMail />} label="Email Me" value="suyp8944@gmail.com" color="text-green-500" />
              <ContactInfo icon={<FiMessageCircle />} label="Telegram" value="@Pisethsuy" color="text-blue-500" />
              <ContactInfo icon={<FiMapPin />} label="Location" value="Phnom Penh, Cambodia" color="text-red-500" />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-neutral-800"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormInput name="from_name" type="text" placeholder="Your Name" required />
                <FormInput name="from_email" type="email" placeholder="Your Email" required />
              </div>
              <FormInput name="subject" type="text" placeholder="Subject" required />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="4" 
                required
                className="w-full p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-neutral-800 focus:border-green-500 outline-none dark:text-white transition-all"
              ></textarea>
              
              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-600/20 disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"} <FiSend />
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="flex items-center justify-center gap-2 text-green-500 font-bold text-sm mt-4 italic">
                  <FiCheckCircle /> Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-bold text-sm mt-4 italic">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Reusable Components to keep code clean
const ContactInfo = ({ icon, label, value, color }) => (
  <div className="flex items-center gap-4 group">
    <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-[#111] ${color} group-hover:bg-green-500 group-hover:text-white transition-all duration-300`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <p className="text-xs text-gray-500 uppercase font-black tracking-widest">{label}</p>
      <p className="text-gray-900 dark:text-white font-bold">{value}</p>
    </div>
  </div>
);

const FormInput = (props) => (
  <input 
    {...props}
    className="w-full p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-neutral-800 focus:border-green-500 outline-none dark:text-white transition-all"
  />
);

export default Contact;