import { $random, RandomArray } from '@random-fixtures/core';

declare module '@random-fixtures/core' {
  interface RandomRegistry {
    ancient: Ancient;
  }
}

class Ancient {
  private gods: RandomArray<string> = RandomArray.of(
    'Aphrodite',
    'Apollo',
    'Ares',
    'Artemis',
    'Athena',
    'Demeter',
    'Dionysus',
    'Eros',
    'Hades',
    'Hera',
    'Hermes',
    'Hestia',
    'Persephone',
    'Poseidon',
    'Thanatos',
    'Zeus',
  );

  private titans: RandomArray<string> = RandomArray.of('Atlas', 'Cronus', 'Hyperion', 'Oceanus', 'Rhea', 'Selene', 'Themis');

  private primordials: RandomArray<string> = RandomArray.of('Chaos', 'Chronos', 'Erebus', 'Gaia', 'Nyx', 'Uranus');

  private heroes: RandomArray<string> = RandomArray.of(
    'Achilles',
    'Aeneas',
    'Ajax',
    'Atalanta',
    'Bellerophon',
    'Cadmus',
    'Diomedes',
    'Heracles',
    'Jason',
    'Odysseus',
    'Oedipus',
    'Orpheus',
    'Perseus',
    'Theseus',
  );

  get god() {
    return this.gods.random();
  }

  get titan() {
    return this.titans.random();
  }

  get primordial() {
    return this.primordials.random();
  }

  get hero() {
    return this.heroes.random();
  }
}

$random.ancient = new Ancient();
