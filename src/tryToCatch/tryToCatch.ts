export async function tryToCatch<T extends (...args: any) => PromiseLike<any>>(
  fn: T,
  ...args: Parameters<T>
): Promise<readonly [unknown] | readonly [null, Awaited<ReturnType<T>>]> {
  try {
    const result: Awaited<ReturnType<T>> = await fn(...(args as any[]));
    return [null, result] as const;
  } catch (e: unknown) {
    return [e] as const;
  }
}
