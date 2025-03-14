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
            name: '베르톨트 후버 (Bertolt Hoover)',
            description:
                '조용하고 내성적이지만, 내면적으로 깊은 고민을 가진 성향. 즉흥적이지만 신중하며, 감정을 쉽게 드러내지 않음.',
        },
        {
            name: '니콜로 (Niccolo)',
            description:
                '예술적 감각이 뛰어나며, 감정 표현이 풍부한 인물. 요리에 대한 열정과 사랑하는 사람을 향한 애정이 깊은 감성적인 유형.',
        },
    ],
    INFP: [
        {
            name: '히스토리아 레이스 (Historia Reiss)',
            description:
                '주변 사람을 따뜻하게 대하며, 자신의 가치와 신념을 중요하게 여기는 이상주의적 성향. 본래 내향적이지만 점차 자신의 길을 찾아가는 성장형 인물.',
        },
    ],
    ISTP: [
        {
            name: '유미르 (Ymir)',
            description:
                '독립적이고 현실적이며, 상황에 맞게 즉흥적으로 대처하는 성향. 감정보다 논리를 우선하며, 자기 신념이 강함.',
        },
        {
            name: '피크 핑거 (Pieck Finger)',
            description:
                '실용적이고 전략적인 성향을 가지며, 상황을 유연하게 분석하는 능력이 뛰어남. 독립적이면서도 현실적인 판단을 내리는 인물.',
        },
    ],
    INTP: [
        {
            name: '애니 레온하트 (Annie Leonhart)',
            description:
                '과묵하고 냉정한 성향을 가지며, 상황을 논리적으로 분석하는 데 능숙함. 감정보다는 이성적 판단을 우선시하며, 독립적인 사고방식을 가짐.',
        },
        {
            name: '테오 마카트 (Theo Magath)',
            description:
                '논리적이며 철저한 전략가로, 감정보다는 현실적이고 합리적인 판단을 중요시하는 성향. 상황을 분석하고 최선의 방법을 찾는 데 능숙함.',
        },
    ],
    ESFP: [
        {
            name: '코니 스프링거 (Connie Springer)',
            description:
                '명랑하고 에너지가 넘치며, 주변 분위기를 밝게 만드는 유형. 즉흥적이며 상황에 맞게 유연하게 대처하는 성향.',
        },
    ],
    ENFP: [
        {
            name: '사샤 브라우스 (Sasha Blouse)',
            description:
                '즉흥적이고 낙천적이며, 주변을 유쾌하게 만드는 성향. 자유롭고 감각적인 사고를 가지며, 새로운 경험을 즐기는 타입.',
        },
    ],
    ESTP: [
        {
            name: '한지 조에 (Hange Zoë)',
            description:
                '호기심이 많고 창의적이며, 직접 실험하고 경험하는 것을 즐기는 성향. 논리적이면서도 즉흥적인 면이 있어 위험을 감수하는 데 거부감이 없음.',
        },
        {
            name: '케니 아커만 (Kenny Ackerman)',
            description:
                '자유롭고 거침없는 성향을 가진 인물. 본능적으로 움직이며 현실적이고 직관적인 판단을 중요하게 여기는 타입.',
        },
    ],
    ENTP: [
        {
            name: '에렌 예거 (Eren Yeager)',
            description:
                '강한 신념과 추진력을 가지고 있으며, 도전과 변화를 두려워하지 않는 성향. 독립적이며 자신의 목표를 이루기 위해 끊임없이 행동하는 타입.',
        },
        {
            name: '플로크 포르스터 (Floch Forster)',
            description:
                '극단적인 현실주의자로, 이상과 현실 사이에서 논쟁을 즐기는 성향. 자기 신념이 강하며, 주변을 설득하는 능력이 뛰어남.',
        },
    ],
    ISFJ: [
        {
            name: '라이너 브라운 (Reiner Braun)',
            description:
                '책임감이 강하고, 자신이 맡은 역할을 수행하는 데 헌신적인 성향. 내면적으로 갈등이 많지만, 자신의 감정보다는 주어진 임무를 우선시함.',
        },
        {
            name: '칼라 예거 (Carla Yeager)',
            description:
                '가족과 공동체를 위해 헌신적인 성향을 보이며, 따뜻한 마음을 가진 인물. 보호적이고 배려심이 강하며, 주변 사람들에게 안정감을 줌.',
        },
    ],
    INFJ: [
        {
            name: '아르민 아를레르트 (Armin Arlert)',
            description:
                '이상주의적이며 전략적인 사고를 하는 천재적 인물. 깊이 있는 사고를 하며, 넓은 시야로 상황을 분석하는 능력이 뛰어남.',
        },
        {
            name: '윌리 타이버 (Willy Tybur)',
            description:
                '세상을 바라보는 큰 그림을 가지고 있으며, 이상과 현실 사이에서 균형을 잡으려는 성향. 강한 리더십과 설득력이 돋보이는 인물.',
        },
    ],
    ISTJ: [
        {
            name: '미카사 아커만 (Mikasa Ackerman)',
            description:
                '책임감이 강하고 현실적이며, 사랑하는 사람을 지키기 위해 어떤 상황에서도 냉정하게 행동하는 성향. 강한 의지와 실전을 중시하는 실용적인 유형.',
        },
        {
            name: '키스 샤디스 (Kitz Shadis)',
            description:
                '규율과 원칙을 중요시하며, 조직의 질서를 지키려는 성향이 강함. 냉정하고 철저한 태도를 보이지만, 내면적으로 깊은 신념을 가진 인물.',
        },
    ],
    INTJ: [
        {
            name: '리바이 아커만 (Levi Ackerman)',
            description:
                '철저한 현실주의자로, 실용적이며 즉각적인 판단력이 뛰어난 엘리트 병사. 감정을 드러내기보다는 효율적인 선택을 우선시함.',
        },
        {
            name: '지크 예거 (Zeke Yeager)',
            description:
                '뛰어난 전략가이자 현실적인 사고를 가진 인물. 감정보다는 철저한 논리와 계획을 기반으로 행동하는 성향.',
        },
    ],
    ESFJ: [
        {
            name: '페트라 랄 (Petra Ral)',
            description:
                '조직을 위해 헌신하며, 주변 사람들과 원만한 관계를 유지하는 유형. 따뜻하고 배려심이 많으며, 팀워크를 중시하는 성향.',
        },
        {
            name: '도트 픽시스 (Dot Pixis)',
            description:
                '조직을 조율하는 능력이 뛰어나며, 사람들과 원활한 관계를 유지하는 리더. 유연한 사고방식을 가지면서도 결단력이 있는 인물.',
        },
    ],
    ENFJ: [
        {
            name: '마르코 보트 (Marco Bott)',
            description:
                '성실하고 배려심이 깊으며, 조화를 중요시하는 성향. 동료들에게 희망을 주고, 모두가 함께 성장할 수 있도록 돕는 리더형 인물.',
        },
        {
            name: '오냥코퐁 (Onyankopon)',
            description:
                '차별 없는 세상을 꿈꾸며, 타인과의 협력을 중요시하는 성향. 조화와 균형을 중시하는 이상주의적 지도자.',
        },
    ],
    ESTJ: [
        {
            name: '장 키르슈타인 (Jean Kirschtein)',
            description:
                '현실적이고 논리적이며, 조직을 이끄는 능력이 뛰어난 유형. 감정보다는 효율을 우선하며, 강한 결단력과 리더십을 보이는 성향.',
        },
    ],
    ENTJ: [
        {
            name: '에르빈 스미스 (Erwin Smith)',
            description:
                '대담한 전략가로, 멀리 내다보는 능력이 뛰어난 리더. 목표를 위해 냉철하게 판단하며, 자신의 신념을 굳건히 지키는 성향.',
        },
        {
            name: '플로크 포르스터 (Floch Forster)',
            description:
                '강한 신념과 카리스마를 바탕으로 예거파를 이끈 선동자. 냉철한 현실주의자로, 목표를 위해 가혹한 선택도 서슴지 않는 성향.',
        },
    ],
};

