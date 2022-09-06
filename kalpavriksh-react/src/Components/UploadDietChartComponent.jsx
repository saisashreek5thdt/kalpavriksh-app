import react from 'react'
import { Formik } from 'formik';
import { Input } from '.'

const UploadDietChartComponent = () => {
    return (
        <div className="container mx-auto">
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
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
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="px-4 py-5 grid grid-cols-6 gap-8">
                                                <Input label="Calories Range (Lower Value)" input="text" name="lowerValue" id="lower-value" onChange={handleChange} onBlur={handleBlur} value={values.lowerValue} />
                                                <span className="text-red-500 text-sm">{errors.lowerValue && touched.lowerValue && errors.lowerValue}</span>
                                                <Input label="Calories Range (Upper Value)" input="text" name="upperValue" id="upper-value" onChange={handleChange} onBlur={handleBlur} value={values.upperValue} />
                                                <span className="text-red-500 text-sm">{errors.upperValue && touched.upperValue && errors.upperValue}</span>
                                            </div>

                                            <div className="px-4 py-5 grid grid-cols-6 gap-8">
                                                <Input label="Carbohydrates Range (Lower Value)" input="text" name="CarbohydrateslowerValue" id="carbohydrates-upper-value" onChange={handleChange} onBlur={handleBlur} value={values.CarbohydrateslowerValue} />
                                                <span className="text-red-500 text-sm">{errors.CarbohydrateslowerValue && touched.CarbohydrateslowerValue && errors.CarbohydrateslowerValue}</span>
                                                <Input label="Carbohydrates Range (Upper Value)" input="text" name="CarbohydratesUpperValue" id="carbohydrates-upper-value" onChange={handleChange} onBlur={handleBlur} value={values.CarbohydratesUpperValue} />
                                                <span className="text-red-500 text-sm">{errors.CarbohydratesUpperValue && touched.CarbohydratesUpperValue && errors.CarbohydratesUpperValue}</span>
                                            </div>

                                            <div className="px-4 py-5 grid grid-cols-6 gap-8">
                                                <Input label="Protiens" input="text" name="Protiens" id="Protiens" onChange={handleChange} onBlur={handleBlur} value={values.Protiens} />
                                                <span className="text-red-500 text-sm">{errors.Protiens && touched.Protiens && errors.Protiens}</span>
                                                <Input label="Fats" input="text" name="Fats" id="Fats" onChange={handleChange} onBlur={handleBlur} value={values.Fats} />
                                                <span className="text-red-500 text-sm">{errors.Fats && touched.Fats && errors.Fats}</span>
                                            </div>

                                            <div className="px-4 py-5 grid grid-cols-6 gap-8">
                                                <Input label="Veg/Non-Veg/Egg" input="text" name="VegNonVegEgg" id="Veg/Non-Veg/Egg" onChange={handleChange} onBlur={handleBlur} value={values.VegNonVegEgg} />
                                                <span className="text-red-500 text-sm">{errors.VegNonVegEgg && touched.VegNonVegEgg && errors.VegNonVegEgg}</span>
                                                <div className="col-span-12 sm:col-span-3">
                                                    <label
                                                        htmlFor="cuisine"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Cuisine
                                                    </label>
                                                    <select
                                                        id="cuisine"
                                                        name="cuisine"
                                                        autoComplete="cuisine"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option>Select Cuisine</option>
                                                        <option>Cuisine A</option>
                                                        <option>Cuisine B</option>
                                                        <option>Cuisine C</option>
                                                    </select>
                                                </div>

                                                <div className="px-0 py-2 grid grid-rows-10 gap-8">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <div className="px-4 py-3 text-left sm:px-6">
                                                            <div>
                                                                <label className="block text-sm font-medium text-gray-700">
                                                                    Cover photo
                                                                </label>
                                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                                    <div className="space-y-1 text-center">
                                                                        <svg
                                                                            className="mx-auto h-12 w-12 text-gray-400"
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
                                                                        <div className="flex text-sm text-gray-600">
                                                                            <label
                                                                                htmlFor="file-upload"
                                                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                            >
                                                                                <span>Upload a file</span>
                                                                                <input
                                                                                    id="file-upload"
                                                                                    name="file-upload"
                                                                                    type="file"
                                                                                    className="sr-only"
                                                                                />
                                                                            </label>
                                                                            <p className="pl-1">or drag and drop</p>
                                                                        </div>
                                                                        <p className="text-xs text-gray-500">
                                                                            PNG, JPG, GIF up to 10MB
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                        <button
                                                            type="submit"
                                                            disabled={isSubmitting}
                                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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