"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "./test/(components)/ProgressBar";
import QuestionCard from "./test/(components)/QuestionCard";
import { QUESTIONS } from "./test/(constants)/QUESTION";
import { calculateMBTI } from "./test/(helpers)/mbtiCalculator";

const TOTAL_QUESTIONS = 10; // MBTI 질문 총 개수
interface Option {
  text: string;
  value: string;
}
export default function MBTITest() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (selectedOption: Option) => {
    const newAnswers = [...answers, selectedOption.value];
    setAnswers(newAnswers);

    if (currentQuestion === TOTAL_QUESTIONS) {
      const formattedAnswers = newAnswers.map((answer) => ({ type: answer }));
      const mbtiResult = calculateMBTI(formattedAnswers);
      setResult(mbtiResult);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              응답지 조정중😛
            </h1>
            <p className="text-gray-600">김지유가 젤 쎔</p>
          </div>

          {result ? (
            // 결과 화면
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                당신의 MBTI는?
              </h2>
              <p className="text-5xl font-bold text-indigo-600 mb-6">
                {result}
              </p>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setResult(null);
                }}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                다시 테스트하기
              </button>
            </div>
          ) : (
            // 질문 화면
            <>
              <ProgressBar current={currentQuestion} total={TOTAL_QUESTIONS} />
              <AnimatePresence mode="wait">
                <QuestionCard
                  key={currentQuestion}
                  question={QUESTIONS[currentQuestion - 1].question}
                  options={QUESTIONS[currentQuestion - 1].options.map(
                    (option) => ({
                      text: option.text,
                      value: option.type,
                    })
                  )}
                  onSelect={handleAnswer}
                  currentQuestionNumber={currentQuestion}
                  totalQuestions={TOTAL_QUESTIONS}
                />
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
