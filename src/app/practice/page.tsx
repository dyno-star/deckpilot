"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, X, Check, RotateCcw, Home } from "lucide-react";

interface Card {
  id: string;
  front: string;
  back: string;
  deckId: string;
  options?: string[];
  correctOptionIndex?: number;
}

const mockCards: Card[] = [
  {
    id: "1",
    front: "What is the company's remote work policy?",
    back: "Employees can work remotely up to 3 days per week with manager approval. Core hours are 10 AM - 3 PM for collaboration.",
    deckId: "1",
    options: [
      "Fully remote with no office requirements",
      "Up to 3 days per week with manager approval",
      "Only 1 day per week allowed",
      "No remote work permitted"
    ],
    correctOptionIndex: 1,
  },
  {
    id: "2",
    front: "What is our PTO policy?",
    back: "Full-time employees receive 20 days PTO annually, plus 10 company holidays. PTO accrues at 1.67 days per month.",
    deckId: "1",
    options: [
      "15 days PTO annually",
      "20 days PTO annually plus 10 holidays",
      "25 days PTO annually",
      "Unlimited PTO"
    ],
    correctOptionIndex: 1,
  },
  {
    id: "3",
    front: "What is the Enterprise plan pricing?",
    back: "Enterprise plan starts at $999/month for up to 500 users. Includes custom integrations, dedicated support, and SLA guarantees.",
    deckId: "2",
    options: [
      "$499/month for up to 250 users",
      "$999/month for up to 500 users",
      "$1499/month for up to 1000 users",
      "$1999/month unlimited users"
    ],
    correctOptionIndex: 1,
  },
  {
    id: "4",
    front: "What is the SPIN selling methodology?",
    back: "SPIN stands for Situation, Problem, Implication, Need-Payoff. It's a questioning technique that helps uncover customer needs.",
    deckId: "3",
    options: [
      "Sales, Price, Interest, Negotiation",
      "Strategy, Planning, Implementation, Numbers",
      "Situation, Problem, Implication, Need-Payoff",
      "Service, Product, Innovation, Network"
    ],
    correctOptionIndex: 2,
  },
  {
    id: "5",
    front: "What is our refund policy?",
    back: "Customers can request a full refund within 30 days of purchase. After 30 days, refunds are prorated based on remaining subscription term.",
    deckId: "2",
    options: [
      "No refunds under any circumstances",
      "7-day full refund window",
      "30-day full refund, prorated after",
      "90-day full refund window"
    ],
    correctOptionIndex: 2,
  },
];

