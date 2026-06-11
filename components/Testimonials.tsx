'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Nao precisei me preocupar com nada, so recebi o dinheiro no final do processo.',
    client: 'Gabriel Almeida',
    stars: 5,
  },
  {
    text: 'Sou imensamente grato a pessoa e ao profissional que e o Dr. e toda sua equipe.',
    client: 'Ricardo Rodrigues',
    stars: 5,
  },
  {
    text: 'Otimos profissionais, exemplo no que fazem.',
    client: 'Valdir Ferreira',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Quem confia no nosso trabalho
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300"
          >
            A satisfacao dos clientes reflete um atendimento proximo, claro e comprometido.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-background border border-white/10 border-l-4 border-l-accent shadow-lg shadow-black/20 hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg italic text-slate-200 mb-6 leading-relaxed">
                &quot;{t.text}&quot;
              </p>
              <div className="font-bold text-white">{t.client}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
