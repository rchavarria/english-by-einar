import { Image } from './image';
import { Audio } from './audio';

/**
 * Concept model
 *
 * Holds all data related to English concepts
 */
export class Concept {
  title: String = 'Dog';
  description: String = 'Wouf! Wouf!';
  image: Image = new Image('');
  audio: Audio = new Audio('');

  constructor(title: String, description: String, image: Image, audio: Audio) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.audio = audio;
  }

}

