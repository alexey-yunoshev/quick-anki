export interface Lemma {
    level: string;
    lemma: string;
}

export type LemmasByLevel = Map<Lemma['level'], Array<{ lemma: Lemma['lemma']; url: string }>>
