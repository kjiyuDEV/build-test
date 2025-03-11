// app/page.tsx
import React from 'react';
import { RESULT } from '../(constants)/QUESTION';
import { motion } from 'framer-motion'; // Framer Motion import

const ResultContents = ({ mbtiType }: { mbtiType: string }) => {
    const characters = RESULT[mbtiType as keyof typeof RESULT];

    return (
        <div className="bg-gradient-to-b mb-0 from-indigo-50 to-white p-8">
            <div className="container">
                <motion.h1
                    className="text-5xl font-bold text-center mb-6 text-gray-900"
                    initial={{ scale: 0.8, opacity: 0 }} // 초기 상태
                    animate={{ scale: 1, opacity: 1 }} // 애니메이션 효과
                    transition={{ duration: 0.5 }} // 애니메이션 지속 시간
                >
                    당신의 MBTI 유형은 <span className="text-indigo-600">{mbtiType}</span>입니다!
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {characters.map(
                        (character: { name: string; description: string }, index: number) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    {character.name}
                                </h2>
                                <p className="text-gray-800">{character.description}</p>{' '}
                                {/* 색상 변경 */}
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultContents;
