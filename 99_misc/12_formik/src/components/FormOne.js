import { Formik } from 'formik';

const FormOne = () => {
  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        country: '',
        state: '',
        zip: '',
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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className="container">
          <div className="col-md-12 mt-5">
            <div>{JSON.stringify(values)}</div>
            <div>{JSON.stringify(errors)}</div>
            <div>{JSON.stringify(touched)}</div>
            <form onSubmit={handleSubmit}>
              <h4 className="mb-3">Personal information</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstname">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                  />
                  {/* touchedを見ないと、firstnameのエラーも、lastnameのエラーも両方表示されてしまう。 */}
                  {errors.firstname && touched.firstname && (
                    <div>{errors.firstname}</div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                  />
                  {errors.lastname && touched.lastname && (
                    <div>{errors.lastname}</div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="form-select"
                    id="country"
                    name="country"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Choose...</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="NL">Netherlands</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className="form-select"
                    id="state"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Choose...</option>
                    <option value="california">California</option>
                    <option value="toronto">Toronto</option>
                    <option value="utrech">Utrech</option>
                  </select>
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
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

export default FormOne;
