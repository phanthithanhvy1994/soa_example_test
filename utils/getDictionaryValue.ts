type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

type Options = {
  keyReturn?: boolean
  data?: Record<string, string>
}

export const getDictionaryValue = <D extends object, KeyPath extends NestedKeyOf<D>>(
  obj: D,
  keyPath: KeyPath,
  options: Options = { keyReturn: true, data: {} }
): string => {
  const keys = keyPath.split('.')
  let result: any = obj
  for (const key of keys) {
    result = result[key]
    if (result === undefined) {
      return options?.keyReturn ? keyPath : ''
    }
  }
  if (typeof result === 'string' && options?.data && Object.keys(options.data).length > 0) {
    return result.replace(/\{\{(.*?)\}\}/g, (_, varName) => options?.data?.[varName.trim()] || `{{${varName}}}`)
  }

  return result
}
