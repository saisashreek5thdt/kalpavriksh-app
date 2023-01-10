import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getForms } from "../../action/PatientAction";
import LoadingBox from "../../Components/LoadingBox";
import MessageBox from "../../Components/MessageBox";
import { fromJSON } from "postcss";

export const Form1 = () => {
  let navigate = useNavigate();
  const dispatch=useDispatch()
  const [value, setValue] = useState('')
  const getFomrsList=useSelector((state=>state.patientFormList))
  const {loading,error,forms}=getFomrsList
  const nextStep = (e) => {
    e.preventDefault()
    // navigate("/userrole/:roleid/dashboard/patient/mydata/");
    console.log(value);
    // 
  };

  useEffect(()=>{
    dispatch(getForms())
  },[dispatch])

  useEffect(()=>{
    if(!loading && !error){
      for(let i=0;i<forms.length;i++){
        for(let j=0;j<forms[i].questions.length;j++){
          const filterdForm=forms[i].questions[j].type !== 'textArea'
          // console.log(filterdForm,'flll');
        }     
      }         
    }
  })
  // if(forms){
  //   console.log(forms,'frms');
  // }
  return (
    <>

    {loading ? <LoadingBox></LoadingBox>:
    error? <MessageBox>{error}</MessageBox>:
    forms.length>0 ? forms.map((frm)=>(
      <div className="p-2" key={frm._id}>
        <div className="relative w-full overflow-hidden">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
            <h1 className="text-lg font-semibold text-gray-600">{frm.form_title}</h1>
          </div>
          {/* Down Arrow Icon */}
          <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <FiChevronDown className="w-6 h-6" />
          </div>
          {/* Content */}
          <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
            <div className="p-4">
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form >
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h2 className="text-xl text-center font-bold pt-5">
                            {frm.form_title}
                            </h2>
                           
                          </div>
                        </div>

                        {frm.questions.map((qs)=>(
                          <>
                          {qs.type !== 'textArea'? (
                            <>
                                    <h5 className="text-lg font-medium pt-5"> 
                                    {qs.question_title}
                                  
                                  </h5> 
                                   <div className="form__Grid--Cols-6">    
                                   <div className="form__Cols--Span-6">
                                     <div className="flex justify-start items-start">
                                   
                                       <div className="flex h-5 items-center">
                                         <input
                                           id="choice"
                                           name="choice"
                                           type={qs.type}
                                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                           onChange={()=>setValue(qs.choise1)}
                                         />
                                       </div>
                                       <div className="ml-3 text-sm">
                                         <label
                                           htmlFor="choice"
                                           className="font-medium text-gray-700"
                                         >
                                           {qs.choise1}
                                         </label>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="form__Cols--Span-6">
                                     <div className="flex items-start">
                                       <div className="flex h-5 items-center">
                                         <input
                                         onChange={()=>setValue(qs.choise2)}
                                           id="choice"
                                           name="choice"
                                           type={qs.type}
                                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                         />
                                       </div>
                                       <div className="ml-3 text-sm">
                                         <label
                                           htmlFor="choice"
                                           className="font-medium text-gray-700"
                                         >
                                           {qs.choise2}
                                         </label>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="form__Cols--Span-6">
                                     <div className="flex justify-start items-start">
                                       <div className="flex h-5 items-center">
                                         <input
                                           id="choice"
                                           name="choice"
                                           type={qs.type}
                                           onChange={()=>setValue(qs.choise3)}
                                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                         />
                                       </div>
                                       <div className="ml-3 text-sm">
                                         <label
                                           htmlFor="choice"
                                           className="font-medium text-gray-700"
                                         >
                                           {qs.choise3}
                                         </label>
                                       </div>
                                     </div>
                                   </div>
                                   <div className="form__Cols--Span-6">
                                     <div className="flex items-start">
                                       <div className="flex h-5 items-center">
                                         <input
                                           id="choice"
                                           name="choice"
                                           type={qs.type}
                                           onChange={()=>setValue(qs.choise4)}
                                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                         />
                                       </div>
                                       <div className="ml-3 text-sm">
                                         <label
                                           htmlFor="choice-4"
                                           className="font-medium text-gray-700"
                                         >
                                           {qs.choise4}
                                         </label>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                                 </>
                          ):(
                            <>
                            <h5 className="text-lg font-medium pt-5"> 
                            {qs.question_title}
                          
                          </h5> 
                           <div className="form__Grid--Cols-6">    
                           <div className="form__Cols--Span-6">
                             <div className="flex justify-start items-start">
                                <textarea name="" id="" cols="100" rows="5"></textarea>                                         
                             </div>
                           </div>             
                         </div>
                         </>
                          ) }
                         
                            </>
                        ))}
                        
                      </div>

                      <div className="form__Btn-Bg">
                        <button
                          onClick={nextStep}
                          type="submit"
                          className="form__Btn-Submit"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )):(
      <MessageBox>no data</MessageBox>
    )}
      
    </>
  );
};

