// Proxy seguro para Google Gemini API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server' });
  }

  const { contents, model, config } = req.body;

  // URL base da API REST do Google
  const baseUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const url = `${baseUrl}?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents,
        generationConfig: config || {} // Mapeia config para generationConfig do REST API
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Gemini API Error:", errorData);
      return res.status(response.status).json({ error: 'Error from Gemini API', details: errorData });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Server Proxy Error", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}