export default async function handler(req, res) {
  // 1. Segurança: Apenas método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Segurança: Validar Token do Servidor (Variável de Ambiente)
  const token = process.env.PUSHPAY_TOKEN;
  if (!token) {
    console.error('Server Error: PUSHPAY_TOKEN not configured');
    return res.status(500).json({ error: 'Payment configuration error on server' });
  }

  const API_URL = "https://api.pushinpay.com.br/api/pix/cashIn";
  const { name, email, cpf, valueInCents } = req.body;

  // 3. Validação básica
  if (!name || !email || !cpf || !valueInCents) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const payload = {
    value: valueInCents,
    webhook_url: "https://www.10pilaoficial.site/webhook/pix", // Pode configurar via ENV se quiser dinâmico
    external_reference: `DEZPILA-${Date.now()}`,
    payer: {
      name,
      email,
      document: cpf
    }
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Payment Provider Error:", errorData);
      return res.status(response.status).json({ error: 'Error creating PIX', details: errorData });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Server API Error", error);
    return res.status(500).json({ error: 'Internal Server Error processing payment' });
  }
}