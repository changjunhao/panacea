import { Crypto } from "@peculiar/webcrypto";
import { TextEncoder, TextDecoder } from "util";

Object.assign(window, {
  crypto: new Crypto(),
  TextEncoder,
  TextDecoder,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => {
    let matches = false;
    if (query && query.includes("(prefers-color-scheme: light)")) {
      matches = true;
    }
    return {
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  }),
});
