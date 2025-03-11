"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "./test/(components)/ProgressBar";
import QuestionCard from "./test/(components)/QuestionCard";
import { QUESTIONS } from "./test/(constants)/QUESTION";

const TOTAL_QUESTIONS = 12; // MBTI 질문 총 개수
interface Option {
  text: string;
  value: string;
}
export default function MBTITest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (selectedOption: Option) => {
    setAnswers([...answers, selectedOption.value]);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              css build가 안된당
            </h1>
            <p className="text-gray-600">빌드 테스트</p>
          </div>

          <ProgressBar current={currentQuestion} total={TOTAL_QUESTIONS} />

          <AnimatePresence mode="wait">
            <QuestionCard
              key={currentQuestion}
              question={QUESTIONS[currentQuestion].question}
              options={QUESTIONS[currentQuestion].options.map((option) => ({
                text: option.text,
                value: option.type,
              }))}
              onSelect={handleAnswer}
              currentQuestionNumber={currentQuestion + 1}
              totalQuestions={TOTAL_QUESTIONS}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
