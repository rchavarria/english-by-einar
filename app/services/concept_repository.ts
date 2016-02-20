import { Concept } from '../model/concept';

export class ConceptRepository {
  current: number = 0;
  concepts: Array<Concept> = [];

  constructor() {
  }

  addConcept(newConcept: Concept) {
    this.concepts.push(newConcept);
  }

  count() {
    return this.concepts.length;
  }

  next() {
    let concept = this.concepts[this.current];
    this.current = (this.current + 1) % this.count();
    return concept;
  }

}

