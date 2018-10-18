export default function autoBind(classComponent) {
  const bindClassMethods = Object.getOwnPropertyNames(classComponent.prototype);
  bindClassMethods.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}
