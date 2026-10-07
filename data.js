const lessons = [
  {
    id: 1,
    title: "Building African Consciousness",
    description: "Understanding who you are as an African, recognizing your potential, and developing confidence to create value.",
    content: "Africa is not a poor continent — it is a rich continent with poor management. You are not inferior. You have the same brain power, creativity, and potential as anyone else in the world. This lesson helps you break the mindset of inferiority and build the confidence to contribute to Africa's development."
  },
  {
    id: 2,
    title: "Money Mindset",
    description: "Understanding what money is and developing a healthy relationship with it.",
    content: "Money is simply a tool — a medium of exchange. It is not good or evil. Your mindset about money determines how you earn, save, and grow it. A healthy money mindset means seeing money as a resource you can learn to manage, not something that controls you."
  },
  {
    id: 3,
    title: "Financial Basics",
    description: "Learning income, expenses, needs, wants, cash flow and financial goals.",
    content: "Income is money coming in. Expenses are money going out. Needs are things you must have (food, shelter, transport to work). Wants are things you'd like but can live without. Cash flow is the movement of money in and out. A financial goal is a specific target, like saving GH₵500 in 3 months."
  },
  {
    id: 4,
    title: "Saving",
    description: "Why we save, how to build the habit, emergency funds and goal-based saving.",
    content: "We save for three main reasons: emergencies, goals, and opportunities. Start small — even GH₵10 a week. An emergency fund should cover 3-6 months of expenses. Save automatically: set aside money the moment you receive it, not what's left at the end."
  },
  {
    id: 5,
    title: "Making Money",
    description: "Earning through employment, entrepreneurship, freelancing, and skills.",
    content: "There are many ways to earn: a salary from a job, profit from a business, fees from freelancing, or income from a skill like coding, design, or writing. The more value you create for others, the more you can earn. Don't rely on one income stream."
  },
  {
    id: 6,
    title: "Managing Money",
    description: "How to budget, control spending, and make better financial decisions.",
    content: "A budget is a plan for your money. Try the 50/30/20 rule: 50% for needs, 30% for wants, 20% for savings and debt repayment. Track every cedi you spend for one month — you'll be surprised where your money goes."
  },
  {
    id: 7,
    title: "Debt & Credit",
    description: "Loans, interest, good debt, bad debt, borrowing and avoiding debt problems.",
    content: "Good debt helps you build assets (like a loan for a business or education). Bad debt buys things that lose value (like a loan for a party). Always know the interest rate before borrowing. Never borrow more than you can repay."
  },
  {
    id: 8,
    title: "Investing",
    description: "Stocks, treasury bills, mutual funds, bonds, business and other investments.",
    content: "Investing means putting your money to work so it grows. Options include treasury bills (low risk, low return), stocks (higher risk, higher potential return), mutual funds (professionally managed), and businesses. Start small, learn continuously."
  },
  {
    id: 9,
    title: "Risk Management",
    description: "Investment risk, diversification, scams, insurance and protecting your money.",
    content: "All investments have risk. Diversification means not putting all your money in one place. If an investment promises huge returns with no risk, it's a scam. Insurance protects you from large unexpected losses."
  },
  {
    id: 10,
    title: "Building Assets",
    description: "The difference between assets and liabilities and acquiring wealth-generating things.",
    content: "An asset puts money in your pocket (rental property, dividend stocks, a business). A liability takes money out (a car you only use for pleasure, a fancy phone on credit). Focus on buying assets first, then luxuries."
  },
  {
    id: 11,
    title: "Entrepreneurship",
    description: "Identify problems, create value, start businesses, and develop income sources.",
    content: "Entrepreneurship is solving problems for profit. Look around your community — what problems do people have? Can you solve one? Start small, test your idea, listen to customers, and grow step by step."
  },
  {
    id: 12,
    title: "Financial Independence",
    description: "Set goals, increase income, control expenses, work toward independence.",
    content: "Financial independence means your assets generate enough income to cover your expenses — you no longer have to work for money. It starts with a goal, then increasing income and controlling expenses."
  },
  {
    id: 13,
    title: "Advanced Financial Knowledge",
    description: "Investment strategies, portfolio management, wealth creation and long-term planning.",
    content: "Once you understand the basics, you can learn about portfolio management (mixing different investments), advanced strategies like value investing, and long-term planning for retirement and generational wealth."
  }
];

const quizzes = {
  1: {
    question: "What is the main message of Building African Consciousness?",
    options: [
      "Africans are inferior to others",
      "Africans have the same potential as anyone else",
      "Africa is a poor continent",
      "Money is the only way to develop Africa"
    ],
    correct: 1,
    explanation: "The lesson teaches that Africans have the same brain power, creativity, and potential as anyone else — the key is breaking the mindset of inferiority."
  },
  6: {
    question: "You earn GH₵2,000 a month. Your expenses are GH₵1,400. How would you manage the remaining GH₵600?",
    options: [
      "Spend it all on wants immediately",
      "Save and invest a portion, spend some on wants",
      "Lend it all to a friend",
      "Ignore it and leave it in your account"
    ],
    correct: 1,
    explanation: "A healthy approach is to save and invest a portion (e.g., GH₵400) and use some for wants (GH₵200). This builds wealth while enjoying life."
  }
};
