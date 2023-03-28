import * as yup from "yup";

export const requestContactSerializer:any = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    telephone: yup.string().length(11),
});

