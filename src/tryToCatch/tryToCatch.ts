type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

export async function tryToCatch<T extends (...args: any) => any>(
  fn: T,
  ...args: Parameters<T>
): Promise<[null, Awaited<ReturnType<T>>] | [unknown]> {
  try {
    const result: ReturnType<T> = Array.isArray(args)
      ? await fn(...(args as any[]))
      : await fn(args);

    return [null, result];
  } catch (e: unknown) {
    return [e];
  }
}
