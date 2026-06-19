export function trim(str, chars) {
    if (!chars)
        return str.trim();
    const escaped = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    return str.replace(new RegExp(`^[${escaped}]+|[${escaped}]+$`, "g"), "");
}
export function trimStart(str, chars) {
    if (!chars)
        return str.trimStart();
    const escaped = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    return str.replace(new RegExp(`^[${escaped}]+`), "");
}
export function trimEnd(str, chars) {
    if (!chars)
        return str.trimEnd();
    const escaped = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    return str.replace(new RegExp(`[${escaped}]+$`), "");
}
export function pad(str, length, fillChar = " ", align = "end") {
    const needed = Math.max(0, length - str.length);
    if (needed === 0)
        return str;
    if (align === "start")
        return fillChar.repeat(needed).slice(0, needed) + str;
    if (align === "both") {
        const left = Math.floor(needed / 2);
        const right = needed - left;
        return fillChar.repeat(left) + str + fillChar.repeat(right);
    }
    return str + fillChar.repeat(needed).slice(0, needed);
}
export function truncate(str, maxLength, ellipsis = "...") {
    if (str.length <= maxLength)
        return str;
    const cutoff = Math.max(0, maxLength - ellipsis.length);
    if (cutoff === 0)
        return ellipsis.slice(0, maxLength);
    return str.slice(0, cutoff) + ellipsis;
}
export function truncateMiddle(str, maxLength, ellipsis = "...") {
    if (str.length <= maxLength)
        return str;
    const available = Math.max(0, maxLength - ellipsis.length);
    const start = Math.ceil(available / 2);
    const end = Math.floor(available / 2);
    return str.slice(0, start) + ellipsis + str.slice(str.length - end);
}
