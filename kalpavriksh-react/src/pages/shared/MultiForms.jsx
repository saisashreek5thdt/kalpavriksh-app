import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getForms, submitForm } from "../../action/PatientAction";
import LoadingBox from "../../Components/LoadingBox";
import MessageBox from "../../Components/MessageBox";
import { fromJSON } from "postcss";

export const Form1 = ({type}) => {
  let navigate = useNavigate();
  const dispatch=useDispatch()
  const [value, setValue] = useState('')
  const getFomrsList=useSelector((state=>state.patientFormList))
  const {loading,error,forms}=getFomrsList
  const [formData, setFormData] = useState([
    { 
    formId: "", 
    questionId: "", 
    answer: [] 
    }
  ]);

  const nextStep = (e) => {
    e.preventDefault()
    // navigate("/userrole/:roleid/dashboard/patient/mydata/");
    formData.forEach((form,index)=> {
      var checkboxes = document.querySelectorAll('input[class*="peer"]'); 
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    })

    const formObj={
      formId:formData[0].formId,
      answers:formData.map((e)=>({questionId: e.questionId, answer: e.answer}))
    }

    dispatch(submitForm(formObj))
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
// const handleChange=(e,i,formId,qsId)=>{
//   console.log(formId,qsId);
//   let data = [...formData]
// data[i][e.target.name]=e.target.value
// setFormData(data)
// console.log(formData);
// }
 const handleChange = (e,i,formIds, questionIds) => {
  console.log("e.target.type", e.target.type)
 if(e.target.type === 'radio'){
   const selectedAnswer = e.target.value;
   const updatedFormData = formData.map((form,index) => {
     if(index === i ) {
       form.answer = selectedAnswer;
       form.formId=formIds
       form.questionId=questionIds
     }
     return form;
   });
   setFormData(updatedFormData);
   console.log(updatedFormData);

 }else if(e.target.type === 'checkbox'){

   const newFormData = [...formData];
   const selectedAnswer = e.target.value;
   let foundQuestion = formData.find(e => e.questionId === questionIds)
   let findQuestionIndex = formData.findIndex(e => e.questionId === questionIds)
   let formObj = {}
   let updatedFormData = []
   if (foundQuestion) {
    if (e.target.checked && findQuestionIndex > -1) {
      formData[findQuestionIndex].answer = formData[findQuestionIndex].answer.concat([selectedAnswer])
      updatedFormData = [...formData]
    } else {
      formData[findQuestionIndex].answer = formData[findQuestionIndex].answer.filter(e => e !== selectedAnswer)
      updatedFormData = [...formData]
    }
   } else {
    formObj = {formId: formIds, questionId: questionIds,answer: [selectedAnswer] }
    updatedFormData = [
      ...formData.slice(0, i),
      formObj,
      ...formData.slice(i)
    ]
   }
    setFormData(updatedFormData);

 } else if (e.target.type === 'textarea') {
  const newFormData = [...formData];
  let updatedFormData = []
  const selectedAnswer = e.target.value;
  console.log("selectedAnswer", selectedAnswer)
  let findQuestionIndex = formData.findIndex(e => e.questionId === questionIds)
  if (findQuestionIndex > -1) {
    formData[findQuestionIndex].answer = `${e.target.value}`
    updatedFormData = [...formData]
  } else {
    let formObj = {formId: formIds, questionId: questionIds,answer: `${e.target.value}` }
    updatedFormData = [
        ...formData.slice(0, i),
        formObj,
        ...formData.slice(i)
    ]
  }
  setFormData(updatedFormData)
 }
 }


const createObj=(fromId, e)=>{
  console.log(fromId,'frm', e)
   if(forms){
    const selectedForm= forms.find((e)=>e._id === fromId)
    console.log(selectedForm.questions,'sl');
    for (let i=0;i<selectedForm.questions;i++){
      let obj={
       formId: '', 
       questionId: '', 
       answer: []
      }
      setFormData([...formData,obj])
    }
    console.log("formData create obj", formData);
   }
   
}

/* const handleChange=(event,index,formI,qsId)=>{

  if(formData[0].formId){
    
  const formId = formI;
  const updatedFormData = {};
  let updatedData = [...formData]
  console.log(updatedFormData)

  updatedFormData.answer = event.target.value;
  updatedFormData.formId = formId;
  updatedFormData.questionId = qsId;
  updatedData.push(updatedFormData)
  setFormData(updatedData);
  console.log("updatedFormData", updatedFormData) ;
  }else{
     let obj=
     { 
       formId: "", 
       questionId: "", 
       answer: [] 
       }
   setFormData([...formData,obj])
   const formId = formI;
   const updatedFormData = [...formData];
   updatedFormData[index].answer = event.target.value;
   updatedFormData[index].formId = formId;
   updatedFormData[index].questionId = qsId;
   setFormData(updatedFormData);
  console.log('hey');
  }
 
} */
  return (
    <>

    {loading ? <LoadingBox></LoadingBox>:
    error? <MessageBox>{error}</MessageBox>:
    forms.length>0 ?forms.filter((e)=> !e.answer && e?.form_type===type)?.length>0 ? forms.filter((e)=> !e.answer && e?.form_type===type).map((frm)=>(
      <div className="p-2" key={frm._id}>
        <div className="relative w-full overflow-hidden">
          <input
           onClick={(e)=>createObj(frm._id, e)}
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-slate-50 shadow-lg h-12 w-full pl-5 rounded-md flex items-center">
            <h1  className="text-lg font-semibold text-gray-600">{frm.form_title}</h1>
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

                        {frm.questions.map((qs,i)=>(
                          <>
                          {qs.type !== 'textArea'? (
                            <>
                                    <h5 className="text-lg font-medium pt-5" key={qs._id}> 
                                    {qs.question_title}
                                  
                                  </h5> 
                                   <div className="form__Grid--Cols-6">    
                                   <div className="form__Cols--Span-6">
                                     <div className="flex justify-start items-start">
                                   
                                       <div className="flex h-5 items-center">
                                         <input
                                           id="choice"
                                           data-formid={frm._id}
                                           name={`question-${qs._id}`}
                                           type={qs.type}
                                           value={qs.choise1}
                                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                           onChange={(e)=>handleChange(e,i,frm._id,qs._id)}
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
                                            onChange={(e)=>handleChange(e,i,frm._id,qs._id)}
                                           id="choice"
                                           name={`question-${qs._id}`}
                                           value={qs.choise2}
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
                                           name={`question-${qs._id}`}
                                           type={qs.type}
                                           value={qs.choise3}
                                           onChange={(e)=>handleChange(e,i,frm._id,qs._id)}
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
                                           name={`question-${qs._id}`}
                                           type={qs.type}
                                           value={qs.choise4}
                                           onChange={(e)=>handleChange(e,i,frm._id,qs._id)}
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
                                <textarea name={`question-${qs._id}`} id="" cols="100" rows="5" onChange={(e)=> handleChange(e,i,frm._id,qs._id)} ></textarea>                                         
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
                          className="form__Btn-Submit "
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
      <MessageBox>no {type} forms</MessageBox>
    )
    :(
      <MessageBox>no forms</MessageBox>
    )
  }
      
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
            id="checkbox2"
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
                         onClick={(e)=>nextStep(e)}
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
            id="checkbox3"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity z-10 cursor-pointer"
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
                         onClick={(e)=>nextStep(e)}
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