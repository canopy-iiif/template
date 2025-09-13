// Default Canopy UI enabled. Remove lines below to disable.
module.exports = {
  presets: [require('@canopy-iiif/ui/canopy-iiif-preset')],
  content: [
    './content/**/*.{mdx,html}',
    './site/**/*.html',
    './site/**/*.js',
    './packages/ui/**/*.{js,jsx,ts,tsx}',
    './packages/lib/components/**/*.{js,jsx}',
  ],
  theme: { extend: {} },
  corePlugins: {
    // preflight: false, // uncomment to disable base reset
  },
  plugins: [require('@canopy-iiif/ui/canopy-iiif-plugin')],
  safelist: [
    // Add dynamic classes here if needed
  ],
};
