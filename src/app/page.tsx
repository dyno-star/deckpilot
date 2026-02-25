import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, TrendingUp, Zap, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Deckpilot</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-zinc-300 hover:text-white">
                  Dashboard
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

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Master Your Knowledge
            </h1>
            <p className="mt-6 text-xl leading-8 text-zinc-400">
              Spaced-repetition training that converts company docs into daily practice.
              Retain more, learn faster, and build lasting expertise.
            </p>
          </div>

          <div className="mt-10 flex items-center space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/practice">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Try Demo
              </Button>
            </Link>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <Brain className="h-10 w-10 text-blue-500" />
                <CardTitle className="text-white">Smart Spaced Repetition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-400">
                  Our algorithm schedules reviews at optimal intervals to maximize retention and minimize study time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-green-500" />
                <CardTitle className="text-white">Doc to Deck</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-400">
                  Transform your company documentation into interactive flashcard decks automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-purple-500" />
                <CardTitle className="text-white">Track Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-400">
                  Monitor your learning journey with detailed analytics and performance insights.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
