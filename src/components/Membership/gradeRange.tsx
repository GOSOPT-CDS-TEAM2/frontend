interface gradeRange {
  grade: string;
  min: number;
  max: number;
  nextGrade: string | undefined;
}

export const gradeRange: gradeRange[] = [
  {
    grade: 'BABY',
    min: 0,
    max: 100000,
    nextGrade: 'PINK',
  },
  {
    grade: 'PINK',
    min: 100000,
    max: 400000,
    nextGrade: 'GREEN',
  },
  {
    grade: 'GREEN',
    min: 400000,
    max: 700000,
    nextGrade: 'BLACK',
  },
  {
    grade: 'BLACK',
    min: 700000,
    max: 1000000,
    nextGrade: 'GOLD',
  },
  {
    grade: 'GOLD',
    min: 1000000,
    max: Infinity,
    nextGrade: undefined,
  },
];
