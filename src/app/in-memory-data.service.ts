import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const sudokus = [
        { id: 1,
          name: 'First Puzzle',
          data: [
            8, 5, 6, 0, 1, 4, 7, 3, 0,
            0, 9, 0, 0, 0, 0, 0, 0, 0,
            2, 4, 0, 0, 0, 0, 1, 6, 0,
            0, 6, 2, 0, 5, 9, 3, 0, 0,
            0, 3, 1, 8, 0, 2, 4, 5, 0,
            0, 0, 5, 3, 4, 0, 9, 2, 0,
            0, 2, 4, 0, 0, 0, 0, 7, 3,
            0, 0, 0, 0, 0, 0, 0, 1, 0,
            0, 1, 8, 6, 3, 0, 2, 9, 4
        ] },
        { id: 2,
          name: 'Second Puzzle',
          data: [
            8, 5, 6, 0, 1, 4, 7, 3, 0,
            0, 9, 0, 0, 0, 0, 0, 0, 0,
            2, 4, 0, 0, 0, 0, 1, 6, 0,
            0, 6, 2, 0, 5, 9, 3, 0, 0,
            0, 3, 1, 8, 0, 2, 4, 5, 0,
            0, 0, 5, 3, 4, 0, 9, 2, 0,
            0, 2, 4, 0, 0, 0, 0, 7, 3,
            0, 0, 0, 0, 0, 0, 0, 1, 0,
            0, 1, 8, 6, 3, 0, 2, 9, 4
        ] }
      ];
      return {sudokus};
    }
  }
