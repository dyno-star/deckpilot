# DeckPilot
Spaced-repetition training that converts company docs into daily practice.

## What is DeckPilot?

DeckPilot is a learning management system designed to help teams retain knowledge from company documentation through spaced repetition. Instead of reading documents once and forgetting them, DeckPilot transforms your company's documentation into interactive flashcards and daily practice sessions.

## Key Features

- **Document-to-Deck Conversion**: Automatically convert company documents into flashcard decks
- **Spaced Repetition System (SRS)**: Optimized review scheduling based on forgetting curves to maximize retention
- **Daily Practice**: Personalized daily sessions that focus on cards you're most likely to forget
- **Progress Tracking**: Monitor your learning progress and retention rates over time
- **Team Learning**: Share decks across your team and track collective knowledge

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dyno-star/deckpilot.git
cd deckpilot
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Components**: Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Language**: TypeScript

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## How It Works

1. **Import Documents**: Upload or link your company documentation
2. **Generate Cards**: DeckPilot analyzes content and creates question-answer pairs
3. **Daily Review**: Complete your personalized daily practice session
4. **Track Progress**: View statistics on your retention and learning streak

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private.
