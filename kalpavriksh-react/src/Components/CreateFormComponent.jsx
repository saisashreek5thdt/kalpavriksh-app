import react from 'react'
import { Formik } from 'formik';
import { Input } from '../Components'

const CreateFormComponent = () => {
    return (
        <div className="container mx-auto w-full max-w-4xl md:max-w-2xl sm:max-w-xl">
            <div className="mt-10 sm:mt-0">
                <div className="grid grid-flow-col grid-cols-6 lg:grid lg:grid-flow-cols-6 lg:gap-3 md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <Formik
                            initialValues={{ FormTitle: "", QuestionTitle: "", QuestionNum1: "", QuestionNum2: "", QuestionNum3: "", QuestionNum4: "", QuestionNum5: "", QuestionNum6: "" }}
                            validate={values => {
                                const errors = {};
                                if (!values.FormTitle || values.FormTitle.length < 3) {
                                    errors.FormTitle = 'Form Title must be at least 3 characters long';
                                }
                                if (!values.QuestionTitle) {
                                    errors.QuestionTitle = 'Enter a valid QuestionTitle'
                                }
                                if (!values.QuestionNum1) {
                                    errors.QuestionNum1 = 'Enter a valid QuestionNum1'
                                }
                                if (!values.QuestionNum2) {
                                    errors.QuestionNum2 = 'Enter a valid QuestionNum2'
                                }
                                if (!values.QuestionNum3) {
                                    errors.QuestionNum3 = 'Enter a valid QuestionNum3'
                                }
                                if (!values.QuestionNum4) {
                                    errors.QuestionNum4 = 'Enter a valid QuestionNum4'
                                }
                                if (!values.QuestionNum5) {
                                    errors.QuestionNum5 = 'Enter a valid QuestionNum5'
                                }
                                if (!values.QuestionNum6) {
                                    errors.QuestionNum6 = 'Enter a valid QuestionNum6'
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
                                    <div className="shadow overflow-hidden w-full max-w-4xl md:max-w-2xl sm:max-w-xl sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="px-4 py-5 w-full max-w-xl grid grid-rows-10 gap-8">
                                                <Input label="Form Title" input="text" name="FormTitle" id="form-title" onChange={handleChange} onBlur={handleBlur} value={values.FormTitle} />
                                                <span className="text-red-500 text-sm">{errors.FormTitle && touched.FormTitle && errors.FormTitle}</span>
                                            </div>

                                            <div className="px-0 py-2 grid grid-rows-10 gap-8">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div className="px-4 py-3 text-left sm:px-6">
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            Add Question
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="px-4 py-5 grid grid-rows-10 gap-8">
                                                <div className="col-span-12 sm:col-span-3">
                                                    <label
                                                        htmlFor="question-type"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Question Type
                                                    </label>
                                                    <select
                                                        id="question-type"
                                                        name="question-type"
                                                        autoComplete="question-type"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option>Select Question Type</option>
                                                        <option>Input</option>
                                                        <option>M.C.Q's - Radio</option>
                                                        <option>M.C.Q's - Checkbox</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="px-4 py-5 grid grid-rows-10 gap-8">
                                                <Input label="Question Title" input="text" name="QuestionTitle" id="question-title" onChange={handleChange} onBlur={handleBlur} value={values.QuestionTitle} />
                                                <span className="text-red-500 text-sm">{errors.QuestionTitle && touched.QuestionTitle && errors.QuestionTitle}</span>
                                            </div>

                                            <div className="px-4 py-5 grid grid-cols-10 gap-8">
                                                <Input label="Question" input="text" name="QuestionNum1" id="question-num-1" onChange={handleChange} onBlur={handleBlur} value={values.QuestionNum1} />
                                                <span className="text-red-500 text-sm">{errors.QuestionNum1 && touched.QuestionNum1 && errors.QuestionNum1}</span>
                                                <Input label="Question Choice" input="text" name="QuestionNum2" id="question-num-2" onChange={handleChange} onBlur={handleBlur} value={values.QuestionNum2} />
                                                <span className="text-red-500 text-sm">{errors.QuestionNum2 && touched.QuestionNum2 && errors.QuestionNum2}</span>
                                                <Input label="Question Choice" input="text" name="QuestionNum3" id="question-num-3" onChange={handleChange} onBlur={handleBlur} value={values.QuestionNum2} />
                                                <span className="text-red-500 text-sm">{errors.QuestionNum2 && touched.QuestionNum2 && errors.QuestionNum2}</span>
                                                <Input label="Question Choice" input="text" name="QuestionNum4" id="question-num-4" onChange={handleChange} onBlur={handleBlur} value={values.QuestionNum4} />
                                                <span className="text-red-500 text-sm">{errors.QuestionNum4 && touched.QuestionNum4 && errors.QuestionNum4}</span>
                                                <Input label="Question Choice" input="text" name="QuestionNum5" id="question-num-5" onChange={handleChange} onBlur={handleBlur} value={values.QuestionNum5} />
                                                <span className="text-red-500 text-sm">{errors.QuestionNum5 && touched.QuestionNum5 && errors.QuestionNum5}</span>
                                                <Input label="Question Choice" input="text" name="QuestionNum6" id="question-num-6" onChange={handleChange} onBlur={handleBlur} value={values.QuestionNum6} />
                                                <span className="text-red-500 text-sm">{errors.QuestionNum6 && touched.QuestionNum6 && errors.QuestionNum6}</span>
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
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateFormComponent