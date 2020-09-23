const def = {};
export default def;

declare global {
  interface Object {
    run<T, U>(this: T, fn: (this: T) => U): U;
    let<T, U>(this: T, fn: (it: T) => U): U;
    apply<T>(this: T, fn: (this: T) => void): T;
    also<T>(this: T, fn: (it: T) => void): T;
  }
}

Object.defineProperty(Object.prototype, "run", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: function<T, U>(this: T, fn: (this: T) => U): U {
    return (fn as any).bind(this)();
  }
});

Object.defineProperty(Object.prototype, "let", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: function<T, U>(fn: (it: T) => U): U {
    return fn(this as T);
  }
});

Object.defineProperty(Object.prototype, "apply", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: function<T>(this: T, fn: (this: T) => void): T {
    return (fn as any).bind(this)(), this;
  }
});

Object.defineProperty(Object.prototype, "also", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: function<T>(this: T, fn: (it: T) => void): T {
    return fn(this), this;
  }
});
