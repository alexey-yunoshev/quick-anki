export function getLemmaLevel(lemmaLevelMap: Map<string, string>, lemma: string): string | undefined {
    return lemmaLevelMap.get(lemma);
}
