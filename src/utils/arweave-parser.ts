// This is an experiment to get Arweave transaction data in React Native.
// Presently, the arweave-js package is finicky, due to its dependence on Node and browser primitives.
import axios from 'axios';
import base64 from 'react-native-base64';

const instance = axios.create({
  baseURL: 'https://arweave.net',
  maxContentLength: 1024 * 1024 * 512,
  timeout: 20000,
});

// Copied from StackOverflow
export const base64UrlToString = (input: string) => {
  // Replace non-url compatible chars with base64 standard chars
  input = input.replace(/-/g, '+').replace(/_/g, '/');

  // Pad out with standard base64 required padding characters
  var pad = input.length % 4;
  if (pad) {
    if (pad === 1) {
      throw new Error(
        'InvalidLengthError: Input base64Url string is the wrong length to determine padding'
      );
    }
    input += new Array(5 - pad).join('=');
  }

  return base64.decode(input);
};

export const getTransactionData = async (id: string) => {
  const response = await instance.get(`tx/${id}/data`);

  console.log(base64.decode(base64UrlToString(response.data)));
};
