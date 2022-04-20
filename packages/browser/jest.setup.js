import { Crypto } from "@peculiar/webcrypto";
import { TextEncoder, TextDecoder } from "util";

Object.assign(window, {
  crypto: new Crypto(),
  TextEncoder,
  TextDecoder,
});
