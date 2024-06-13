import { Control, Controller } from 'react-hook-form'
import { IForm } from './App'

interface Props {
  control: Control<IForm>
  // register: UseFormRegister<IForm>
}

export function CheckboxProps({ control }: Props) {
  return (
    <Controller
      control={control}
      name="isImportant"
      render={({ field }) => (
        <button
          style={{
            padding: 6,
            marginBottom: 10,
            display: 'block'
          }}
          onClick={(e) => {
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
