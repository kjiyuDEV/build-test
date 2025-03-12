// app/test/(components)/ResultContents.tsx

import React from 'react';
import { RESULT, RESULT_MY } from '../(constants)/QUESTION';
import { motion } from 'framer-motion';

const ResultContents = ({ mbtiType }: { mbtiType: string }) => {
    const characters = RESULT[mbtiType as keyof typeof RESULT];
    const myCharacterDescription = RESULT_MY[mbtiType as keyof typeof RESULT_MY]; // RESULT_MY에서 문자열 가져오기

    return (
        <div className="bg-gradient-to-b mb-0 from-indigo-50 to-white p-8">
            <div className="container">
                <motion.h1
                    className="text-5xl font-bold text-center mb-6 text-gray-900"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    당신의 MBTI 유형은 <span className="text-indigo-600">{mbtiType}</span>입니다!
                </motion.h1>
                {/* RESULT_MY 문자열 추가 */}
                <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
                    <p
                        className="text-gray-800"
                        dangerouslySetInnerHTML={{ __html: myCharacterDescription }}
                    />{' '}
                    {/* 캐릭터 설명 문자열 */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {characters.map(
                        (character: { name: string; description: string }, index: number) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    {character.name}
                                </h2>
                                <p className="text-gray-800">{character.description}</p>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultContents;
