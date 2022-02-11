export interface Collegue {
  pseudo: string,
  score: number,
  photo: string,
  avis: number
}

export enum Avis {
  AIMER,
  DETESTER
}

export interface Vote {
  collegue: Collegue,
  avis: Avis
}
