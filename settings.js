import esbuildPluginTsc from 'esbuild-plugin-tsc'

export function createBuildSettings(options) {
    return {
        entryPoints: ['src/index.tsx'],
        outfile: 'dist/bundle.js',
        bundle: true,
        plugins: [
            esbuildPluginTsc({
                force: true,
            }),
        ],
        loader: { '.png': 'file', '.svg': 'file' },
        ...options,
    }
}
