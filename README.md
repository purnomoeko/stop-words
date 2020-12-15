# Remove-stop-words
Remove stop words from search query to improve search query result.

## How to use it?

The stop words stored in array, and it will remove every words that listed in those array:

```
const removeStopWords = require('@purnomo_eko/remove-stop-words');

removeStopWords('I want to have relationship with different religion', 'en');

// result will be [ 'relationship', 'different', 'religion' ]

```

## Available language
Now we only support english, any addition will be welcome.
