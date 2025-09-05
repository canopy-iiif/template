// Default Canopy presets enabled. Remove lines below to disable.
module.exports = {
  presets: [require('@canopy-iiif/ui/tailwind-preset'), require('@canopy-iiif/ui/tailwind-typography')],
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
  plugins: [
    require('@tailwindcss/typography'), // disable if you don't want prose styles
    // Opt-in: require('@tailwindcss/forms'),
  ],
  safelist: [
    // Add dynamic classes here if needed
  ],
};
