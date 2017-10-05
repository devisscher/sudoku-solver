/**
 * Add an object to the puzzles array to try different puzzles
 */

 // Make as a service

import { Sudoku } from '../models/sudoku';

export const puzzles: Sudoku[] = [
  {
    id: 1,
    name: 'Qlik Sample Puzzle',
    data: [
      [8, 5, 6, 0, 1, 4, 7, 3, 0],
      [0, 9, 0, 0, 0, 0, 0, 0, 0],
      [2, 4, 0, 0, 0, 0, 1, 6, 0],
      [0, 6, 2, 0, 5, 9, 3, 0, 0],
      [0, 3, 1, 8, 0, 2, 4, 5, 0],
      [0, 0, 5, 3, 4, 0, 9, 2, 0],
      [0, 2, 4, 0, 0, 0, 0, 7, 3],
      [0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 8, 6, 3, 0, 2, 9, 4]
    ]
  },
  {
    id: 2,
    name: 'The World\'s Hardest Sudoku (2012)',
    data: [
      [8, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 3, 6, 0, 0, 0, 0, 0],
      [0, 7, 0, 0, 0, 9, 0, 2, 0],
      [0, 5, 0, 0, 0, 7, 0, 0, 0],
      [0, 0, 0, 0, 4, 5, 7, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 3, 0],
      [0, 0, 1, 0, 0, 0, 0, 6, 8],
      [0, 0, 8, 5, 0, 0, 0, 1, 0],
      [0, 9, 0, 0, 0, 0, 4, 0, 0]
    ]
  },
  {
    id: 3,
    name: 'Top 95, 1st Puzzle',
    data: [
      [4, 0, 0, 0, 0, 0, 8, 0, 5],
      [0, 3, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 7, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 8, 0, 4, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 6, 0, 3, 0, 7, 0],
      [5, 0, 0, 2, 0, 0, 0, 0, 0],
      [1, 0, 4, 0, 0, 0, 0, 0, 0],
    ]
  },
  {
    id: 4,
    name: 'Top 95, 2nd Puzzle',
    data: [
      [5, 2, 0, 0, 0, 6, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 7, 0, 1],
      [3, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 4, 0, 0, 8, 0, 0],
      [6, 0, 0, 0, 0, 0, 0, 5, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 1, 8, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 3, 0, 0, 2, 0],
      [0, 0, 8, 7, 0, 0, 0, 0, 0],
    ]
  },
  {
    id: 5,
    name: 'Invalid',
    data: [
      [4, 0, 0, 0, 0, 0, 8, 0, 5],
      [0, 3, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 7, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 8, 0, 4, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 6, 0, 3, 0, 7, 0],
      [5, 0, 0, 2, 0, 0, 0, 0, 0],
      [1, 0, 4, 0, 0, 0, 0, 0, 0],
      [1, 0, 4, 0, 0, 0, 0, 0, 0],
    ]
  }
];
