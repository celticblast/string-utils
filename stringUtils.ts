type PadAlign = "start" | "end" | "both";

export function trim(str: string, chars?: string): string {
  if (!chars) return str.trim();
  const escaped = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  return str.replace(new RegExp(`^[${escaped}]+|[${escaped}]+$`, "g"), "");
}

export function trimStart(str: string, chars?: string): string {
  if (!chars) return str.trimStart();
  const escaped = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  return str.replace(new RegExp(`^[${escaped}]+`), "");
}

export function trimEnd(str: string, chars?: string): string {
  if (!chars) return str.trimEnd();
  const escaped = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  return str.replace(new RegExp(`[${escaped}]+$`), "");
}

export function pad(str: string, length: number, fillChar = " ", align: PadAlign = "end"): string {
  const needed = Math.max(0, length - str.length);
  if (needed === 0) return str;
  if (align === "start") return fillChar.repeat(needed).slice(0, needed) + str;
  if (align === "both") {
    const left = Math.floor(needed / 2);
    const right = needed - left;
    return fillChar.repeat(left) + str + fillChar.repeat(right);
  }
  return str + fillChar.repeat(needed).slice(0, needed);
}

export function truncate(str: string, maxLength: number, ellipsis = "..."): string {
  if (str.length <= maxLength) return str;
  const cutoff = Math.max(0, maxLength - ellipsis.length);
  if (cutoff === 0) return ellipsis.slice(0, maxLength);
  return str.slice(0, cutoff) + ellipsis;
}

export function truncateMiddle(str: string, maxLength: number, ellipsis = "..."): string {
  if (str.length <= maxLength) return str;
  const available = Math.max(0, maxLength - ellipsis.length);
  const start = Math.ceil(available / 2);
  const end = Math.floor(available / 2);
  return str.slice(0, start) + ellipsis + str.slice(str.length - end);
}
