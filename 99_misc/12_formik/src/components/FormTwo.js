import { Formik } from 'formik';

// https://zenn.dev/naoki/scraps/a835c20a097e6d
// デストラクチャするとカオスになるので、formikで受け取る。
// {...formik.getFieldProps('firstname')}で、onChange, onBlur, value, nameをまとめて指定できる。
const FormTwo = () => {
  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstname) {
          errors.firstname = 'Required';
        }
        if (!values.lastname) {
          errors.lastname = 'Required';
        }
        return errors;
      }}
      onSubmit={() => {
        console.log('submit');
      }}
    >
      {(formik) => (
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
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormTwo;
