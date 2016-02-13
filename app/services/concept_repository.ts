import { Concept } from '../model/concept';

export class Repository {
  current: int = 0;
  concepts: Array = [];

  constructor() {
  }

  addConcept(newConcept: Concept) {
    concepts.push(newConcept);
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

