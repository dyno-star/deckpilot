import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              DeckPilot
            </h1>
            <p className="mt-6 text-xl leading-8 text-zinc-400">
              Transform your company documentation into lasting knowledge through intelligent spaced-repetition training.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-center text-lg text-zinc-400">
            Three simple steps to build a smarter, more knowledgeable team
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="border-white/10 bg-white/[0.03]">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Import Documents</CardTitle>
                <CardDescription className="text-zinc-400">
                  Upload your company docs, wikis, and training materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500">
                  Support for PDFs, Markdown, and plain text. Our AI extracts key concepts automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.03]">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Smart Flashcards</CardTitle>
                <CardDescription className="text-zinc-400">
                  Auto-generated decks optimized for retention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500">
                  Our system creates question-answer pairs and schedules reviews based on forgetting curves.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.03]">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Daily Practice</CardTitle>
                <CardDescription className="text-zinc-400">
                  Personalized 5-minute sessions every day
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500">
                  Focus on cards you're most likely to forget. Build lasting knowledge with minimal effort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Why Teams Love DeckPilot
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                <TrendingUp className="h-5 w-5 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Track Progress</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Monitor retention rates, learning streaks, and knowledge gaps across your team.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                <Users className="h-5 w-5 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Team Learning</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Share decks, collaborate on content, and build a collective knowledge base.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                <Brain className="h-5 w-5 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Science-Backed</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Built on proven spaced-repetition algorithms that maximize long-term retention.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                <Zap className="h-5 w-5 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Zero Friction</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Just 5 minutes a day. No complex setup. Start learning immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <Card className="mx-auto max-w-2xl border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Ready to Transform Your Team's Learning?</CardTitle>
              <CardDescription className="text-zinc-400">
                Join thousands of teams using DeckPilot to retain knowledge and stay ahead.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
                Start Your Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
