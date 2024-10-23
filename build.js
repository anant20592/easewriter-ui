import * as esbuild from 'esbuild'
import { createBuildSettings } from './settings.js'

const settings = createBuildSettings({
    //sourcemap: true,
    // banner: {
    //     js: `new EventSource('/esbuild').addEventListener('change', () => location.reload());`,
    // },
})

//const ctx = await esbuild.context(settings)
let result = await esbuild.build(settings)
console.log(result)