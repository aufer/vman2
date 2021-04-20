export function ActionLog(): any {
  return function(target, property, descriptor) {
    const originalValue = descriptor.value;
    descriptor.value = new Proxy(originalValue, {
      apply: function(target1, thisArg, args) {
        console.log(`[${thisArg.constructor.name}:${property}] with user ${args[0].user}`);
        return originalValue.apply(thisArg, args);
      }
    });
  };
}
