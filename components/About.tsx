'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[3rem] border-4 border-muted bg-surface-strong shadow-2xl shadow-black/30">
            <Image
              src="/imagemAbout.png"
              alt="Dr. Allisson Acioli"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-[50%_14%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/70 to-transparent p-8 pt-28">
              <p className="text-sm uppercase tracking-widest text-accent font-bold">Advocacia em Joinville - SC</p>
              <h3 className="mt-2 text-3xl font-serif font-bold text-white">Allisson Acioli</h3>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent">
              <MapPin size={16} />
              Independencia, 878 - Anita Garibaldi
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Dr. Allisson Acioli
            </h2>
          </div>

          <p className="text-xl font-bold text-accent italic">
            "Comprometimento, honestidade e transparencia."
          </p>
          <p className="text-lg text-slate-200 leading-relaxed">
            Advogado e escritorio de advocacia em Joinville - SC, com atendimento voltado a vitimas de
            acidentes, indenizacoes, seguros e beneficios do INSS.
          </p>
          <p className="text-lg text-slate-200 leading-relaxed">
            A atuacao tambem inclui demandas civeis e trabalhistas, com atendimento direto,
            acolhedor e orientado para resultados.
          </p>

          <ul className="space-y-4 pt-4">
            {[
              'Vitimas de acidentes e indenizacoes',
              'Seguros, DPVAT e beneficios do INSS',
              'Demandas civeis e trabalhistas',
            ].map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 font-semibold text-slate-100"
              >
                <CheckCircle size={22} className="text-accent" />
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
