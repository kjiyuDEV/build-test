export const QUESTIONS = [
    {
        id: 1,
        question: '조사병단 입단의 첫날 밤, 나는 잠을 뒤척이고 있다.',
        options: [
            {
                text: '동료들과의 신뢰를 쌓는 것이 중요해. 얼른 친해져야겠다.',
                type: 'E/F',
            },
            {
                text: '내일부터 훈련이네... 얼른 완벽하게 준비해둬야겠어. 놓친게 있을까?',
                type: 'T/J',
            },
            {
                text: '다들 리더가 될만한 재질은 아닌 것 같다. 리더자리엔 내가 제일 적합한 듯?',
                type: 'E/T',
            },
            {
                text: '설레면서 긴장된다. 훈련들도 기대되고, 동료들도 기대돼. 내가 잘 할 수 있을까?',
                type: 'N/F',
            },
        ],
    },
    {
        id: 2,
        question: '훈련장에서 한 동료가 입체기동장치 착용에 어려움을 겪고 있다',
        options: [
            { text: '"괜찮아! 나도 처음에 그랬어! 옆에서 같이 해보자"', type: 'E/F' },
            { text: '"너 자세가 틀린거 같아. 차근차근 원인을 찾아보자"', type: 'T/J' },
            { text: '조용히 다가가서 슬쩍 도와준다', type: 'I/F' },
            { text: '"이건 말로 설명하긴 힘든데, 내가 하는걸 봐봐! 자.. 이렇게.."', type: 'P/N' },
        ],
    },
    {
        id: 3,
        question: '1:1 전투 훈련이 시작됐다. 상대방과 마주섰다.',
        options: [
            { text: '치명적인 약점을 노린다. 승리는 감정이 아닌 논리다.', type: 'T/N' },
            { text: '몸이 저절로 반응하여 순간적인 감각으로 움직인다', type: 'S/P' },
            { text: '훈련소에서 다진 체계적인 기본기를 활용한다.', type: 'S/J' },
            { text: '심리를 교란시켜 상대를 당황하게 하여 우세를 점한다.', type: 'N/I' },
        ],
    },
    {
        id: 4,
        question: '훈련소의 마지막 밤. 모두가 모여 있는 식당에 있다. 나는 지금...',
        options: [
            {
                text: '"다들 모여봐! 우리 정말 고생많았어! 앞으로도 잘 해보자!" 다같이 웃고 떠들 수 있게 분위기를 주도한다.',
                type: 'E/F',
            },
            { text: '조용히 이 순간을 기억 속에 새긴다.', type: 'I/S' },
            {
                text: '지난 훈련에서 배운 거인의 약점을 다시 다같이 정리하며, 마지막 전술회의를 주도한다',
                type: 'J/T',
            },
            { text: '우리 헤어지기 전에 다 같이 영원한 동료의 증표를 남기자!', type: 'P/F' },
        ],
    },
    {
        id: 5,
        question: '수많은 교관들 중에서 내가 가장 존경하는 교관은?',
        options: [
            { text: '한 명 한 명 세심하게 챙기는 따뜻한 교관', type: 'F/E' },
            { text: '완벽한 규율과 체계적인 훈련을 중시하는 엄격한 교관', type: 'T/J' },
            { text: '실전 경험이 풍부하고 생존 노하우가 많은 베테랑 교관', type: 'P/S' },
            { text: '말 수는 적지만 행동만으로 존재감을 뿜어내는 교관', type: 'I/T' },
        ],
    },
    {
        id: 6,
        question: '성벽 밖 첫 작전회의에 나도 참여하고 있다.',
        options: [
            {
                text: '지난 탐사의 시체에서 회수한 물건을 분석하여 정보를 찾아낸다.',
                type: 'I/T',
            },
            { text: '모두의 의견을 조율하여 팀의 균형을 맞춰야한다.', type: 'F/J' },
            {
                text: '거인의 습격 시간, 날씨, 지형적 특성까지 모든 변수를 계산하여 다양한 작전 계획을 세우도록 노력한다.',
                type: 'J/T',
            },
            {
                text: '연막탄의 효율적인 사용법, 칼날의 최적의 각도 등.. 실전에서 유용하게 쓰이는 팁을 모두가 알았으면 좋겠다.',
                type: 'S/P',
            },
        ],
    },
    {
        id: 7,
        question: '첫 출전의 날. 성벽 밖 세계가 열리기 10초전이다.',
        options: [
            {
                text: `드디어 시작이다..! 심장이 뛰고 아드레날린이 솟구친다. 일단.. 진정이 안돼!`,
                type: 'P/E',
            },
            {
                text: '"가자!!! 우린 살아 돌아온다!!!!!!!!!" 동료들의 사기를 끌어올린다.',
                type: 'E/T',
            },
            { text: `잔뜩 긴장한 동료를 말없이 다독여준다 (물론 나도 떨린다)`, type: 'F/I' },
            { text: '칼날, 가스 잔량, 점검 완료... 비상 칼날도 한 번 더 점검....', type: 'J/S' },
        ],
    },
    {
        id: 8,
        question: '1시간 넘게 들판을 순찰하지만 거인이 보이지 않는다. 너무나도 평화롭다.',
        options: [
            { text: '평화롭다니, 이상하다. 더욱 더 경계한다.', type: 'T/J' },
            {
                text: '"우리가 무서워서 도망친거 아냐?" 동료들의 무거운 긴장을 풀어준다.',
                type: 'E/F',
            },
            {
                text: '거인과의 전투에 승리한다면 언젠가 이렇게 평화로운 땅을 되찾을 수 있겠지?',
                type: 'I/F',
            },
            { text: '지금처럼 여유가 있을 때 지형과 지도를 다시 한번 더 살피자', type: 'S/J' },
        ],
    },
    {
        id: 9,
        question: '방심한 틈을 타 갑작스럽게 거인이 습격했다!',
        options: [
            { text: '침착하게 상황을 정리하고 상관의 명령에 따른다', type: 'I/J' },
            { text: '팀에게 합동 공격을 지시하며, 대열을 정비시킨다.   ', type: 'E/T' },
            { text: '먼저 안전한 위치로 이동한 후에 상황을 파악하려한다', type: 'S/P' },
            {
                text: '이 타이밍에 습격을 하다니.. 섣불리 행동하면 안된다',
                type: 'N/T',
            },
        ],
    },
    {
        id: 10,
        question: '무사히 귀환 했다. 가장 먼저...',
        options: [
            { text: '장비를 먼저 점검해야한다. 무뎌진 곳이 있나?', type: 'T/J' },
            {
                text: '살아남은 동료들과 함께 울고 웃는 시간을 가진다.',
                type: 'E/F',
            },
            { text: '당장은 아무 생각도 하고 싶지 않다. 혼자 좀 쉬고 싶다.', type: 'I/P' },
            {
                text: '오늘 목격한 거인의 행동, 패턴, 약점이 기억속에 흐려지기 전에 기록한다.',
                type: 'N/J',
            },
        ],
    },
];

