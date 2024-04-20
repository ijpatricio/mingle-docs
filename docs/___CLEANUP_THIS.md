![Intro.png](Readme-Intro.png)

# What is this?

This is a way of using Vue/React components in a Laravel Livewire app.

# Why?

This is very different from the conventional ways. We can pick any flavour of Livewire, Alpine, Vue, React, in the same app. And change that variations on a per-page basis.

Why would we want this?

- You already knos a falvour of JS and want to incrementally adopt Laravel/Livewire as a backend.
- Landing pages, marketing pages, etc. => Plenty of React/Vue components.
- JS ecosystem has an infinite amount of tools and libraries.
- Being on Blade, SSR for SEO is there right from the beginning.
- We want to use Vue and React, but I don't want to use SPA nor Inertia.
    - I want to use Blade and Livewire, while keeping the possibility to use Vue/React components.
- Having a Livewire component as a container, in our Vue/React component we get to call PHP functions simply by calling `$wire.method()`. We don't have to write an Ajax request, a route, a controller, etc.

# How?

This is a starter as it stands.
I got a little paralysed before publishing as package by thinking on implementing in existing projects, since this means to tinker with existing JS files and vite config etc.

Maybe there's a good "compromise/middle ground":
First: having a package we can install at any point.
Then:
- If in a new project, just run `php artisan mingle:install`, because the file states is known, I can update them with confidence.
- If not, follow a guide with "this couple of steps".

Sounds like what I'll do. For the time being you can use this as a starter kit.
