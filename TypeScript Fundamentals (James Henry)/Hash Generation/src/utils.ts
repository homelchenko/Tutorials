export type ValidSymbol = '#' | '$';

export interface GenerateOptions {
    symbol: ValidSymbol,
    length: number,
}

export function generateRandomID(symbol: ValidSymbol, length: number): string;
export function generateRandomID(options: GenerateOptions): string;
export function generateRandomID(optionsOrSymbol: GenerateOptions | ValidSymbol, length?: number): string {
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36)
            .substr(2, length);
    }

    return optionsOrSymbol.symbol + Math.random().toString(36)
        .substr(2, optionsOrSymbol.length);
}

export function Component(options: { id: string }) {
    return (target) => {
        target.id = options.id;
    }
}