import "../";
describe("Scope function like Kotlin.", () => {
  describe("Object#run", () => {
    it("could be call 'run' but must pass legacy function object.", () => {
      const target: Object = { foo: "bar" };
      const spy = jest.fn();
      target.run(spy);
      expect(spy.mock.calls.length).toEqual(1);
      expect(spy.mock.calls[0][0]).toEqual(undefined);
    });

    it("should be 'this' to be target object.", () => {
      const target: Object = { foo: "bar" };
      target.run(function() {
        expect(this).toEqual(target);
      });
    });

    it("should return callback returned value.", () => {
      const target: Object = { foo: "bar" };
      const actual = target.run(function() {
        return { bar: "foo" };
      });
      expect(actual).toEqual({ bar: "foo" });
    });

    it("could not use this when pass arrow function.", () => {
      const target: Object = { foo: "bar" };
      const actual = target.run(() => {
        // console.log(this); // to be error.
      });
    });
  });

  describe("Object#let", () => {
    it("could be call 'let'. and could pass arrow function.", () => {
      const target: { foo: "bar" } = { foo: "bar" };
      target.let(it => it);
    })

    it("should be pass 'this' to first variable.", () => {
      const target: { foo: "bar" } = { foo: "bar" };
      const spy = jest.fn();
      target.let(spy);
      expect(spy.mock.calls.length).toBe(1);
      expect(spy.mock.calls[0][0]).toBe(target);
    })

    it("should returns callback returned value.", () => {
      const target: { foo: "bar" } = { foo: "bar" };
      const actual = target.let(() => ({ bar: "foo" }));
      expect(actual).toEqual({ bar: "foo" });
    })
  });

  describe("Object#apply", () => {
    it("could be call 'apply' but must pass legacy function object.", () => {
      const target: Object = { foo: "bar" };
      const spy = jest.fn();
      target.apply(spy);
      expect(spy.mock.calls.length).toEqual(1);
      expect(spy.mock.calls[0][0]).toEqual(undefined);
    });

    it("apply should be 'this' to be target object.", () => {
      const target: Object = { foo: "bar" };
      target.apply(function() {
        expect(this).toEqual(target);
      });
    });

    it("apply should return callback returned value.", () => {
      const target: Object = { foo: "bar" };
      const actual = target.apply(function() {
        return { bar: "foo" };
      });
      expect(actual).toEqual(target);
    });
  });
});
