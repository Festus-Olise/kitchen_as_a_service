// next.config.js
const { parsed: localEnv } = require('dotenv').config();
import { EnvironmentPlugin } from 'webpack';

export const reactStrictMode = true;
export function webpack(config) {
  config.plugins.push(new EnvironmentPlugin(localEnv));
  return config;
}
