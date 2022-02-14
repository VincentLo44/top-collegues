export interface Collegue {
  pseudo: string,
  score: number,
  photo: string,
  avis: number
}

export interface CollegueForm {
  pseudo: string,
  nom: string,
  prenom: string,
  photo: string
}

export interface CollegueDetails {
  pseudo: string,
  score: number,
  nom: string,
  prenom: string,
  photo: string
}

export enum Avis {
  AIMER,
  DETESTER
}

export interface Vote {
  collegue: Collegue,
  avis: Avis
}
