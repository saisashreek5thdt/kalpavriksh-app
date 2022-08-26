import react from 'react'
import { Formik } from 'formik';
import { Input } from '.'

const UploadDietChartComponent = () => {
    return (
        <div className="dietchart">
            <div className="dietchart__container">
                <div className="dietchart__row">
                    <div className="dietchart__column">
                        <Formik
                            initialValues={{ lowerValue: "", upperValue: "", CarbohydrateslowerValue: "", CarbohydratesUpperValue: "", Protiens: "", Fats: "", VegNonVegEgg: "" }}
                            validate={values => {
                                const errors = {};
                                if (!values.lowerValue) {
                                    errors.lowerValue = 'Enter lower value';
                                }
                                if (!values.upperValue) {
                                    errors.upperValue = 'Enter a valid upperValue'
                                }
                                if (!values.CarbohydrateslowerValue) {
                                    errors.CarbohydrateslowerValue = 'Enter a valid CarbohydrateslowerValue'
                                }
                                if (!values.CarbohydratesUpperValue) {
                                    errors.CarbohydratesUpperValue = 'Enter a valid CarbohydratesUpperValue'
                                }
                                if (!values.Protiens) {
                                    errors.Protiens = 'Enter a valid Protiens'
                                }
                                if (!values.Fats) {
                                    errors.Fats = 'Enter a valid Fats'
                                }
                                if (!values.VegNonVegEgg) {
                                    errors.VegNonVegEgg = 'Enter a valid VegNonVegEgg'
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
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
                                <form onSubmit={handleSubmit}>
                                    <div className="form">
                                        <div className="form__body">
                                            <div className="form__inputcontainer">
                                                <Input label="Calories Range (Lower Value)" input="text" name="lowerValue" id="lower-value" onChange={handleChange} onBlur={handleBlur} value={values.lowerValue} />
                                                <span className="form__span">{errors.lowerValue && touched.lowerValue && errors.lowerValue}</span>
                                                <Input label="Calories Range (Upper Value)" input="text" name="upperValue" id="upper-value" onChange={handleChange} onBlur={handleBlur} value={values.upperValue} />
                                                <span className="form__span">{errors.upperValue && touched.upperValue && errors.upperValue}</span>
                                            </div>

                                            <div className="form__inputcontainer">
                                                <Input label="Carbohydrates Range (Lower Value)" input="text" name="CarbohydrateslowerValue" id="carbohydrates-upper-value" onChange={handleChange} onBlur={handleBlur} value={values.CarbohydrateslowerValue} />
                                                <span className="form__span">{errors.CarbohydrateslowerValue && touched.CarbohydrateslowerValue && errors.CarbohydrateslowerValue}</span>
                                                <Input label="Carbohydrates Range (Upper Value)" input="text" name="CarbohydratesUpperValue" id="carbohydrates-upper-value" onChange={handleChange} onBlur={handleBlur} value={values.CarbohydratesUpperValue} />
                                                <span className="form__span">{errors.CarbohydratesUpperValue && touched.CarbohydratesUpperValue && errors.CarbohydratesUpperValue}</span>
                                            </div>

                                            <div className="form__inputcontainer">
                                                <Input label="Protiens" input="text" name="Protiens" id="Protiens" onChange={handleChange} onBlur={handleBlur} value={values.Protiens} />
                                                <span className="form__span">{errors.Protiens && touched.Protiens && errors.Protiens}</span>
                                                <Input label="Fats" input="text" name="Fats" id="Fats" onChange={handleChange} onBlur={handleBlur} value={values.Fats} />
                                                <span className="form__span">{errors.Fats && touched.Fats && errors.Fats}</span>
                                            </div>

                                            <div className="form__inputcontainer">
                                                <Input label="Veg/Non-Veg/Egg" input="text" name="VegNonVegEgg" id="Veg/Non-Veg/Egg" onChange={handleChange} onBlur={handleBlur} value={values.VegNonVegEgg} />
                                                <span className="form__span">{errors.VegNonVegEgg && touched.VegNonVegEgg && errors.VegNonVegEgg}</span>
                                                <div className="form__select">
                                                    <label
                                                        htmlFor="cuisine"
                                                        className="form__selectlabel"
                                                    >
                                                        Cuisine
                                                    </label>
                                                    <select
                                                        id="cuisine"
                                                        name="cuisine"
                                                        autoComplete="cuisine"
                                                        className="form__select--select"
                                                    >
                                                        <option>Select Cuisine</option>
                                                        <option>Cuisine A</option>
                                                        <option>Cuisine B</option>
                                                        <option>Cuisine C</option>
                                                    </select>
                                                </div>

                                                <div className="form__inputcontainer">
                                                    <div className="form__select">
                                                        <div className="form__photo">
                                                            <div>
                                                                <label className="form__photo--label">
                                                                    Cover photo
                                                                </label>
                                                                <div className="form__photo--container">
                                                                    <div className="form__photo--body">
                                                                        <svg
                                                                            className="form__photo--svg"
                                                                            stroke="currentColor"
                                                                            fill="none"
                                                                            viewBox="0 0 48 48"
                                                                            aria-hidden="true"
                                                                        >
                                                                            <path
                                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                        <div className="form__photo--sub">
                                                                            <label
                                                                                htmlFor="file-upload"
                                                                                className="form__photo--sub--label"
                                                                            >
                                                                                <span>Upload a file</span>
                                                                                <input
                                                                                    id="file-upload"
                                                                                    name="file-upload"
                                                                                    type="file"
                                                                                    className="form__photo--sub--input"
                                                                                />
                                                                            </label>
                                                                            <p className="pl-1">or drag and drop</p>
                                                                        </div>
                                                                        <p className="form__photo--typo">
                                                                            PNG, JPG, GIF up to 10MB
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button">
                                                <div className="button__body">
                                                    <div className="button__container">
                                                        <button
                                                            type="submit"
                                                            disabled={isSubmitting}
                                                            className="button__button"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadDietChartComponent