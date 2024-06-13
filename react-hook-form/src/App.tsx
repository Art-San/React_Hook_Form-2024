import { SubmitHandler, useForm } from 'react-hook-form'
import './App.css'
import { useEffect } from 'react'
import { Checkbox } from './Checkbox'

// HookFormProvider подключен в main.ts
export interface IForm {
  email: string
  title: string
  age: number
  desc: string
  default: string
  isImportant: boolean
}

function App() {
  const { register, handleSubmit, formState, reset } = useForm<IForm>({
    mode: 'onChange', // выводятся ошибки
    defaultValues: {
      default: 'по дефолту test@test.ru'
    }
  })

  useEffect(() => {
    // DATA FROM SERVER
    reset({
      email: 'teswedf@ergf.ewrg',
      title: 'Почта и это поле пришло из бд, для редактирования полей в БД'
    })
  }, [reset])

  const emailError = formState.errors['email']?.message
  const descError = formState.errors['desc']?.message

  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    console.log(data)
    // reset()  сброс формы
  }
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] ">
        <div className=" max-w-[1200px] min-w-[500px] my-auto p-[2rem] text-center ">
          <h1 className=" text-3xl font-bold">Feedback form</h1>
          <button onClick={() => reset()}>RESET</button>
          <form
            className="flex flex-col gap-5 mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="">
              <input
                className="w-full block py-[6px] px-[8px] text-base outline-none border-2 border-solid  rounded focus:border-indigo-500"
                type="text"
                placeholder="Enter email"
                {...register('email', {
                  required: 'is field required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {emailError && (
                <p className=" text-red-400 my-0 mx-auto text-left">
                  {emailError}
                </p>
              )}
            </div>
            <input
              className="w-full block py-[6px] px-[8px] text-base outline-none border-2 border-solid  rounded focus:border-indigo-500"
              type="number"
              placeholder="Возраст, число уйдет"
              {...register('age', {
                required: 'is field required',
                valueAsNumber: true
              })}
            />
            <div className="">
              <input
                className="w-full block py-[6px] px-[8px] text-base outline-none border-2 border-solid  rounded focus:border-indigo-500"
                type="text"
                placeholder="Минимум 5 символов"
                {...register('desc', {
                  minLength: {
                    value: 5,
                    message: ' Минимум 5 символов'
                  }
                })}
              />
              {descError && (
                <p className=" text-red-400 my-0 mx-auto text-left">
                  {descError}
                </p>
              )}
            </div>
            <input
              className="w-full block py-[6px] px-[8px] text-base outline-none border-2 border-solid  rounded focus:border-indigo-500"
              type="text"
              placeholder="Enter age"
              {...register('default', {
                required: 'is field required'
              })}
            />
            <textarea
              className=" w-full block py-[6px] px-[8px] text-base outline-none border-2 border-solid  rounded focus:border-indigo-500 h-[10rem] resize-none mx-auto my-[15px] "
              id="1"
              placeholder="enter message"
              {...register('title', { required: 'is field required' })}
            ></textarea>

            <Checkbox />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
