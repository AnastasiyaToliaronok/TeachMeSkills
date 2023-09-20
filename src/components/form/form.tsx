import './form.css';
import { useForm } from 'react-hook-form';


export const Forms = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        mode: 'onBlur'
    });


    const onSubmit = () => {
//        alert(JSON.stringify(data)); disabled={!isValid}
        reset();
    }


    return (
        <div className='formDiv'>
            <legend className='formLegend'>
                Связаться с нами
            <form onSubmit={handleSubmit(onSubmit)} className='formDivs'>
                <div className='form2Div'>
                    <input   className='formStyle' type="text" placeholder="Имя*" {...register('name')} /><br/>
                    <input   className='formStyle' type="number" placeholder="Телефон*" {...register('telephone')} /><br />
                </div>

                <div className='form2Div'>
                    <input
                        className='formStyle' type="email" placeholder="Email"  {...register('email')} />
                    <input
                        className='formStyle' type="text" placeholder="Организация" {...register('organization')} /><br />
                </div>

                <textarea name="postContent" className='formTextarea' placeholder='Сообщение'
                ></textarea><br />

                <p><button  type="submit" className='formInput'>Отправить информацию</button></p>  
            </form>
            </legend>
        </div>
    )
}