"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "./test/(components)/ProgressBar";
import QuestionCard from "./test/(components)/QuestionCard";

const TOTAL_QUESTIONS = 12; // MBTI 질문 총 개수

export default function MBTITest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              나의 MBTI 찾기
            </h1>
            <p className="text-gray-600">
              질문에 답하고 나의 성격 유형을 알아보세요!
            </p>
          </div>

          <ProgressBar current={currentQuestion} total={TOTAL_QUESTIONS} />

          <AnimatePresence mode="wait">
            <QuestionCard
              key={currentQuestion}
              question="여기에 실제 질문이 들어갑니다"
              options={[
                { text: "옵션 1", value: "A" },
                { text: "옵션 2", value: "B" },
              ]}
              onSelect={handleAnswer}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
