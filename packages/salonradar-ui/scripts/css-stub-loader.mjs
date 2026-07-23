export function resolve(specifier, context, next) {
  if (specifier.endsWith('.css')) {
    return { url: `css-stub:${specifier}`, shortCircuit: true };
  }

  return next(specifier, context);
}

export function load(url, context, next) {
  if (url.startsWith('css-stub:')) {
    return { format: 'module', source: 'export default {}', shortCircuit: true };
  }

  return next(url, context);
}
