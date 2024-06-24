import 'reflect-metadata';

export function Required(target: any, propertyKey: string) {
  Reflect.defineMetadata('required', true, target, propertyKey);
}

export function MaxLength(length: number) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('maxLength', length, target, propertyKey);
  };
}
