'use client';

import { useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';


export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    ddd: '',
    email: '',
    celular: '',
    sellsOnline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
        throw new Error('Serviço indisponível no momento. A API não foi configurada no ambiente.');
      }

      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name,
          ddd: formData.ddd,
          email: formData.email,
          celular: formData.celular,
          sells_online: formData.sellsOnline
        }
      ]);

      if (error) throw error;

      setIsSuccess(true);
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5BBED9', '#FF9C2B', '#FFFFFF']
      });

    } catch (err: unknown) {
      setErrorMsg((err as Error).message || 'Erro ao enviar dados. Verifique sua conexão.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full bg-bg-white rounded-[24px] p-8 lg:p-12 shadow-2xl flex flex-col items-center justify-center text-center animate-fade-in min-h-[500px]">
        <div className="w-20 h-20 bg-[#EFFDF2] rounded-full flex items-center justify-center mb-6 border-4 border-[#C8FCE0]">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-2xl font-bold font-tomato text-dark-700 mb-2">Sucesso absoluto!</h2>
        <p className="text-placeholder font-space mb-6 max-w-[300px]">Seus dados foram enviados e você já está participando do sorteio de um iPhone 16 Pro.</p>
        <button
          onClick={() => { setIsSuccess(false); setFormData({ name: '', ddd: '', email: '', celular: '', sellsOnline: '' }); }}
          className="btn-primary w-fit px-8"
        >
          Voltar ao início
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-[6px] px-[24px] py-[32px] lg:px-[43px] lg:py-[40px] shadow-2xl relative z-20">
      {/* Form header */}
      <p className="text-[14px] font-bold text-brand-cyan uppercase tracking-[0.7px] font-tomato mb-[8px]">
        CADASTRO 100% GRATUITO
      </p>
      <h2 className="text-[24px] lg:text-[32px] font-normal text-dark-700 font-tomato leading-[1.25] mb-[36px] tracking-normal">
        Crie sua conta e comece a vender hoje mesmo
      </h2>

      {errorMsg && (
        <div className="w-full p-4 mb-6 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          required
          className="pill-input"
        />

        <div className="flex gap-[14px]">
          <input
            type="text"
            name="ddd"
            placeholder="DDD"
            value={formData.ddd}
            onChange={handleChange}
            maxLength={2}
            className="pill-input ddd-input !w-[30%]"
          />
          <input
            type="tel"
            name="celular"
            placeholder="Celular"
            value={formData.celular}
            onChange={handleChange}
            className="pill-input flex-1"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="pill-input"
        />

        <div className="relative group">
          <select
            name="sellsOnline"
            value={formData.sellsOnline}
            onChange={handleChange}
            required
            title="Já vende online?"
            aria-label="Já vende online?"
            className="pill-input appearance-none block focus:text-bg-black text-placeholder cursor-pointer"
          >
            <option value="" disabled className="text-placeholder">Já vende online?</option>
            <option value="yes" className="text-bg-black">Sim, já vendo online</option>
            <option value="no" className="text-bg-black">Não, ainda não vendo</option>
            <option value="planning" className="text-bg-black">Estou planejando</option>
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:rotate-180 transition-transform duration-300">
            <Image src="/images/icon-chevron.svg" alt="chevron" width={16} height={16} />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary mt-[10px] w-full max-w-[400px] !bg-[#1d63ff] !rounded-[6px]"
        >
          {isSubmitting ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              Começar agora
              <Image src="/images/icon-arrow.svg" alt="Arrow" width={20} height={20} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {/* Disclaimer */}
        <p className="text-[14px] text-[#6e6e6e] font-space leading-[1.4] mt-2 w-full text-left">
          Ao enviar seus dados, você autoriza que a Ticto entre em contato e declara estar ciente das{' '}
          <a href="#" className="underline decoration-solid hover:text-dark-700 transition-colors">Políticas e Termos</a>.
        </p>
      </form>

      {/* Trust badge */}
      <div className="flex items-center gap-[14px] mt-8">
        <div className="w-[21.6px] h-[24px] relative flex-shrink-0">
          <Image src="/images/icon-shield.svg" alt="Shield" fill />
        </div>
        <p className="text-[14px] text-[#1e1c2d] font-space leading-[18px]">
          Seus dados estão seguros
        </p>
      </div>
    </div>
  );
}
