# Filament & React

For Filament, we have to register a hook, so it enables the `viteReactRefresh` plugin.

Check below the example on the Filament DemoReact page.

```php {6-8,18-21}
<?php

namespace App\Filament\Filament\Pages;

use Filament\Pages\Page;
use Filament\Support\Facades\FilamentView;
use Filament\View\PanelsRenderHook;
use Illuminate\Foundation\Vite;

class DemoReact extends Page
{
    protected static ?string $navigationIcon = 'icon-react';

    protected static string $view = 'filament.filament.pages.demo-react';

    public function mount()
    {
        FilamentView::registerRenderHook(
            name: PanelsRenderHook::HEAD_START,
            hook: fn() => app(Vite::class)->reactRefresh(),
        );
    }
}

```
