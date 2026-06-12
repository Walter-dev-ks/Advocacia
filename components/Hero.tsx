'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, MapPin, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_top_left,#1F2937_0%,#080D18_42%,#05070D_100%)]">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-4 py-1 rounded-full text-sm font-bold border border-accent/20">
            <ShieldCheck size={16} />
            <span>Especialista em direito de vítimas de acidentes</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
            Justiça e Especialidade em <br />
            <span className="text-accent relative">
              Direitos de Acidentes
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-2 left-0 h-3 bg-accent/20 -z-10"
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-lg leading-relaxed">
            Advogado e escritório de advocacia em Joinville - SC, com atuação em vítimas de acidentes,
            indenizações, seguros, benefícios do INSS, cível e trabalhista.
            <span className="font-semibold"> Transparência e fôco no seu resultado.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="https://wa.me/554738011300"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-black/25 hover:bg-accent-hover group"
            >
              Iniciar Consulta Agora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#especialidades"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white border-2 border-accent px-8 py-4 rounded-2xl font-bold text-center transition-all hover:bg-accent/10"
            >
              Ver Especialidades
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 pt-8"
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-bold text-slate-100 ml-2">5.0 ★ (82 avaliações)</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10 bg-gradient-to-br from-primary to-accent p-2 rounded-[3rem] shadow-2xl">
            <div className="relative min-h-[560px] overflow-hidden rounded-[2.8rem] bg-surface text-white">
              <Image
                src="/allisson-acioli.png"
                alt="Dr. Allisson Acioli"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[50%_18%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-8 pt-28">
                <p className="text-sm uppercase tracking-widest font-bold text-accent mb-2">Excelência Jurídica</p>
                <h3 className="text-3xl font-serif font-bold">Allisson Acioli</h3>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <MapPin size={16} className="text-accent" />
                  Joinville - SC
                </p>
              </div>
            </div>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}
