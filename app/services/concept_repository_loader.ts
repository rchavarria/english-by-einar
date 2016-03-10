import { Concept } from '../model/concept';
import { ConceptRepository } from './concept_repository';
import { ConceptBuilder } from './concept_builder';

export class ConceptRepositoryLoader {
  repository: ConceptRepository;

  constructor(repository: ConceptRepository) {
    this.repository = repository;
  }

  load() {
    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Dog')
        .withDescription('Wouf! Wouf!')
        .withImage('img/dog.png')
        .withAudio('audio/dog.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Egg')
        .withDescription('Small egg')
        .withImage('img/egg.png')
        .withAudio('audio/egg.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Hand')
        .withDescription('Give me five')
        .withImage('img/hand.png')
        .withAudio('audio/hand.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Policeman')
        .withDescription('The policeman says: Stop!')
        .withImage('img/policeman.png')
        .withAudio('audio/policeman.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Shoes')
        .withDescription("Don't forget them")
        .withImage('img/shoes.png')
        .withAudio('audio/shoes.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('T-shirt')
        .withDescription('Wear it!')
        .withImage('img/tshirt.png')
        .withAudio('audio/tshirt.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Bus')
        .withDescription('Do you go to school by bus?')
        .withImage('img/bus.png')
        .withAudio('audio/bus.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Hug')
        .withDescription('Give me a hug')
        .withImage('img/hug.png')
        .withAudio('audio/hug.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Traffic sign')
        .withDescription('One must obbey traffic signs')
        .withImage('img/traffic-sign.png')
        .withAudio('audio/traffic-sign.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Mum')
        .withDescription('She loves you')
        .withImage('img/mum.png')
        .withAudio('audio/mum.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Play')
        .withDescription('It is wonderful to play with friends')
        .withImage('img/play.png')
        .withAudio('audio/play.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Trousers')
        .withDescription('Wear them!')
        .withImage('img/trousers.gif')
        .withAudio('audio/trousers.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Helicopter')
        .withDescription('Flying and flying around with a helicopter')
        .withImage('img/helicopter.png')
        .withAudio('audio/helicopter.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Bench')
        .withDescription('Can we sit on that bench?')
        .withImage('img/bench.png')
        .withAudio('audio/bench.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Duck')
        .withDescription('Cuak! Cuak!')
        .withImage('img/duck.png')
        .withAudio('audio/duck.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Bucket')
        .withDescription('Plancton works in the Chum Bucket')
        .withImage('img/bucket.png')
        .withAudio('audio/bucket.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Jump')
        .withDescription('Jump to the moon')
        .withImage('img/jump.png')
        .withAudio('audio/jump.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Nut')
        .withDescription('Nuts make squirrels strong')
        .withImage('img/nut.png')
        .withAudio('audio/nut.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Traffic sign')
        .withDescription('One must obbey traffic signs')
        .withImage('img/traffic-sign.png')
        .withAudio('audio/traffic-sign.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Ambulance')
        .withDescription('In case of accident, call the ambulance')
        .withImage('img/ambulance.png')
        .withAudio('audio/ambulance.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Sun')
        .withDescription('You are brighter than the sun')
        .withImage('img/sun.png')
        .withAudio('audio/sun.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Ant')
        .withDescription('Ants are awesome')
        .withImage('img/ant.png')
        .withAudio('audio/ant.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Dustcart')
        .withDescription('Everymorning, the dustcart cleans the trash bin')
        .withImage('img/dustcart.png')
        .withAudio('audio/dustcart.mp3')
        .build());

    this.repository.addConcept(
      new ConceptBuilder()
        .withTitle('Jumper')
        .withDescription('Mum! I can put on my jumper')
        .withImage('img/jumper.png')
        .withAudio('audio/jumper.mp3')
        .build());
  }

}