export default function PracticePage() {
  const searchParams = useSearchParams();
  const deckId = searchParams.get("deck");

  const [cards, setCards] = useState<Card[]>(
    deckId ? mockCards.filter((c) => c.deckId === deckId) : mockCards
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0, skipped: 0 });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);

  const currentCard = cards[currentIndex];
  const progress = ((currentIndex + (showAnswer ? 1 : 0)) / cards.length) * 100;

  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === currentCard.correctOptionIndex;
    setAnsweredCorrectly(isCorrect);
    setShowAnswer(true);
  };

  const handleAnswer = (quality: "correct" | "incorrect" | "skipped") => {
    setStats((prev) => ({ ...prev, [quality]: prev[quality as keyof typeof prev] + 1 }));
    
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
      setSelectedOption(null);
      setAnsweredCorrectly(null);
    } else {
      setSessionComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setSessionComplete(false);
    setStats({ correct: 0, incorrect: 0, skipped: 0 });
    setSelectedOption(null);
    setAnsweredCorrectly(null);
  };

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center">
        <Card className="border-white/10 bg-white/5 max-w-md">
          <CardContent className="p-8 text-center">
            <Brain className="mx-auto h-16 w-16 text-zinc-600 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">No Cards Available</h2>
            <p className="text-zinc-400 mb-6">This deck doesn't have any cards to practice.</p>
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Home className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (sessionComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center">
        <Card className="border-white/10 bg-white/5 max-w-md">
          <CardContent className="p-8 text-center">
            <Brain className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Practice Complete!</h2>
            <p className="text-zinc-400 mb-6">Great job completing this session.</p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="rounded-lg bg-green-500/10 p-4">
                <div className="text-2xl font-bold text-green-500">{stats.correct}</div>
                <div className="text-xs text-zinc-400">Correct</div>
              </div>
              <div className="rounded-lg bg-red-500/10 p-4">
                <div className="text-2xl font-bold text-red-500">{stats.incorrect}</div>
                <div className="text-xs text-zinc-400">Incorrect</div>
              </div>
              <div className="rounded-lg bg-zinc-500/10 p-4">
                <div className="text-2xl font-bold text-zinc-500">{stats.skipped}</div>
                <div className="text-xs text-zinc-400">Skipped</div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button onClick={handleReset} variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                <RotateCcw className="mr-2 h-4 w-4" />
                Practice Again
              </Button>
              <Link href="/dashboard" className="flex-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2 text-zinc-400 hover:text-white">
              <Home className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold text-white">Practice Mode</span>
            </div>
            <div className="text-sm text-zinc-400">
              {currentIndex + 1} / {cards.length}
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-white/10 bg-white/5">
          <CardContent className="p-8">
            <div className="mb-8">
              <p className="text-sm text-zinc-500 mb-2">Question</p>
              <h2 className="text-xl font-semibold text-white">{currentCard.front}</h2>
            </div>

            {showAnswer ? (
              <div className="space-y-6">
                {currentCard.options && currentCard.correctOptionIndex !== undefined && (
                  <div className="space-y-3">
                    <p className="text-sm text-zinc-500 mb-3">Select your answer:</p>
                    {currentCard.options.map((option, index) => {
                      const isSelected = selectedOption === index;
                      const isCorrect = index === currentCard.correctOptionIndex;
                      
                      let buttonClass = "w-full text-left justify-start border-white/20 text-white hover:bg-white/10";
                      if (isSelected) {
                        buttonClass = isCorrect 
                          ? "w-full text-left justify-start border-green-500 bg-green-500/20 text-green-400"
                          : "w-full text-left justify-start border-red-500 bg-red-500/20 text-red-400";
                      } else if (selectedOption !== null && isCorrect) {
                        buttonClass = "w-full text-left justify-start border-green-500/50 bg-green-500/10 text-green-400";
                      }
                      
                      return (
                        <Button
                          key={index}
                          onClick={() => handleOptionSelect(index)}
                          variant="outline"
                          className={buttonClass}
                          disabled={selectedOption !== null}
                        >
                          <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                          {option}
                          {isSelected && isCorrect && <Check className="ml-auto h-4 w-4" />}
                          {isSelected && !isCorrect && <X className="ml-auto h-4 w-4" />}
                          {!isSelected && selectedOption !== null && isCorrect && <Check className="ml-auto h-4 w-4" />}
                        </Button>
                      );
                    })}
                  </div>
                )}

                <div className="rounded-lg bg-white/5 p-6">
                  <p className="text-sm text-zinc-500 mb-2">Answer</p>
                  <p className="text-white leading-relaxed">{currentCard.back}</p>
                </div>

                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                  <Button
                    onClick={() => handleAnswer("incorrect")}
                    variant="outline"
                    className="flex-1 border-red-500/50 text-red-400 hover:bg-red-500/10"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Needs Review
                  </Button>
                  <Button
                    onClick={() => handleAnswer("skipped")}
                    variant="outline"
                    className="flex-1 border-zinc-500/50 text-zinc-400 hover:bg-zinc-500/10"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Skip
                  </Button>
                  <Button
                    onClick={() => handleAnswer("correct")}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Got It!
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {currentCard.options && currentCard.correctOptionIndex !== undefined ? (
                  <>
                    <p className="text-sm text-zinc-500 mb-3">Select your answer:</p>
                    {currentCard.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleOptionSelect(index)}
                        variant="outline"
                        className="w-full text-left justify-start border-white/20 text-white hover:bg-white/10"
                      >
                        <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </Button>
                    ))}
                  </>
                ) : (
                  <Button
                    onClick={() => setShowAnswer(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    Show Answer
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-center space-x-8 text-sm text-zinc-500">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>Correct: {stats.correct}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <span>Review: {stats.incorrect}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-zinc-500" />
            <span>Skipped: {stats.skipped}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
