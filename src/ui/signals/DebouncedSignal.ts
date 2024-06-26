import { Injector, WritableSignal, effect, signal } from '@angular/core';

interface DebouncedOptions {
  injector?: Injector;
}

export function debouncedSignal<T>(
  initialValue: T,
  delay: number = 500,
  options?: DebouncedOptions
): WritableSignal<T> {
  const internal = signal<T>(initialValue);
  const output = signal<T>(initialValue);
  const setOutput = output.set;
  let timeoutId: ReturnType<typeof setTimeout>;

  effect(() => {
    clearTimeout(timeoutId);
    const nextValue = internal();
    timeoutId = setTimeout(() => setOutput(nextValue), delay);
  }, options);

  output.set = (value) => internal.set(value);
  output.update = (updateFn) => internal.set(updateFn(output()));

  return output;
}
