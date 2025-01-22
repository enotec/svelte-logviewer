const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function encode(str: string): Uint8Array {
	return encoder.encode(str);
}

export function decode(buffer: Uint8Array): string {
	return decoder.decode(buffer);
}