export const RESULT = {
    ISFP: [
        {
            name: '피크 핑거 (Pieck Finger)',
            description:
                '침착하고 유연한 성격을 가진 지략가. 감각적으로 움직이며 실전에서 강한 타입.',
        },
        {
            name: '페트라 랄 (Petra Ral)',
            description: '조사병단의 숙련된 병사로, 따뜻한 성격이면서도 실전에 능숙한 유형.',
        },
    ],
    INFP: [
        {
            name: '베르톨트 후버 (Bertolt Hoover)',
            description:
                '조용하고 내면적인 성향을 가진 이상주의자. 주변을 배려하지만 우유부단한 면도 있음.',
        },
        {
            name: '프록코 갤리어드 (Porco Galliard)',
            description: '직설적인 태도를 가지면서도 내면적으로 갈등이 많은 인물.',
        },
    ],
    ISTP: [
        {
            name: '리바이 아커만 (Levi Ackerman)',
            description: '철저한 현실주의자로, 실용적이며 즉각적인 판단력이 뛰어난 엘리트 병사.',
        },
        {
            name: '애니 레온하트 (Annie Leonhart)',
            description: '과묵하지만 전투 능력이 뛰어나고, 자신의 가치관을 끝까지 지키는 유형.',
        },
    ],
    INTP: [
        {
            name: '지크 예거 (Zeke Yeager)',
            description: '천재적인 두뇌와 논리적인 사고력을 가진 전략가.',
        },
        {
            name: '와리스 (Varis)',
            description: '마레의 전술가로, 상황을 분석하고 철저한 계산을 하는 타입.',
        },
    ],
    ESFP: [
        {
            name: '사샤 브라우스 (Sasha Blouse)',
            description: '활발하고 사교적인 성격으로, 즉흥적인 행동과 유머 감각이 뛰어난 타입.',
        },
        {
            name: '니콜로 (Nicolo)',
            description: '전쟁 중에서도 따뜻한 마음을 가진 요리사로, 감각적이고 자유로운 성향.',
        },
    ],
    ENFP: [
        {
            name: '한지 조에 (Hange Zoë)',
            description: '호기심 많고 창의적이며, 실험적인 사고를 즐기는 유형.',
        },
        {
            name: '코니 스프링거 (Connie Springer)',
            description: '에너지가 넘치며, 주변 분위기를 밝게 만드는 인물.',
        },
    ],
    ESTP: [
        {
            name: '장 키르슈타인 (Jean Kirschtein)',
            description: '현실적이면서도 결단력이 강한 리더형.',
        },
        {
            name: '케니 아커만 (Kenny Ackerman)',
            description: '잔혹하면서도 직설적인 성격을 가진 실전형 인물.',
        },
    ],
    ENTP: [
        {
            name: '플로크 포르스터 (Floch Forster)',
            description: '이상과 현실 사이에서 논쟁을 즐기는 성향.',
        },
        {
            name: '그로스 소령 (Major Gross)',
            description: '잔혹한 현실주의자로, 냉철한 논리적 사고를 지닌 장교.',
        },
    ],
    ISFJ: [
        {
            name: '마르코 보트 (Marco Bott)',
            description: '성실하고 배려심이 깊으며, 조화를 중요시하는 인물.',
        },
        {
            name: '미타비 잭슨 (Mitabi Jarnach)',
            description: '책임감 강한 조사병단의 인물로, 조용하지만 신뢰받는 성향.',
        },
    ],
    INFJ: [
        {
            name: '아르민 아를레르트 (Armin Arlert)',
            description: '이상주의적이며 전략적인 사고를 하는 천재적 인물.',
        },
        {
            name: '유미르 (Ymir)',
            description: '독립적이며 자기 신념이 강한 유형으로, 깊은 사고를 하는 인물.',
        },
    ],
    ISTJ: [
        {
            name: '미카사 아커만 (Mikasa Ackerman)',
            description:
                '책임감이 강하고 현실적이며, 사랑하는 사람을 지키기 위해 어떤 상황에서도 냉정하게 행동하는 유형.',
        },

        {
            name: '키스 샤디스 (Keith Shadis)',
            description: '엄격한 교관으로, 신념과 원칙을 중시하는 성향.',
        },
    ],
    INTJ: [
        {
            name: '에르빈 스미스 (Erwin Smith)',
            description: '대담한 전략가로, 멀리 내다보는 능력이 뛰어난 리더.',
        },
        { name: '윌리 타이버 (Willy Tybur)', description: '정치적인 감각과 계획력이 뛰어난 인물.' },
    ],
    ESFJ: [
        {
            name: '히스토리아 레이스 (Historia Reiss)',
            description: '주변 사람을 따뜻하게 대하며, 책임감을 중요하게 여기는 성향.',
        },
        {
            name: '칼라 예거 (Carla Yeager)',
            description: '가족을 위해 헌신적인 모습을 보이며, 따뜻한 성격을 가진 인물.',
        },
    ],
    ENFJ: [
        {
            name: '에렌 예거 (Eren Yeager)',
            description: '강한 신념을 가지고 사람들을 이끄는 카리스마형 리더.',
        },
        {
            name: '그리샤 예거 (Grisha Yeager)',
            description: '자신이 믿는 이상을 위해 행동하는 선동적인 유형.',
        },
    ],
    ESTJ: [
        { name: '로브로 (Lobov)', description: '조직을 중시하며, 신속한 결단력을 발휘하는 병사.' },
        {
            name: '칼비 (Calvi)',
            description: '마레의 총사령관으로, 조직을 운영하는 능력이 뛰어난 인물.',
        },
    ],
    ENTJ: [
        {
            name: '도트 픽시스 (Dot Pixis)',
            description: '전략적이며 냉철한 리더로, 빠른 판단력과 결단력을 지닌 인물.',
        },
        {
            name: '테오 마가트 (Theo Magath)',
            description: '책임감이 강하며, 조직을 운영하는 뛰어난 지휘관.',
        },
    ],
};
