import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  name: yup
      .string()
      .required("Required"),
  pwd: yup
    .string()
    .min(5)
    .required("Required"),
  pwdrepeat: yup
    .string()
    .oneOf([yup.ref("pwd"), null], "Passwords must match")
    .required("Required"),
});
