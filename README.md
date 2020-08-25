# Object extention for JavaScript.

Like Kotlin.

## `let`, `also`, `run`, `apply`

```typescript
const foo = {};
foo.let(it => console.log(it)); // {}
foo.run(function { console.log(this) }); // {}
```
