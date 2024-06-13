import { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export interface IForm {
	email: string
	message: string
	isImportant: boolean
}

export function HookFormProvider({ children }: PropsWithChildren) {
	const methods = useForm<IForm>({
		mode: 'onChange',
	})

	return <FormProvider {...methods}>{children}</FormProvider>
}
