import { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export interface IForm {
  email: string
  title: string
  age: number
  desc: string
  default: string
  isImportant: boolean
}

export function HookFormProvider({ children }: PropsWithChildren) {
  const methods = useForm<IForm>({
    mode: 'onChange' // выводятся ошибки
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
