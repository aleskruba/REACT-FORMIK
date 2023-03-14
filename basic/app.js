import { useFormik } from 'formik';
import * as React from 'react';
import './style.css';
import {basicSchema} from "./schemas/"

export default function App() {

  const onSubmit = async (values,actions) => {
    console.log(values)
    console.log(actions)
    await new Promise(resolve=>setTimeout(resolve,2000))
    actions.resetForm()
  }
      const formik = useFormik({
      initialValues: {
        email: '',
        name:'',
        pwd:'',
        pwdrepeat:'',
      },
      validationSchema:basicSchema,
      onSubmit
    });
  
 
  return (
  <div>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="email">Email</label>
      <input value={formik.values.email}
              onChange={formik.handleChange}
              id="email"
              type="email"
              placeholder="Enter your email"
              onBlur={formik.handleBlur}
              className={formik.errors.email && formik.touched.email ? "input-error":""}
              />
              {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email} </p>}
              <br/>
       <label htmlFor="name">Name</label>
       <input value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              type="text"
              placeholder="Enter your name"
              onBlur={formik.handleBlur}
              className={formik.errors.name && formik.touched.name ? "input-error":""}
              />  
              {formik.errors.name && formik.touched.name && <p className="error">{formik.errors.name} </p>}
               <br/>
      <label htmlFor="pwd">Password</label>
        <input value={formik.values.pwd}
              onChange={formik.handleChange}
              id="pwd"
              type="password"
              placeholder="Enter your password"
              onBlur={formik.handleBlur}
              className={formik.errors.pwd && formik.touched.pwd ? "input-error":""}
              />
              {formik.errors.pwd && formik.touched.pwd && <p className="error">{formik.errors.pwd} </p>}
              <br/>
           <label htmlFor="pwdrepeat">repeat Password</label>
        <input value={formik.values.pwdrepeat}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="pwdrepeat"
              type="password"
              placeholder="repeat your password"
              className={formik.errors.pwdrepeat && formik.touched.pwdrepeat ? "input-error":""}
              />
              {formik.errors.pwdrepeat && formik.touched.pwdrepeat && <p className="error">{formik.errors.pwdrepeat} </p>}
            <br/>
      <button disabled={formik.isSubmitting} 
              type="submit"
              className=""
              >

        Submit
      </button>
    </form>
  
  </div>
  
  );
}
