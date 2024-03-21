import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    replace({
      'import.meta.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
});
