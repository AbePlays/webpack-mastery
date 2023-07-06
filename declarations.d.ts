// We need to tell TypeScript that when we write "import resource from './resource.extension'" we mean to load a module (to look for a './resource.extension.d.ts' for its types).

declare module '*.png'
declare module '*.scss'
