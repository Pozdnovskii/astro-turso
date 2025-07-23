// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  adapter: vercel()
});