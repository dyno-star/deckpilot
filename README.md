# Deckpilot

Spaced-repetition training that converts company docs into daily practice.

## What is Deckpilot?

Deckpilot is a learning platform that transforms your company's documentation into an interactive, daily training experience. Using spaced-repetition algorithms, it helps teams retain critical information by presenting bite-sized practice sessions at optimal intervals.

## The Problem

Company documentation is essential, but it's often:
- **Overwhelming**: Too much information to absorb at once
- **Forgotten**: Information fades quickly after reading
- **Underutilized**: Valuable knowledge sits unused because people can't recall it when needed

## The Solution

Deckpilot solves these problems by:

1. **Converting docs to practice**: Transform static documentation into interactive flashcards and quizzes
2. **Spaced repetition**: Present information at scientifically-optimized intervals to maximize retention
3. **Daily training**: Short, focused sessions that fit into your workflow
4. **Progress tracking**: Monitor learning progress and identify knowledge gaps

## How It Works

1. **Import Documentation**: Connect to your company's knowledge base (Notion, Confluence, Google Docs, etc.)
2. **Auto-Generate Cards**: AI-powered system creates practice cards from your content
3. **Daily Practice**: Receive personalized daily sessions based on your learning schedule
4. **Master Knowledge**: Gradually build long-term retention of critical information

## Key Features

- Multi-source Import: Connect to various documentation platforms
- Smart Card Generation: AI automatically creates practice questions from docs
- Spaced-Repetition Algorithm: Optimized review schedule for maximum retention
- Progress Analytics: Track individual and team learning progress
- Focused Sessions: Short, targeted practice sessions (5-10 minutes)
- Adaptive Learning: System adjusts difficulty based on performance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/dyno-star/deckpilot.git
cd deckpilot

# Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
npm run dev
```

Open http://localhost:3000 in your browser to see the application.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## Tech Stack

- Framework: Next.js 15 with React 19
- Styling: Tailwind CSS
- UI Components: Radix UI primitives
- Type Safety: TypeScript
- Form Handling: React Hook Form with Zod validation

## License

MIT
