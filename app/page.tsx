"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "./test/(components)/ProgressBar";

const TOTAL_QUESTIONS = 12; // MBTI 질문 총 개수

export default function MBTITest() {
  const [currentQuestion] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              테스트
            </h1>
            <p className="text-gray-600">빌드 테스트</p>
          </div>

          <ProgressBar current={currentQuestion} total={TOTAL_QUESTIONS} />

          <AnimatePresence mode="wait"></AnimatePresence>
        </div>
      </div>
    </div>
  );
}
