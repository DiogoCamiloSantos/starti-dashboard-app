import 'reflect-metadata';

function readMetadata(target: any, propertyKey: string) {
  const required = Reflect.getMetadata('required', target, propertyKey);
  const maxLength = Reflect.getMetadata('maxLength', target, propertyKey);

  return {
    required,
    maxLength,
  };
}


export default readMetadata;
