'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Car, FileText, Heart, Home, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Vitimas de Acidentes',
    desc: 'Atendimento juridico para quem sofreu acidentes de transito, domesticos, esportivos ou de trabalho.',
    icon: Car,
    color: 'text-accent',
  },
  {
    title: 'Indenizacoes',
    desc: 'Atuacao em busca de reparacao por danos materiais, morais, fisicos e demais prejuizos sofridos.',
    icon: ShieldCheck,
    color: 'text-accent',
  },
  {
    title: 'Seguros',
    desc: 'Suporte em negativas, coberturas, revisoes e cobrancas relacionadas a contratos de seguro.',
    icon: Home,
    color: 'text-accent',
  },
  {
    title: 'Beneficios do INSS',
    desc: 'Orientacao em beneficios previdenciarios ligados a incapacidade, afastamento e recuperacao.',
    icon: FileText,
    color: 'text-accent',
  },
  {
    title: 'Civel e Trabalhista',
    desc: 'Assessoria em demandas civeis e trabalhistas com estrategia, clareza e acompanhamento proximo.',
    icon: Briefcase,
    color: 'text-accent',
  },
  {
    title: 'Atendimento Humanizado',
    desc: 'Escritorio comprometido com acolhimento, respeito, transparencia e comunicacao direta.',
    icon: Heart,
    color: 'text-accent',
  },
];

export default function Services() {
  return (
    <section id="especialidades" className="py-24 bg-primary-light text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Especialidades
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-200"
          >
            Atuacao focada em vitimas de acidentes, seguros, INSS e defesa de direitos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-3xl border border-white/10 hover:border-accent transition-all bg-background/70 group cursor-pointer shadow-xl shadow-black/20"
            >
              <div className={`p-4 rounded-2xl bg-surface-strong shadow-sm w-fit mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 ${service.color}`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-200 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
