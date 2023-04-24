const validate = (userData, setErrors, errors) => {
    let emailRegEx = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    let passRegEx = new RegExp(/[0-9]/);

    if (!userData.email) {
        setErrors({ ...errors, email: 'El campo de correo no puede estár vacio', password: '' })
    } else if (!emailRegEx.test(userData.email)) {
        setErrors({ ...errors, email: 'Introduzca un email válido', password: '' })
    } else if (userData.email.length > 35) {
        setErrors({ ...errors, email: 'El nombre de usuario es demasiado largo', password: '' })
    } else if (!userData.password) {
        setErrors({ ...errors, email: '', password: 'El campo de contraseña no puede estár vacio' })

    } else if (userData.password.length < 6 || userData.password.length > 35) {
        setErrors({ ...errors, email: '', password: 'La contraseña debe tener una longitud entre 6 y 35 caracteres' })

    } else if (!passRegEx.test(userData.password)) {
        setErrors({ ...errors, email: '', password: 'La contraseña debe contener almenos un número' })
    }
    else {
        setErrors({
            ...errors,
            email: '',
            password: ''
        })
    }

}

export default validate;