import { resolve } from 'path';

import alias from '@rollup/plugin-alias';
import sveltePreprocess from 'svelte-preprocess';
import pugFilterMarkdown from '@metamodern/pug-filter-markdown';
import sugarss from 'sugarss';
import postcssEasyImport from 'postcss-easy-import';
import tailwindcss from 'tailwindcss';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import { copy } from '@metamodern/copy-fontsource';

const browsers = '> 1.5% in US, Firefox ESR, not ie <= 11, not dead';

const config = ({
  context = './',
  development = false,
} = {}) => ({
  browsers,
  entry: 'routes/index.svelte',
  rollupInputPlugins: [
    alias({
      entries: {
        '$': resolve(context, 'src/components'),
        '@': resolve(context, 'src/routes'),
      },
    }),
  ],
  sveltePreprocess: sveltePreprocess({
    pug: {
      filters: { md: pugFilterMarkdown },
    },
    postcss: {
      parser: sugarss,
      plugins: [].concat(
        postcssEasyImport(),
        tailwindcss(),
        development ? [] : postcssPresetEnv({ browsers }),
        development ? [] : cssnano({ preset: 'default' }),
      ),
    },
  }),
  onRender: (context, options) => copy(context, options),
});

export default config;
