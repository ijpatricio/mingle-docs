# Manual Instructions

In this page, we'll cover the manual changes we have to make on the project files to get Mingle working.

## File: `vite.config.js`

- We need to import `path`, and `vue` (if you choose to use Vue)
- We need to define the alias for the Mingle resources, since it's inside `vendor`, not `node_modules`.

```js{3,4,7-11,13-20}
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            "@mingle": path.resolve(__dirname, "/vendor/ijpatricio/mingle/resources/js"),
        },
    },
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
```


## Layout files

On every layout where we want to use Mingle, we need to include the `stack` so that Mingle can inject the necessary scripts.

On:

- `resources/views/layouts/guest.blade.php`
- `resources/views/layouts/app.blade.php`
- Or any other layout you might have

Add the stack `scripts` on the head of the document.

```html{8}
    (...)
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @stack('scripts')
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="font-sans text-gray-900 antialiased">
        
    (...)
```