export const Form2 = () => {
  let navigate = useNavigate();
  const nextStep = () => {
    navigate("/userrole/:roleid/dashboard/patient/mydata/");
  };

  return (
    <>
      <div className="p-2">
        <div className="relative w-full overflow-hidden">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
            <h1 className="text-lg font-semibold text-gray-600">Form Title</h1>
          </div>
          {/* Down Arrow Icon */}
          <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <FiChevronDown className="w-6 h-6" />
          </div>
          {/* Content */}
          <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
            <div className="p-4">
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form action="#" method="POST">
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h2 className="text-xl text-center font-bold pt-5">
                              Form Title
                            </h2>
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 1
                            </h5>
                          </div>
                        </div>
                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 1
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 2
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 3
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 4
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 2
                            </h5>
                          </div>
                        </div>

                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 1
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 2
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 3
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 4
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 3
                            </h5>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="food-type"
                              className="form__Label-Heading"
                            >
                              Question Choice - Paragraph
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form__Btn-Bg">
                        <button
                          onClick={nextStep}
                          type="submit"
                          className="form__Btn-Submit"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Form3 = () => {
  let navigate = useNavigate();
  const nextStep = () => {
    navigate("/userrole/:roleid/dashboard/patient/mydata/");
  };

  return (
    <>
      <div className="p-2">
        <div className="relative w-full overflow-hidden">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
            <h1 className="text-lg font-semibold text-gray-600">Form Title</h1>
          </div>
          {/* Down Arrow Icon */}
          <div className="absolute top-3 right-3 text-gray-600 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <FiChevronDown className="w-6 h-6" />
          </div>
          {/* Content */}
          <div className="bg-white shadow-lg rounded-b-md overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-max">
            <div className="p-4">
              <div className="dashboard__Grid-Box">
                <div className="dashboard__Grid-Cols">
                  <form action="#" method="POST">
                    <div className="form__Box-Shadow">
                      <div className="form__Box-Space">
                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h2 className="text-xl text-center font-bold pt-5">
                              Form Title
                            </h2>
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 1
                            </h5>
                          </div>
                        </div>
                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 1
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 2
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 3
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 4
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 2
                            </h5>
                          </div>
                        </div>

                        <div className="form__Grid--Cols-6">
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 1
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 2
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex justify-start items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-1"
                                  name="choice-1"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-1"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 3
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form__Cols--Span-6">
                            <div className="flex items-start">
                              <div className="flex h-5 items-center">
                                <input
                                  id="choice-2"
                                  name="choice-2"
                                  type="radio"
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="choice-2"
                                  className="font-medium text-gray-700"
                                >
                                  Question Choice 4
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <h5 className="text-lg font-medium pt-5">
                              Question Title 3
                            </h5>
                          </div>
                        </div>

                        <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="food-type"
                              className="form__Label-Heading"
                            >
                              Question Choice - Paragraph
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form__Btn-Bg">
                        <button
                          onClick={nextStep}
                          type="submit"
                          className="form__Btn-Submit"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};