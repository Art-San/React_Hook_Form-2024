import { Controller, useFormContext } from 'react-hook-form'
import { IForm } from './HookFormProvider'

export function Checkbox() {
	const { control } = useFormContext<IForm>()

	return (
		<Controller
			control={control}
			name='isImportant'
			render={({ field }) => (
				<button
					style={{
						padding: 6,
						marginBottom: 10,
						display: 'block',
					}}
					onClick={e => {
						e.preventDefault()
						field.onChange(!field.value)
					}}
				>
					{field.value ? 'ВАЖНОЕ СООБЩЕНИЕ' : 'НЕ ВАЖНОЕ СООБЩЕНИЕ'}
				</button>
			)}
		/>
	)
}
