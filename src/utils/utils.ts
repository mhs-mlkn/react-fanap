import { createHash, randomBytes } from "crypto-browserify";

export function isIOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod"
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

export function parseQueryString(queryString = "") {
  return queryString
    ? queryString
        .split("&")
        .map(str => {
          let [key, value] = str.split("=");
          return { [key]: decodeURI(value) };
        })
        .reduce((prev, curr) => Object.assign(prev, curr))
    : {};
}

export function generateVerifier(): string {
  return base64URLEncode(randomBytes(32));
}

export function getChallenegeCode(token_verifier: string): string {
  return base64URLEncode(sha256(token_verifier));
}

export function base64URLEncode(buffer: Buffer): string {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export function sha256(buffer: any): Buffer {
  return createHash("sha256").update(buffer).digest();
}
