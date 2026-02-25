"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, BookOpen, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Deck {
  id: string;
  name: string;
  description: string;
  cardCount: number;
}

export default function Home() {
  const [decks, setDecks] = useState<Deck[]>([
    { id: "1", name: "JavaScript Basics", description: "Core JS concepts", cardCount: 24 },
    { id: "2", name: "React Fundamentals", description: "React hooks and components", cardCount: 18 },
  ]);
  const [newDeckName, setNewDeckName] = useState("");
  const [newDeckDescription, setNewDeckDescription] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateDeck = () => {
    if (newDeckName.trim()) {
      const newDeck: Deck = {
        id: Date.now().toString(),
        name: newDeckName.trim(),
        description: newDeckDescription.trim() || "No description",
        cardCount: 0,
      };
      setDecks([...decks, newDeck]);
      setNewDeckName("");
      setNewDeckDescription("");
      setIsDialogOpen(false);
    }
  };

  const handleDeleteDeck = (id: string) => {
    setDecks(decks.filter((deck) => deck.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Deckpilot
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Spaced-repetition training that converts company docs into daily practice.
          </p>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">My Decks</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Deck
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>Create New Deck</DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Add a new deck to start organizing your flashcards.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Deck Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter deck name"
                    value={newDeckName}
                    onChange={(e) => setNewDeckName(e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (optional)</Label>
                  <Input
                    id="description"
                    placeholder="Enter deck description"
                    value={newDeckDescription}
                    onChange={(e) => setNewDeckDescription(e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="border-zinc-700 text-white hover:bg-zinc-800"
                >
                  Cancel
                </Button>
                <Button onClick={handleCreateDeck} disabled={!newDeckName.trim()}>
                  Create Deck
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {decks.length === 0 ? (
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <BookOpen className="mb-4 h-12 w-12 text-zinc-600" />
              <p className="text-zinc-400">No decks yet. Create your first deck to get started!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {decks.map((deck) => (
              <Card key={deck.id} className="border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white">{deck.name}</CardTitle>
                      <CardDescription className="text-zinc-400">{deck.description}</CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteDeck(deck.id)}
                      className="h-8 w-8 text-zinc-500 hover:text-red-400 hover:bg-red-400/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <BookOpen className="h-4 w-4" />
                    <span>{deck.cardCount} cards</span>
                  </div>
                  <Button className="mt-4 w-full" variant="outline">
                    Practice
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
