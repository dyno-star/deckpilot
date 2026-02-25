// SuperMemo-2 (SM-2) Algorithm implementation for spaced repetition

export interface CardData {
  id: string;
  front: string;
  back: string;
  deckId: string;
  // SM-2 parameters
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReviewDate: Date;
  lastReviewDate?: Date;
}

export type ReviewQuality = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Quality ratings:
 * 5 - perfect response
 * 4 - correct response after a hesitation
 * 3 - correct response recalled with serious difficulty
 * 2 - incorrect response; where the correct one seemed easy to recall
 * 1 - incorrect response; the correct one remembered
 * 0 - complete blackout
 */

export interface ReviewResult {
  card: CardData;
  quality: ReviewQuality;
  nextInterval: number;
  nextEaseFactor: number;
  nextRepetitions: number;
  nextReviewDate: Date;
}

const DEFAULT_EASE_FACTOR = 2.5;
const MINIMUM_EASE_FACTOR = 1.3;

/**
 * Calculate the next review parameters using the SM-2 algorithm
 */
export function calculateNextReview(
  card: CardData,
  quality: ReviewQuality
): ReviewResult {
  let { easeFactor, interval, repetitions } = card;

  // If quality is less than 3, start repetitions over
  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    // If quality is 3 or higher, increase repetitions
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // Calculate new ease factor
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  const newEaseFactor =
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  // Ensure ease factor doesn't go below minimum
  const clampedEaseFactor = Math.max(newEaseFactor, MINIMUM_EASE_FACTOR);

  // Calculate next review date
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    card,
    quality,
    nextInterval: interval,
    nextEaseFactor: clampedEaseFactor,
    nextRepetitions: repetitions,
    nextReviewDate,
  };
}

/**
 * Create a new card with default SM-2 parameters
 */
export function createNewCard(
  id: string,
  front: string,
  back: string,
  deckId: string
): CardData {
  const now = new Date();
  return {
    id,
    front,
    back,
    deckId,
    easeFactor: DEFAULT_EASE_FACTOR,
    interval: 0,
    repetitions: 0,
    nextReviewDate: now,
    lastReviewDate: undefined,
  };
}

/**
 * Check if a card is due for review
 */
export function isCardDue(card: CardData): boolean {
  return card.nextReviewDate <= new Date();
}

/**
 * Get cards that are due for review from a deck
 */
export function getDueCards(cards: CardData[]): CardData[] {
  return cards.filter(isCardDue);
}

/**
 * Map user-friendly rating to SM-2 quality
 */
export function mapRatingToQuality(rating: "correct" | "incorrect" | "skipped"): ReviewQuality {
  switch (rating) {
    case "correct":
      return 5; // Perfect response
    case "incorrect":
      return 2; // Incorrect response, correct one seemed easy
    case "skipped":
      return 0; // Complete blackout
    default:
      return 3;
  }
}
