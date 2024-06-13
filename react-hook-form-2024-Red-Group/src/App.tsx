import { SubmitHandler, useFormContext } from 'react-hook-form'
import './App.scss'
import { Checkbox } from './Checkbox'
import { IForm } from './HookFormProvider'

function App() {
	const { formState, handleSubmit, register } = useFormContext<IForm>()

	/* 
  setValue('email', 'ert@erg.erg')
	const emailWatch = watch('email')

	useEffect(() => {
		console.log(emailWatch)
	}, [emailWatch]) */

	/* 	useEffect(() => {
		// DATA FROM SERVER
		reset({
			email: 'teswedf@ergf.ewrg',
			message: 'ergre',
		})
	}, [reset]) */

	const emailError = formState.errors['email']?.message
	const messageError = formState.errors['message']?.message

	const onSubmit: SubmitHandler<IForm> = data => {
		console.log(data)
	}

	return (
		<>
			<h1>Feedback form</h1>

			{/* <button onClick={() => reset()}>RESET</button> */}

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='email'
					placeholder='Enter email:'
					{...register('email', {
						required: 'This field is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Invalid email address',
						},
					})}
				/>
				{emailError && (
					<p
						style={{
							color: 'tomato',
							margin: '2px auto 0',
							textAlign: 'left',
							fontSize: 14,
						}}
					>
						{emailError}
					</p>
				)}
				<textarea
					placeholder='Enter message:'
					{...register('message', {
						required: 'This field is required',
					})}
				></textarea>

				{messageError && (
					<p
						style={{
							color: 'tomato',
							margin: '2px auto 0',
							textAlign: 'left',
							fontSize: 14,
						}}
					>
						{messageError}
					</p>
				)}

				<Checkbox />

				<button type='submit'>Send</button>
			</form>
		</>
	)
}

export default App
