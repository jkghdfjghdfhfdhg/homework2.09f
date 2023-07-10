import React, { useState } from 'react';
import './App.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Сколько раз в год можно обратиться к терапевту или педиатру по данной программе?   ',
      answer: 'Количество обращений не ограничено в течение всего срока действия договора. ',
    },
    {
      id: 2,
      question: 'Сколько раз в год можно обратиться к узкому специалисту? ',
      answer: 'Можно обратиться один раз',
    },
    {
      id: 3,
      question: 'Как получить консультацию врача? ',
      answer: 'Свяжитесь с медицинским учреждением: позвоните в поликлинику, больницу или клинику и запишитесь на консультацию врача',
    },
    {
      id: 4,
      question: 'Какие врачи-специалисты представлены в сервисе, кроме терапевта и педиатра? ',
      answer: 'В сервисе представлены также кардиолог,невролог,и акулист',
    },
    {
      id: 5,
      question: 'Как получить консультацию педиатра, если возраст ребенка меньше 1 года, и оформить на ребенка программу нельзя? ',
      answer: 'Прием без записи',
    }
  ];

  const handleItemClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div className="faq-container">
      <h1 className="faq-title">Часто задаваемые вопросы</h1>
      <div className="faq-items">
        {questions.map((item, i) => (
          <div
            key={item.id}
            className={`faq-item ${activeIndex === i ? 'active' : ''}`}
            onClick={() => handleItemClick(i)}
          >
            <h3 className="faq-question">{item.question}</h3>
            {activeIndex === i && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

