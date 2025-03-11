import { motion } from "framer-motion";

interface Option {
  text: string;
  value: string;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  onSelect: (selectedOption: Option) => void;
  currentQuestionNumber: number;
  totalQuestions: number;
}

export default function QuestionCard({
  question,
  options,
  onSelect,
  currentQuestionNumber,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 md:p-8"
    >
      <div className="mb-4 text-sm text-gray-500">
        {currentQuestionNumber} / {totalQuestions}
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        {question}
      </h2>

      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className="w-full p-4 text-left rounded-xl border-2 border-indigo-100 
                       hover:border-indigo-500 hover:bg-indigo-50 transition-all
                       duration-200 ease-in-out text-gray-700 hover:text-indigo-700"
          >
            {option.text}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
