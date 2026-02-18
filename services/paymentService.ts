import { PixResponse } from "../types";

// Agora apontamos para nossa própria rota segura na Vercel
const INTERNAL_API_URL = "/api/payment";

export const createPixPayment = async (
    name: string, 
    email: string, 
    cpf: string, 
    valueString: string | number
): Promise<PixResponse> => {
    
    let valueInCents = 0;

    if (typeof valueString === 'number') {
        valueInCents = valueString * 100;
    } else {
        const cleanValue = valueString.replace('R$', '').replace('.', '').replace(',', '').trim();
        valueInCents = parseInt(cleanValue, 10);
    }

    const cleanCPF = cpf.replace(/\D/g, '');

    const payload = {
        name,
        email,
        cpf: cleanCPF,
        valueInCents
    };

    try {
        // Chamada para nossa API Serverless (/api/payment)
        // Não enviamos token aqui. O token está seguro no servidor.
        const response = await fetch(INTERNAL_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Payment Service Error:", errorData);
            throw new Error("Erro ao criar pagamento PIX");
        }

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Client API Error", error);
        throw error;
    }
};

export const checkPaymentStatus = async (transactionId: number): Promise<string> => {
    // Simulação mantida conforme lógica anterior
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('pending'); 
        }, 500);
    });
};