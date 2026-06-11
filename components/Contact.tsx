'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageSquare, Phone } from 'lucide-react';

const contactItems = [
  { icon: Phone, text: '(47) 3801-1300', label: 'Telefone' },
  { icon: MapPin, text: 'Independencia, 878', label: 'Anita Garibaldi, Joinville - SC' },
  { icon: MessageSquare, text: 'wa.me/554738011300', label: 'WhatsApp' },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[linear-gradient(180deg,#111827_0%,#080D18_100%)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-black/30 text-center relative overflow-hidden text-white border border-accent/20"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/25 rounded-full -mr-16 -mt-16 blur-2xl" />

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Agende sua Consulta
          </h2>
          <p className="text-lg text-slate-200 mb-12 max-w-2xl mx-auto">
            Nao deixe seus direitos prescreverem. Entre em contato agora para uma analise detalhada do seu caso.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] transition-colors border border-white/10"
              >
                <div className="p-3 bg-accent/20 text-accent rounded-full">
                  <item.icon size={24} />
                </div>
                <span className="font-bold text-white text-center leading-snug">{item.text}</span>
                <span className="text-sm text-slate-300 text-center leading-snug">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://wa.me/554738011300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-black/20 hover:bg-accent-hover transition-all w-full md:w-auto"
          >
            <MessageSquare size={24} />
            Enviar Mensagem via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
