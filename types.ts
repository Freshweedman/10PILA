export interface SuggestionResult {
  text: string;
  sources?: Array<{
    title?: string;
    uri?: string;
  }>;
}

export interface PixResponse {
  id: number;
  qr_code: string;
  qr_code_base64: string;
  qr_code_url: string;
  status: string;
  value: number;
  external_reference?: string;
}

export enum StreamingLogo {
  NETFLIX = 'https://www.10pilaoficial.site/img/Netflix_2015_logo.svg',
  DISNEY = 'https://www.10pilaoficial.site/img/Disney_logo.svg',
  HBO = 'https://www.10pilaoficial.site/img/HBO_Max_Logo.svg',
  AMAZON = 'https://www.10pilaoficial.site/img/Amazon_Prime_Video_logo.svg',
  PARAMOUNT = 'https://www.10pilaoficial.site/img/Paramount_Plus.svg',
  APPLE = 'https://www.10pilaoficial.site/img/Apple_TV_Plus_Logo.svg',
  STAR = 'https://www.10pilaoficial.site/img/star-plus-logo-0.png',
  CRUNCHYROLL = 'https://www.10pilaoficial.site/img/Crunchyroll_Logo.png',
  GLOBOPLAY = 'https://www.10pilaoficial.site/img/Globoplay_logo_2019.png',
}

export const MOVIE_IMAGES = [
  "https://www.10pilaoficial.site/img/filmes/IMG-38.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-53.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-27.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-35.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-49.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-36.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-37.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-40.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-42.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-44.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-51.webp",
  "https://www.10pilaoficial.site/img/filmes/IMG-39.webp",
];