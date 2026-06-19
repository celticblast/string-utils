type PadAlign = "start" | "end" | "both";
export declare function trim(str: string, chars?: string): string;
export declare function trimStart(str: string, chars?: string): string;
export declare function trimEnd(str: string, chars?: string): string;
export declare function pad(str: string, length: number, fillChar?: string, align?: PadAlign): string;
export declare function truncate(str: string, maxLength: number, ellipsis?: string): string;
export declare function truncateMiddle(str: string, maxLength: number, ellipsis?: string): string;
export {};
