"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, BookOpen, Brain, TrendingUp, ArrowRight, Trash2, Edit } from "lucide-react";

interface Deck {
  id: string;
  name: string;
  description: string;
  cardsCount: number;
  dueCards: number;
  progress: number;
}

const mockDecks: Deck[] = [
  {
    id: "1",
    name: "Company Policies",
    description: "Essential HR and company policies",
    cardsCount: 45,
    dueCards: 12,
    progress: 68,
  },
  {
    id: "2",
    name: "Product Knowledge",
    description: "Features, pricing, and technical specs",
    cardsCount: 78,
    dueCards: 23,
    progress: 45,
  },
  {
    id: "3",
    name: "Sales Training",
    description: "Sales methodologies and best practices",
    cardsCount: 62,
    dueCards: 8,
    progress: 82,
  },
];

export default function DashboardPage() {
  const [decks, setDecks] = useState<Deck[]>(mockDecks);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const totalDueCards = decks.reduce((sum, deck) => sum + deck.dueCards, 0);
  const totalCards = decks.reduce((sum, deck) => sum + deck.cardsCount, 0);
  const avgProgress = Math.round(decks.reduce((sum, deck) => sum + deck.progress, 0) / decks.length);

  const handleDeleteDeck = (id: string) => {
    setDecks(decks.filter((deck) => deck.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Deckpilot</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-zinc-300 hover:text-white">
                  Home
                </Button>
              </Link>
              <Link href="/practice">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start Practice
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="mt-2 text-zinc-400">Manage your decks and track progress</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            New Deck
          </Button>
        </div>

        <div className="mb-8 grid gap-6 sm:grid-cols-3">
          <Card className="border-white/10 bg-white/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Due Today</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalDueCards}</div>
              <p className="text-xs text-zinc-500">cards to review</p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Total Cards</CardTitle>
              <Brain className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalCards}</div>
              <p className="text-xs text-zinc-500">across all decks</p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Avg Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{avgProgress}%</div>
              <p className="text-xs text-zinc-500">mastery level</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="mb-4 text-xl font-semibold text-white">Your Decks</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <Card key={deck.id} className="border-white/10 bg-white/5 transition-colors hover:bg-white/10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white">{deck.name}</CardTitle>
                    <CardDescription className="mt-1 text-zinc-400">{deck.description}</CardDescription>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-400 hover:text-red-400"
                      onClick={() => handleDeleteDeck(deck.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-zinc-400">{deck.cardsCount} cards</span>
                  <span className={deck.dueCards > 0 ? "text-blue-400" : "text-zinc-500"}>
                    {deck.dueCards} due
                  </span>
                </div>
                <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-blue-600 transition-all"
                    style={{ width: `${deck.progress}%` }}
                  />
                </div>
                <Link href={`/practice?deck=${deck.id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Practice <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
