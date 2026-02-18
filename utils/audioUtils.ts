/**
 * Decodes a base64 string to an ArrayBuffer.
 */
export function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Converts raw PCM16 data to a WAV Blob.
 */
export function pcmToWav(pcm16: Int16Array, sampleRate: number): Blob {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = numChannels * sampleRate * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);
  const buffer = new ArrayBuffer(44 + pcm16.byteLength);
  const view = new DataView(buffer);
  let offset = 0;

  const writeString = (s: string) => {
    for (let i = 0; i < s.length; i++) {
      view.setUint8(offset + i, s.charCodeAt(i));
    }
    offset += s.length;
  };

  const writeUint32 = (i: number) => {
    view.setUint32(offset, i, true);
    offset += 4;
  };

  const writeUint16 = (i: number) => {
    view.setUint16(offset, i, true);
    offset += 2;
  };

  writeString('RIFF');
  writeUint32(36 + pcm16.byteLength);
  writeString('WAVE');
  writeString('fmt ');
  writeUint32(16);
  writeUint16(1);
  writeUint16(numChannels);
  writeUint32(sampleRate);
  writeUint32(byteRate);
  writeUint16(blockAlign);
  writeUint16(bitsPerSample);
  writeString('data');
  writeUint32(pcm16.byteLength);

  const pcmBytes = new Uint8Array(pcm16.buffer);
  for (let i = 0; i < pcm16.byteLength; i++) {
    view.setUint8(offset + i, pcmBytes[i]);
  }

  return new Blob([buffer], { type: 'audio/wav' });
}