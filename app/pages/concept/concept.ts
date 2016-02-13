import { Page } from 'ionic-framework/ionic';
import { Concept } from '../../model/concept';

@Page({
  templateUrl: 'build/pages/concept/concept.html'
})
export class ConceptPage {
  concept: Concept;

  constructor() {
    this.concept = new Concept();
  }
}
