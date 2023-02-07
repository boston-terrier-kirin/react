import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

// https://gist.github.com/tagty/0c9a446a536d75b7af6148d78451fd31
// フォームの初期値設定。
// enableReinitialize=trueにする。
const FormThree = () => {
  const [formData, setFormData] = useState({ firstname: '', lastname: '' });

  const formik = useFormik({
    initialValues: formData,
    validate: (values) => {
      const errors = {};
      if (!values.firstname) {
        errors.firstname = 'Required';
      }
      if (!values.lastname) {
        errors.lastname = 'Required';
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    // setValuesを使うよりも、ステートでやった方が賢い。
    // formik.setValues({
    //   firstname: 'kirin',
    //   lastname: 'matsumoto',
    // });

    setFormData({
      firstname: 'kirin',
      lastname: 'matsumoto',
    });
  }, []);

  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <div>{JSON.stringify(formik.values)}</div>
        <div>{JSON.stringify(formik.errors)}</div>
        <div>{JSON.stringify(formik.touched)}</div>

        <form onSubmit={formik.handleSubmit}>
          <h4 className="mb-3">Personal information</h4>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                {...formik.getFieldProps('firstname')}
              />
              {/* touchedを見ないと、firstnameのエラーも、lastnameのエラーも両方表示されてしまう。 */}
              {formik.errors.firstname && formik.touched.firstname && (
                <div>{formik.errors.firstname}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                {...formik.getFieldProps('lastname')}
              />
              {formik.errors.lastname && formik.touched.lastname && (
                <div>{formik.errors.lastname}</div>
              )}
            </div>
          </div>
          <hr className="mb-4" />

          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormThree;
