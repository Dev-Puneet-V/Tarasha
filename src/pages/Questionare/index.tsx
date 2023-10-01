import React, { useState, ChangeEvent, FormEvent } from 'react';
import Cookies from 'js-cookie';
import './style.css';
import { BsArrowRight } from 'react-icons/bs';
import { API_ENDPOINT } from '../../utils/constant';
import { useAuth } from '../../contexts/AuthContext';
import eventBus from '../../utils/eventBus';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Ring } from '@uiball/loaders';

interface Question {
  que: string;
  _id: number;
}

const questions: Question[] = [
  { que: 'What inspired you to become an interior designer?', _id: 1 },
  { que: 'How do you approach creating a functional and aesthetically pleasing interior space?', _id: 2 },
  { que: 'Can you share an interior design project that you are particularly proud of? What made it special?', _id: 3 },
  { que: 'What color trends do you think will dominate interior design this year?', _id: 4 },
  { que: 'How do you balance your clients personal style preferences with your design expertise?', _id: 5 },
  { que: 'What are some common mistakes people make when decorating their homes, and how can they avoid them?', _id: 6 },
  { que: 'Tell us about your favorite interior design materials or finishes and why you love them.', _id: 7 },
  { que: 'What role does sustainability play in your interior design projects?', _id: 8 },
  { que: 'How do you stay updated with the latest interior design trends and innovations?', _id: 9 },
  { que: 'Can you share some tips for maximizing space in small apartments or rooms?', _id: 10 },
  { que: 'What challenges do you often face in interior design, and how do you overcome them?', _id: 11 },
  { que: 'Describe your ideal interior design project. What would it involve?', _id: 12 },
];

const Questionare: React.FC = () => {
  const {isAuthenticated,  openAuthModal} = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {user} = useAuth();
  React.useEffect(() => {
    if(!user?.number){
      eventBus.emit("toast:error","Phone number required");
      navigate('/dashboard', { state: {"s": 1} })
    }
  }, [])
  const [answers, setAnswers] = useState<{ [key: string]: { Question: string; Answer: string } }>(
    questions.reduce((acc, question) => {
      acc[`ans-${question._id}`] = { Question: question.que, Answer: '' };
      return acc;
    }, {})
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, questionId: number) => {
    const updatedAnswers = { ...answers };
    updatedAnswers[`ans-${questionId}`].Answer = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if(!isAuthenticated){
      openAuthModal();
      return;
    }
    
    setLoading(true);
    try{
      const response = await fetch(API_ENDPOINT.SAVE_QUESTIONARE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify({
          'inquiryData': Object.values(answers),
          'packageInfo': {
            package_name: 'Silver',
            package_option: 'Option 1'
          }
        }),
      });
      const data = await response.json();
      if(data.success){
        swal({
          title: "Questins submitted successfully!!",
          text: "Thank you! for reaching us out. We will respond you back within 2 business days",
          icon: "success",
          dangerMode: false,
          // timer: 10000
        }).then((result) => {
          if (result) {
            navigate('/')
          } 
        });
      }else{
        throw new Error('Unable to submit question')
      }
    }catch(error){
      eventBus.emit('toast:error', 'Questions submission failed!!')
    }finally{
      setLoading(false);
    }
  };

  return (
    <div id='questionare-container'>
        <div className='questionare-header flex flex-col justify-center items-center gap-3'>
            <p className='text-styled-2'>Thank You For Your Interest</p>
            <p>Let’s get started by filling out this questionaire.</p>
        </div>
        <form onSubmit={handleSubmit} className='p-8 mt-8'>
            <div className='flex flex-col gap-3'>
            {questions.map((question:Question, index:number) => (
                <div key={question._id}>
                <p className='question'>
                    {index + 1}. {question.que}
                </p>
                <input
                    required={true}
                    name={`ans-${question._id}`}
                    onChange={(e) => handleInputChange(e, question._id)}
                    value={answers[`ans-${question._id}`].answer}
                />
                </div>
            ))}
            </div>
            {!loading && <button type="submit" className='button button-dark flex flex-row gap-1 mt-8 mb-8'>
                <p>Send</p>
                <BsArrowRight />
            </button>}
            {loading && <button className='button button-dark flex flex-row gap-1 mt-8 mb-8'>
                <Ring color='#ffffff'/>
            </button>}
        </form>
    </div>
  );
};

export default Questionare;
