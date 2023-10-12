import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';
import rehypePrettyCode from "rehype-pretty-code"

/** @type {import('rehype-pretty-code').Options} */
const options = {
    // See Options section below.
    theme: 'vitesse-light', // more themes: https://unpkg.com/browse/shiki@0.14.2/themes/
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        {enforce: 'pre', ...mdx(
            /* jsxImportSource: …, otherOptions… */
                {
                    rehypePlugins: [
                        [rehypePrettyCode, options]
                    ]
                }
            )},
        react(),

    ],
})
