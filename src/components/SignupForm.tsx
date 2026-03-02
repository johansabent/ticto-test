'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

function maskCpf(v: string) {
  return v.replace(/\D/g, '').slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function maskCelular(v: string) {
  return v.replace(/\D/g, '').slice(0, 11)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2');
}

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
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

  const handleMasked = (field: 'cpf' | 'celular', value: string) => {
    const masked = field === 'cpf' ? maskCpf(value) : maskCelular(value);
    setFormData(prev => ({ ...prev, [field]: masked }));
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
          cpf: formData.cpf.replace(/\D/g, ''),
          email: formData.email,
          celular: formData.celular.replace(/\D/g, ''),
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
      <div role="status" aria-live="polite" className="w-full bg-bg-white rounded-[24px] p-8 lg:p-12 shadow-2xl flex flex-col items-center justify-center text-center animate-fade-in min-h-[500px]">
        <div className="w-20 h-20 bg-[#EFFDF2] rounded-full flex items-center justify-center mb-6 border-4 border-[#C8FCE0]">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-2xl font-bold font-tomato text-dark-700 mb-2">Sucesso absoluto!</h2>
        <p className="text-placeholder font-space mb-6 max-w-[300px]">Seus dados foram enviados e você já está participando do sorteio de um iPhone 16 Pro.</p>
        <button
          onClick={() => { setIsSuccess(false); setFormData({ name: '', cpf: '', email: '', celular: '', sellsOnline: '' }); }}
          className="btn-primary w-fit px-8"
        >
          Voltar ao início
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-[6px] px-[20px] py-[24px] lg:px-[43px] lg:py-[40px] relative z-20">
      <p className="text-[14px] font-bold text-brand-cyan uppercase tracking-[0.7px] font-tomato mb-[8px]">
        CADASTRO 100% GRATUITO
      </p>
      <h2 className="text-[22px] lg:text-[32px] font-normal text-dark-700 font-tomato leading-[1.25] mb-[36px] tracking-normal">
        Crie sua conta e comece a vender hoje mesmo
      </h2>

      {errorMsg && (
        <div role="alert" aria-live="polite" className="w-full p-4 mb-6 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">
          {errorMsg}
        </div>
      )}

      <form id="signup-form" onSubmit={handleSubmit} className="flex flex-col gap-[36px]">
        <div className="flex flex-col gap-[24px] w-full items-start">
          <div className="flex flex-col gap-[16px] w-full items-start">
            <label htmlFor="name" className="sr-only">Nome completo</label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
              required
              className="pill-input font-tomato w-full max-w-[400px]"
            />

            <label htmlFor="cpf" className="sr-only">CPF</label>
            <input
              id="cpf"
              type="text"
              name="cpf"
              autoComplete="off"
              placeholder="CPF"
              value={formData.cpf}
              onChange={e => handleMasked('cpf', e.target.value)}
              inputMode="numeric"
              required
              className="pill-input font-tomato w-full max-w-[400px]"
            />

            <label htmlFor="email" className="sr-only">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              spellCheck={false}
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="pill-input font-tomato w-full max-w-[400px]"
            />

            <label htmlFor="celular" className="sr-only">Celular</label>
            <input
              id="celular"
              type="tel"
              name="celular"
              autoComplete="tel"
              placeholder="Celular"
              value={formData.celular}
              onChange={e => handleMasked('celular', e.target.value)}
              inputMode="numeric"
              required
              className="pill-input font-tomato w-full max-w-[400px]"
            />

            <div className="relative group w-full max-w-[400px]">
              <label htmlFor="sellsOnline" className="sr-only">Já vende online?</label>
              <select
                id="sellsOnline"
                name="sellsOnline"
                autoComplete="off"
                value={formData.sellsOnline}
                onChange={handleChange}
                required
                title="Já vende online?"
                aria-label="Já vende online?"
                className="pill-input font-tomato appearance-none block focus:text-bg-black text-placeholder cursor-pointer"
              >
                <option value="" disabled className="text-placeholder">Já vende online?</option>
                <option value="yes" className="text-bg-black">Sim, já vendo online</option>
                <option value="no" className="text-bg-black">Não, ainda não vendo</option>
                <option value="planning" className="text-bg-black">Estou planejando</option>
              </select>
              <div className="absolute right-[25px] top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:rotate-180 transition-transform duration-300">
                <Image src="/images/icon-chevron.svg" alt="chevron" width={10} height={5} className="w-[10px] h-[5px]" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full max-w-[400px]"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>Começar agora</>
            )}
          </button>
        </div>

        <p className="text-[14px] text-[#6e6e6e] font-tomato font-normal leading-[1.4] w-full text-left">
          Ao enviar seus dados, você autoriza que a Ticto entre em contato e declara estar ciente das{' '}
          <Link href="#politicas-termos" className="underline decoration-solid hover:text-dark-700 transition-colors">Políticas e Termos</Link>.
        </p>
      </form>

      <div className="flex items-center gap-[14px] mt-[36px] w-[212.292px]">
        <div className="w-[21.6px] h-[24px] relative flex-shrink-0">
          <Image src="/images/icon-shield.svg" alt="Shield" fill className="object-contain" />
        </div>
        <p className="text-[14px] text-[#1e1c2d] font-tomato leading-[18px] font-normal whitespace-nowrap">
          Seus dados estão seguros
        </p>
      </div>
    </div>
  );
}
