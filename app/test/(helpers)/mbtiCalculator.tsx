interface MBTICount {
  I: number;
  E: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export function calculateMBTI(answers: Array<{ type: string }>) {
  const count: MBTICount = {
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // 각 답변 카운트
  answers.forEach((answer) => {
    count[answer.type as keyof MBTICount]++;
  });

  // MBTI 결과 계산
  const result = [
    count.I > count.E ? "I" : "E",
    count.S > count.N ? "S" : "N",
    count.T > count.F ? "T" : "F",
    count.J > count.P ? "J" : "P",
  ];

  return result.join("");
}
