const _ = {};
export default _;

declare global {
  interface Object {
    run<T, U>(this: T, fn: (this: T) => U): U;
    let<T, U>(this: T, fn: (it: T) => U): U;
    apply<T>(this: T, fn: (this: T) => void): T;
    also<T>(this: T, fn: (it: T) => void): T;
  }
}

Object.prototype.run = function<T, U>(this: T, fn: (this: T) => U): U {
  return (fn as any).bind(this)();
}

Object.prototype.let = function<T, U>(fn: (it: T) => U): U {
  return fn(this as T);
}

Object.prototype.apply = function<T>(this: T, fn: (this: T) => void): T {
  return (fn as any).bind(this)(), this;
}
