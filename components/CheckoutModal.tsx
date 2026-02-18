import React, { useState, useEffect } from 'react';
import { createPixPayment } from '../services/paymentService';
import { PixResponse } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planTitle: string;
  planPrice: string;
}

// Funnel States
type Step = 
  | 'FORM' 
  | 'LOADING_PIX' 
  | 'WAITING_PAYMENT' 
  | 'PAYMENT_SUCCESS' 
  | 'UPSELL_OFFER' 
  | 'UPSELL_PAYMENT' 
  | 'DOWNSELL_OFFER' 
  | 'DOWNSELL_PAYMENT' 
  | 'FINAL_SUCCESS';

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, planTitle, planPrice }) => {
  const [step, setStep] = useState<Step>('FORM');
  const [formData, setFormData] = useState({ name: '', email: '', cpf: '' });
  const [timeLeft, setTimeLeft] = useState(600);
  const [pixData, setPixData] = useState<PixResponse | null>(null);
  const [error, setError] = useState('');
  
  // Simulation for payment check
  const [isCheckingPayment, setIsCheckingPayment] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep('FORM');
      setFormData({ name: '', email: '', cpf: '' });
      setPixData(null);
      setError('');
    }
  }, [isOpen]);

  useEffect(() => {
    if ((step === 'WAITING_PAYMENT' || step === 'UPSELL_PAYMENT' || step === 'DOWNSELL_PAYMENT') && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [step, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 9) value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    else if (value.length > 6) value = value.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
    else if (value.length > 3) value = value.replace(/^(\d{3})(\d{0,3}).*/, '$1.$2');
    setFormData({ ...formData, cpf: value });
  };

  const generatePix = async (price: string | number, nextStep: Step) => {
    try {
      const data = await createPixPayment(formData.name, formData.email, formData.cpf, price);
      setPixData(data);
      setStep(nextStep);
      setTimeLeft(600);
    } catch (err) {
      setError("Erro ao gerar PIX. Tente novamente.");
    }
  };

  const handleSubmitInitial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.cpf.length < 14) {
      setError("CPF inválido");
      return;
    }
    setStep('LOADING_PIX');
    setError('');
    await generatePix(planPrice, 'WAITING_PAYMENT');
  };

  // Simulate Payment Confirmation (In real app, this would be a webhook/polling)
  const simulatePaymentConfirmation = () => {
    setIsCheckingPayment(true);
    setTimeout(() => {
        setIsCheckingPayment(false);
        // Logic: Initial payment done -> Go to Upsell
        if (step === 'WAITING_PAYMENT') {
            setStep('PAYMENT_SUCCESS');
            setTimeout(() => setStep('UPSELL_OFFER'), 2000);
        } 
        // Upsell payment done -> Go to Final
        else if (step === 'UPSELL_PAYMENT') {
            setStep('FINAL_SUCCESS');
        }
        // Downsell payment done -> Go to Final
        else if (step === 'DOWNSELL_PAYMENT') {
            setStep('FINAL_SUCCESS');
        }
    }, 1500);
  };

  const handleAcceptUpsell = () => {
      setStep('LOADING_PIX');
      // Upsell: Lifetime Access for R$ 97.00
      generatePix(97.00, 'UPSELL_PAYMENT');
  };

  const handleDeclineUpsell = () => {
      setStep('DOWNSELL_OFFER');
  };

  const handleAcceptDownsell = () => {
      setStep('LOADING_PIX');
      // Downsell: Adult Pack + 4K for R$ 19.90
      generatePix(19.90, 'DOWNSELL_PAYMENT');
  };

  const handleDeclineDownsell = () => {
      setStep('FINAL_SUCCESS');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onClick={step === 'FINAL_SUCCESS' ? onClose : undefined}></div>

      <div className="glass-modal relative w-full max-w-md rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in border-t border-red-500/50 overflow-y-auto max-h-[90vh]">
        
        {step !== 'FINAL_SUCCESS' && (
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        )}

        {/* --- STEP 1: INITIAL FORM --- */}
        {step === 'FORM' && (
          <>
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Finalizar Compra</h3>
                <p className="text-red-500 font-bold text-lg">{planTitle} - {planPrice}</p>
            </div>
            <form onSubmit={handleSubmitInitial} className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
                <input type="text" required className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-600 outline-none" placeholder="Seu nome" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                <input type="email" required className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-600 outline-none" placeholder="seu@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">CPF (Necessário para o PIX)</label>
                <input type="text" required maxLength={14} className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-600 outline-none" placeholder="000.000.000-00" value={formData.cpf} onChange={handleCpfChange} />
                </div>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2">
                <span>GERAR PIX</span>
                </button>
            </form>
          </>
        )}

        {/* --- STEP 2: LOADING --- */}
        {step === 'LOADING_PIX' && (
          <div className="py-12 flex flex-col items-center justify-center space-y-4">
             <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
             <p className="text-gray-300 animate-pulse">Gerando cobrança...</p>
          </div>
        )}

        {/* --- STEP 3: QR CODE DISPLAY (Generic for Initial, Upsell, Downsell) --- */}
        {(step === 'WAITING_PAYMENT' || step === 'UPSELL_PAYMENT' || step === 'DOWNSELL_PAYMENT') && pixData && (
          <div className="flex flex-col items-center animate-fade-in">
            <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-white">Pagamento PIX</h3>
                <p className="text-sm text-gray-400">Escaneie para liberar seu acesso</p>
            </div>
            <div className="bg-white p-4 rounded-xl mb-4 shadow-xl">
               <img src={pixData.qr_code_url || `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixData.qr_code)}`} alt="QR Code PIX" className="w-48 h-48" />
            </div>
            <div className="w-full space-y-3 mb-6">
              <div className="relative">
                <input type="text" readOnly value={pixData.qr_code} className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-xs text-gray-400 font-mono pr-16" />
                <button onClick={() => { navigator.clipboard.writeText(pixData.qr_code); alert("Código copiado!"); }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1.5 rounded">Copiar</button>
              </div>
            </div>
            
            {/* Simulation Button */}
            <button onClick={simulatePaymentConfirmation} disabled={isCheckingPayment} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 mb-2">
                {isCheckingPayment ? 'Verificando...' : 'JÁ FIZ O PAGAMENTO'}
            </button>
            <p className="text-xs text-gray-500">O sistema verifica automaticamente em instantes.</p>
          </div>
        )}

        {/* --- STEP 4: PAYMENT SUCCESS TRANSITION --- */}
        {step === 'PAYMENT_SUCCESS' && (
            <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Pagamento Confirmado!</h3>
                <p className="text-gray-300">Aguarde, temos um presente para você...</p>
            </div>
        )}

        {/* --- STEP 5: UPSELL OFFER --- */}
        {step === 'UPSELL_OFFER' && (
            <div className="text-center animate-fade-in">
                <div className="bg-red-600/20 border border-red-500 rounded-lg p-3 mb-6 inline-block">
                    <span className="text-red-500 font-bold uppercase tracking-widest text-xs">⚠️ ATENÇÃO: OFERTA ÚNICA</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                    NÃO FECHE ESSA TELA!
                </h2>
                <p className="text-gray-300 mb-6 text-sm">
                    Você acabou de desbloquear uma oportunidade exclusiva. Gostaria de fazer o upgrade para o <span className="text-yellow-400 font-bold">PLANO VITALÍCIO</span> e nunca mais pagar mensalidade?
                </p>
                
                <div className="glass-card bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-yellow-500/30 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1">80% OFF</div>
                    <div className="text-gray-400 text-sm line-through">De R$ 497,00</div>
                    <div className="text-4xl font-black text-white mb-2">Por R$ 97,00</div>
                    <p className="text-sm text-gray-400">Pagamento único. Acesso para sempre.</p>
                </div>

                <div className="space-y-3">
                    <button onClick={handleAcceptUpsell} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-105">
                        SIM! QUERO ACESSO VITALÍCIO
                    </button>
                    <button onClick={handleDeclineUpsell} className="text-gray-500 text-sm hover:text-white underline">
                        Não, obrigado. Prefiro pagar mensalidade.
                    </button>
                </div>
            </div>
        )}

        {/* --- STEP 6: DOWNSELL OFFER --- */}
        {step === 'DOWNSELL_OFFER' && (
            <div className="text-center animate-fade-in">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Ok, entendemos...
                </h2>
                <p className="text-gray-300 mb-6 text-sm">
                    Mas antes de ir, que tal turbinar seu plano atual? Adicione o <span className="text-red-500 font-bold">Pacote Adulto + 4K Ultra</span> por um valor simbólico.
                </p>
                
                <div className="glass-card bg-gray-900 p-4 rounded-xl border border-red-500/30 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="text-left">
                            <div className="text-white font-bold">Pacote Premium Extra</div>
                            <div className="text-xs text-gray-400">+ Canais Adultos e 4K</div>
                        </div>
                        <div className="text-right">
                            <div className="text-xl font-black text-green-400">R$ 19,90</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <button onClick={handleAcceptDownsell} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all">
                        ADICIONAR POR R$ 19,90
                    </button>
                    <button onClick={handleDeclineDownsell} className="text-gray-500 text-sm hover:text-white">
                        Não, quero apenas meu plano básico.
                    </button>
                </div>
            </div>
        )}

        {/* --- STEP 7: FINAL SUCCESS --- */}
        {step === 'FINAL_SUCCESS' && (
            <div className="text-center py-12 animate-fade-in">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(34,197,94,0.6)] animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h2 className="text-3xl font-black text-white mb-4">Tudo Pronto!</h2>
                <p className="text-gray-300 mb-8 text-lg">
                    Seu acesso foi enviado para o email:<br/>
                    <span className="text-white font-bold">{formData.email}</span>
                </p>
                <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-400 mb-8">
                    <p>Verifique também sua caixa de SPAM ou Lixo Eletrônico.</p>
                </div>
                <button onClick={onClose} className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                    FECHAR E ACESSAR
                </button>
            </div>
        )}

      </div>
    </div>
  );
};

export default CheckoutModal;