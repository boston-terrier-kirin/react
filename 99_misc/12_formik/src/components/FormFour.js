import { useFormik } from 'formik';
import * as Yup from 'yup';

// yup
const FormFour = () => {
  const formik = useFormik({
    initialValues: { firstname: '', lastname: '' },
    validationSchema: Yup.object({
      firstname: Yup.string().required('Sorry, this is required'),
      lastname: Yup.string().required('Sorry, this is required'),
    }),
    validate: (values) => {
      const { firstname, lastname } = values;
      console.log(firstname, lastname);

      // 相関チェック
      if (firstname !== '' && lastname !== '') {
        if (firstname !== 'kirin' || lastname !== 'matsumoto') {
          return {
            firstname: 'kirin以外はNGです。',
          };
        }
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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

export default FormFour;
