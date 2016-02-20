import { Page } from 'ionic-framework/ionic';
import { Concept } from '../../model/concept';
import { ConceptRepository } from '../../services/concept_repository';
import { ConceptRepositoryLoader } from '../../services/concept_repository_loader';

@Page({
  templateUrl: 'build/pages/concept/concept.html'
})
export class ConceptPage {
  concept: Concept;
  repository: ConceptRepository;

  constructor() {
    this.repository = new ConceptRepository();

    const loader = new ConceptRepositoryLoader(this.repository);
    loader.load();

    this.concept = this.repository.next();
  }

  play() {
    console.log('play');
  }

  next() {
    console.log('next');
    this.concept = this.repository.next();
  }

}
