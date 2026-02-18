import { SuggestionResult } from "../types";
import { base64ToArrayBuffer, pcmToWav } from "../utils/audioUtils";

// Modelos
const TEXT_MODEL = "gemini-2.0-flash"; // Usando modelo estável para REST
const TTS_MODEL = "gemini-2.0-flash-exp"; // Exemplo para áudio (ajustar conforme suporte REST)

// Endpoint interno
const API_ENDPOINT = "/api/gemini";

// Função auxiliar para chamar nosso proxy
async function callGeminiProxy(model: string, contents: any[], config: any = {}) {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, contents, config })
  });

  if (!response.ok) {
    throw new Error(`Proxy error: ${response.statusText}`);
  }
  return response.json();
}

export const generateBingeSuggestion = async (topic: string): Promise<SuggestionResult> => {
  const systemInstruction = "Você é o Curador Inteligente da DezPila. Sua função é criar uma sugestão de 'maratona' de filmes/séries criativa e concisa, baseada no tema fornecido. Mencione 3 a 5 títulos fictícios que seriam apropriados para um serviço de streaming completo, como se fossem reais (inclua gênero e ano fictício). Responda com um título divertido para a maratona e a lista de sugestões. Use o português do Brasil.";
  const userQuery = `Gere uma maratona de streaming baseada neste tema: "${topic}"`;

  try {
    // Montando payload compatível com REST API do Google
    const contents = [
      { role: "user", parts: [{ text: systemInstruction + "\n\n" + userQuery }] }
    ];

    const data = await callGeminiProxy(TEXT_MODEL, contents);

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Não foi possível gerar sugestões no momento.";
    
    // Simplificando sources pois via REST raw pode variar a estrutura de grounding
    const sources: any[] = []; 

    return { text, sources };

  } catch (error) {
    console.error("Error generating suggestion:", error);
    throw new Error("Falha ao gerar sugestão.");
  }
};

export const generateTTSPreview = async (): Promise<string> => {
  // Nota: A geração de áudio nativa via REST pode exigir configurações específicas de modelo
  // Para manter compatibilidade com o proxy genérico, enviamos a config padrão
  const textToSpeak = "Escute bem. O ano de 2025 está acabando. Você vai mesmo entrar em 2026 pagando caro em streaming? Não seja ingênuo. Com o DezPila, você tem acesso vitalício a filmes, séries e canais por um preço ridículo. A promoção de final de ano vai acabar a qualquer momento. Garanta o plano Trimestral agora e comece o ano novo assistindo tudo o que você quiser. Clique em comprar agora.";

  try {
    // Atenção: Modelos de áudio podem variar. Usando flash standard para simulação texto->texto se áudio falhar ou modelo específico se suportado.
    // Como o SDK foi removido, a lógica de áudio nativa precisa ser adaptada para o endpoint REST que suporte audio ou usar uma API de TTS externa.
    // Para este fix, vamos assumir que o proxy lida com o modelo correto se a chave tiver permissão.
    
    // Se o modelo de áudio não estiver disponível via REST simples, isso pode falhar.
    // Fallback: Retornar string vazia ou erro controlado.
    
    /* 
       NOTA: A API REST do Gemini para áudio tem estrutura diferente.
       Para garantir estabilidade sem o SDK no cliente, recomendaríamos usar uma API de TTS dedicada (ex: ElevenLabs ou Google TTS Cloud).
       Se o modelo 'gemini-2.0-flash-exp' suportar saída de áudio via REST, o payload é similar.
    */

    return ""; // Desabilitado temporariamente no refactor de segurança para evitar quebras complexas sem SDK. 
    // Recomendo reativar usando uma API key segura no server side para um serviço de TTS dedicado.

  } catch (error) {
    console.error("Error generating TTS:", error);
    throw new Error("Falha ao gerar áudio.");
  }
};