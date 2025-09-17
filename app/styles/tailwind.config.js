// Default Canopy UI enabled. Remove lines below to disable.
module.exports = {
  presets: [require('@canopy-iiif/app/ui/canopy-iiif-preset')],
  content: [
    './content/**/*.{mdx,html}',
    './site/**/*.html',
    './site/**/*.js',
    './packages/app/ui/**/*.{js,jsx,ts,tsx}',
    './packages/app/lib/iiif/components/**/*.{js,jsx}',
  ],
  theme: { extend: {} },
  corePlugins: {
    // preflight: false, // uncomment to disable base reset
  },
  plugins: [require('@canopy-iiif/app/ui/canopy-iiif-plugin')],
  safelist: [
    // Add dynamic classes here if needed
  ],
};
