import { describe, expect, it } from "vitest";
import { trim, trimStart, trimEnd, pad, truncate, truncateMiddle } from "./stringUtils";

describe("trim", () => {
  it("trims whitespace by default", () => {
    expect(trim("  hello  ")).toBe("hello");
  });
  it("trims custom chars from both ends", () => {
    expect(trim("--hello--", "-")).toBe("hello");
  });
  it("trims multiple custom chars", () => {
    expect(trim("$$$hello###", "$#")).toBe("hello");
  });
  it("returns empty string unchanged", () => {
    expect(trim("")).toBe("");
  });
  it("handles string that is only trim chars", () => {
    expect(trim("---", "-")).toBe("");
  });
});

describe("trimStart", () => {
  it("trims whitespace from start only", () => {
    expect(trimStart("  hello  ")).toBe("hello  ");
  });
  it("trims custom chars from start only", () => {
    expect(trimStart("--hello--", "-")).toBe("hello--");
  });
});

describe("trimEnd", () => {
  it("trims whitespace from end only", () => {
    expect(trimEnd("  hello  ")).toBe("  hello");
  });
  it("trims custom chars from end only", () => {
    expect(trimEnd("--hello--", "-")).toBe("--hello");
  });
});

describe("pad", () => {
  it("pads end by default", () => {
    expect(pad("hi", 5)).toBe("hi   ");
  });
  it("pads start when align is start", () => {
    expect(pad("hi", 5, " ", "start")).toBe("   hi");
  });
  it("pads both sides when align is both", () => {
    expect(pad("hi", 6, " ", "both")).toBe("  hi  ");
  });
  it("pads both sides unevenly — extra char goes to right", () => {
    expect(pad("hi", 5, " ", "both")).toBe(" hi  ");
  });
  it("uses custom fill char", () => {
    expect(pad("hi", 5, "0", "start")).toBe("000hi");
  });
  it("returns string unchanged when already at target length", () => {
    expect(pad("hello", 5)).toBe("hello");
  });
  it("returns string unchanged when longer than target length", () => {
    expect(pad("hello world", 5)).toBe("hello world");
  });
});

describe("truncate", () => {
  it("truncates with default ellipsis", () => {
    expect(truncate("hello world", 8)).toBe("hello...");
  });
  it("returns string unchanged when within maxLength", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });
  it("returns string unchanged when equal to maxLength", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });
  it("uses custom ellipsis", () => {
    expect(truncate("hello world", 7, "…")).toBe("hello …");
  });
  it("handles maxLength shorter than ellipsis", () => {
    expect(truncate("hello", 2, "...")).toBe("..");
  });
  it("handles empty string", () => {
    expect(truncate("", 5)).toBe("");
  });
});

describe("truncateMiddle", () => {
  it("truncates the middle with default ellipsis", () => {
    expect(truncateMiddle("hello world", 8)).toBe("hel...ld");
  });
  it("returns string unchanged when within maxLength", () => {
    expect(truncateMiddle("hello", 10)).toBe("hello");
  });
  it("returns string unchanged when equal to maxLength", () => {
    expect(truncateMiddle("hello", 5)).toBe("hello");
  });
  it("uses custom ellipsis", () => {
    expect(truncateMiddle("hello world!", 8, "~")).toBe("hell~ld!");
  });
  it("handles empty string", () => {
    expect(truncateMiddle("", 5)).toBe("");
  });
});