export const RESULT_MY = {
    ISFP: '당신은 조사병단의 <span style="font-weight: 800;">‘갬성파 힐러’🌿</span>입니다. 감성 충만하고, 자연과 분위기를 즐기는 타입. 실전에서도 동물적 직감으로 움직이며, 누구보다 유연하게 싸움. 조용한 듯하지만 할 말은 확실히 하고, 동료들에게는 은근 정 많음. 훈련을 대충 하는 것 같아도 막상 자세히 보면 대충 하는 건 아님ㅋㅋ.',

    INFP: '당신은 조사병단의 <span style="font-weight: 800;">‘낭만 가득 철학자’✨</span>입니다. 거인보다 ‘우리 존재의 이유’에 더 관심 많음. ‘인간은 왜 싸우는가’ 같은 생각 하느라 훈련 중 멍때릴 확률 90%. 현실보다 이상을 추구하지만, 전투에서는 뜻밖의 용기를 보여 동료들을 감동시킴. 하지만 후폭풍으로 이불킥 예약됨.',

    ISTP: "당신은 조사병단의 <span style='font-weight: 800;'>‘핵쿨내 진짜 고수’😎</span>입니다. 감정 기복 없음. 말도 많지 않음. 하지만 실전 들어가면 미쳤음. 쓸데없는 말 안 하고 그냥 한 방에 거인 썰어버림. 장비 정비는 누구보다 철저히 하지만, 훈련 시간엔 의자 뒤로 젖히고 낮잠 자는 타입. '어차피 전장에선 경험이 답'이 모토.",

    INTP: "당신은 조사병단의 <span style='font-weight: 800;'>‘천재 전략가’🧠</span>입니다. 전투보다는 전술 연구가 재밌음. '어차피 싸움은 머리로 하는 거지' 마인드. 훈련할 때는 대충하는 것 같지만, 막상 전투 들어가면 ‘아 저게 다 계산이었구나’ 싶어지는 플레이 보여줌. 동료들한테 “그거 논리적으로 말이 안 되는데?” 자주 함ㅋㅋ.",

    ESFP: '당신은 조사병단의 <span style="font-weight: 800;">‘분위기 메이커’🎉</span>입니다. ‘와~ 미쳤다!!!’ 하고 기세로 거인 잡는 타입. 싸우면서도 동료들 사기 올려주고, 훈련이든 실전이든 유쾌하게 해냄. ‘걱정하면 뭐 하냐, 일단 해보는 거지’ 마인드로 살아감. 근데 가끔 너무 즉흥적이라 위험한 상황 만듦ㅋㅋ.',

    ENFP: '당신은 조사병단의 <span style="font-weight: 800;">‘자유로운 영혼’🌈</span>입니다. 어딜 가든 친구 만들고, 거인과 싸우면서도 “아 근데 우리 이렇게까지 해야 해?” 같은 철학적 고민 시작함. 돌발 행동이 많아서 간부들 속 좀 썩이지만, 특유의 감각과 창의력으로 해결하는 능력이 있음. ‘전투도 중요하지만 재미도 있어야지’ 마인드.',

    ESTP: '당신은 조사병단의 <span style="font-weight: 800;">‘야생 본능’🔥</span>입니다. ‘고민은 거인 잡고 나서’ 마인드. 전투 센스 미쳤음. 머리로 따지는 거 싫어하고, 몸이 먼저 움직이는 타입. 가끔 무모한 돌격해서 간부들이 혈압 오르게 하지만, 막상 보면 ‘아 쟤 진짜 천재인가?’ 싶음. 피지컬+직감 조합이라 거인도 당황함ㅋㅋ.',

    ENTP: "당신은 조사병단의 <span style='font-weight: 800;'>‘토론 배틀러’⚡</span>입니다. 회의 때마다 논쟁을 시작하는 타입. “이건 이렇게 하면 더 효율적인데?” 하다가 반나절 날림. 하지만 그만큼 머리가 잘 돌아가고, 예상치 못한 상황에서도 유연하게 대처하는 능력이 있음. 전투 중에도 입은 살아있음. '야 이거 논리적으로 말이 안 되잖아?'가 입버릇.",

    ISFJ: '당신은 조사병단의 <span style="font-weight: 800;">‘다정한 헌신가’💙</span>입니다. 전투 중에도 동료들 먼저 챙김. ‘괜찮아? 안 다쳤어?’가 기본 대사. 분위기 조율도 잘해서 다들 당신 믿고 따름. 근데 정작 본인은 ‘난 대충 하는데...’라고 생각함ㅋㅋ. 하지만 은근 강단 있어서 위급 상황에서도 멘탈 무너지지 않음.',

    INFJ: '당신은 조사병단의 <span style="font-weight: 800;">‘비전 있는 조용한 리더’🔮</span>입니다. 딱히 앞에서 나서지는 않지만, 분위기를 잘 읽고 적절한 조언을 해주는 타입. 모두가 막무가내일 때 조용히 ‘이건 이렇게 하면 돼’ 하고 해결책 제시함. 고민 많아 보이지만, 결정할 땐 누구보다 확신 있게 결정함. ‘계획형 낭만가’ 스타일.',

    ISTJ: '당신은 조사병단의 <span style="font-weight: 800;">‘성실한 군인’🛡️</span>입니다. 훈련 개근왕, 작전 수행률 100%. 규율을 철저히 따르며, 동료들이 대충하면 잔소리 담당함. 하지만 실전에서는 냉정한 판단력과 뛰어난 생존력으로 모두를 지켜냄. ‘어차피 실력이 답’이라는 마인드라 쓸데없는 수다는 안 함. 훈련 기록은 항상 최상위권.',

    INTJ: '당신은 조사병단의 <span style="font-weight: 800;">‘완벽주의 전략가’♟️</span>입니다. ‘거인은 힘이 아니라 두뇌로 잡는 거다’가 철학. 항상 3수 앞을 내다보는 타입. 근데 가끔 너무 냉철해서 ‘사람 맞아?’ 소리 들음ㅋㅋ. 비효율적인 거 딱 질색이고, 계획이 틀어지면 다시 계산해서 최적의 방법 찾아냄. ‘팩트 폭격기’ 담당.',

    ESFJ: '당신은 조사병단의 <span style="font-weight: 800;">‘사교력 만렙 리더’🤝</span>입니다. 다 같이 뭉쳐야 힘을 발휘한다고 믿는 타입. 평소엔 밝고 사교적인데, 전투에선 엄청 꼼꼼하게 챙김. 팀워크 담당이라 동료들이 다 따르고 의지함. 누군가 빠지면 끝까지 챙겨주는 스타일. 하지만 가끔 너무 오지랖 발동해서 간부들한테 잔소리 들음ㅋㅋ.',

    ENFJ: '당신은 조사병단의 <span style="font-weight: 800;">‘카리스마 조언가’✨</span>입니다. ‘너라면 할 수 있어’ 같은 말로 팀원들 사기 올려주는 타입. 동료들이 다 당신한테 고민 상담함. ‘우리 다 같이 살아서 돌아가자’가 철학. 하지만 가끔 혼자 책임지려다가 본인 멘탈 터질 수도 있음. 감성+전략 조합이라 전장에서도 대장감 소리 들음.',

    ESTJ: '당신은 조사병단의 <span style="font-weight: 800;">‘실전형 리더’📢</span>입니다. ‘작전은 계획대로, 전투는 확실하게’가 모토. 효율성 덕후라 시간 낭비 싫어함. 즉흥적인 행동 보면 혈압 오름ㅋㅋ. 전장에서도 냉철하게 판단하고, 동료들이 갈팡질팡하면 한 마디로 정리해 줌. ‘어차피 승리는 조직력이 결정한다’ 마인드.',

    ENTJ: '당신은 조사병단의 <span style="font-weight: 800;">‘카리스마 총사령관’👑</span>입니다. ‘비전, 전략, 실행력’ 삼박자 갖춘 완벽한 리더. 모두가 당황할 때도 ‘이렇게 하면 이길 수 있다’며 방향 제시하는 타입. 결단력 넘치고 추진력 있어서 간부들이 인정함. 하지만 가끔 너무 냉철해서 ‘진짜 저게 사람이냐’ 소리 들음ㅋㅋ.',
};
