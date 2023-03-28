import * as yup from "yup";

export const responseUsersSerializer = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string().email(),
    telephone: yup.string(),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    contacts:  yup.array()
})

export const requestUsersSerializer:any = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'A senha precisa ter no mínimo 8 caracteres, ' +
        'uma letra maiúscula e uma letra minúscula, ' +
        'um número e um caracter especial'),
    telephone: yup.string().required(),
});

export const usersWithoutPasswordSerializer = yup.array(responseUsersSerializer);


export const updatedUserSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'A senha precisa ter no mínimo 8 caracteres, ' +
        'uma letra maiúscula e uma letra minúscula, ' +
        'um número e um caracter especial'),
    telephone: yup.string().notRequired()
})


