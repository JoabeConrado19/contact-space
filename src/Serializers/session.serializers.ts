import * as yup from "yup";

export const requestLoginSerializer:any = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});

