import { MarkdownTypes } from "../src/components/markdown";
import { Badge } from "../src/components/badge";

function stringToBe(expected: string, toBe: string): void {
  expect(expected)
    .toBe(toBe)
}

function markdownToBe(expect: MarkdownTypes, toBe: string): void {
  stringToBe(expect.toString(), toBe);
}

function badgeToBe(expect: Badge | string, toBe: string) {
  if(typeof expect === 'string')
    stringToBe(expect, toBe)
  else
    stringToBe(expect.toString(), toBe)
}

export { stringToBe, markdownToBe, badgeToBe }