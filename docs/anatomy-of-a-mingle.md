# Anatomy of a Mingle

A Mingle is composed by a Livewire component class and a JS file that loads a JS component.

## Livewire Component

Let's take a look at a component's class:

```php
<?php

namespace App\Livewire;

use Ijpatricio\Mingle\Concerns\InteractsWithMingles;
use Ijpatricio\Mingle\Contracts\HasMingles;
use Livewire\Component;

class ChatApp extends Component implements HasMingles
{
    use InteractsWithMingles;

    public function component(): string
    {
        return 'resources/js/ChatApp/index.js';
    }

    public function mingleData()
    {
        return [
            'message' => 'Message in a bottle 🍾',
        ];
    }

    public function doubleIt($amount)
    {
        return $amount * 2;
    }
}
```

- Method `component()`
  - Returns the path to the JS file that will load the JS component.
- Method `mingleData()`
  - Returns an array of data that will be passed to the JS component on initialization.
- Method `doubleIt()`
  - It's a method that can be called from the JS component, like so: `$wire.doubleIt(5)`


## ReactJS Component

The command will generate 2 files: one for the Mingle registration and another for the JS component.

- `resources/js/ChatApp/index.js`
 
    Here we just register the Mingle and pass the JS component to it. 
    ```js
    import mingle from '@mingle/mingleReact'
    import ChatApp from './ChatApp.jsx'
    
    mingle('resources/js/ChatApp/index.js', ChatApp)
    
    ```        



- `resources/js/ChatApp/ChatApp.jsx`

    Here we can define the Vue component. It's a regular component, we can now import sub-components, use Vue directives, etc.
    
    On initialization, we can retrieve `mingleData`. 
    Also, we use the `wire` to interact with the Livewire component.
    ```jsx
    import React from 'react'
    
    function ChatApp({wire, ...props}) {
    
        const message = props.mingleData.message
    
        console.log(message) // 'Message in a bottle 🍾'
    
        wire.doubleIt(2)
            .then(data => {
                console.log(data) // 4
            })
    
        return (
            <div>
                {/* <!-- Create something great! --> */}
            </div>
        )
    }
    
    export default ChatApp
    ```



## VueJS Component

The command will generate 2 files: one for the Mingle registration and another for the JS component.

- `resources/js/ChatApp/index.js`
 
  Here we just register the Mingle and pass the JS component to it. 
  ```js
  import mingle from '@mingle/mingleVue'
  import ChatApp from './ChatApp.vue'
    
  mingle('resources/js/ChatApp/index.js', ChatApp)
  ```        



- `resources/js/ChatApp/ChatApp.vue`

  Here we can define the Vue component. It's a regular component, we can now import sub-components, use Vue directives, etc.
  
  On initialization, we can retrieve `mingleData`. 
  Also, we use the `wire` to interact with the Livewire component.
  ```vue
  <script setup>
  const props = defineProps({
      wire: {},
      mingleData: {},
  })
  
  const {wire, mingleData} = props
  
  const message = mingleData.message
  
  console.log(message) // 'Message in a bottle 🍾'
  
  wire.doubleIt(2)
      .then(data => {
          console.log(data) // 4
      })
  
  </script>
  
  <template>
      <div>
          <!-- Build something great! -->
      </div>
  </template>
  ```


