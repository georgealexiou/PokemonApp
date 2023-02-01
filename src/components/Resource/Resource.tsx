import kantoList from '../../assets/regions/kanto.json';
import johtoList from '../../assets/regions/johto.json';
import hoennList from '../../assets/regions/hoenn.json';
import sinnohList from '../../assets/regions/sinnoh.json';
import unovaList from '../../assets/regions/unova.json';
import kalosList from '../../assets/regions/kalos.json';
import alolaList from '../../assets/regions/alola.json';
import galarList from '../../assets/regions/galar.json';

export const typeColors = new Map([
  ['Normal', '#AAAA99'],
  ['Fire', '#F64423'],
  ['Water', '#3399FF'],
  ['Electric', '#FCCC33'],
  ['Grass', '#77CC55'],
  ['Ice', '#66CCFF'],
  ['Fighting', '#BB5545'],
  ['Poison', '#AA5599'],
  ['Ground', '#DDBB55'],
  ['Flying', '#8899FF'],
  ['Psychic', '#ED5293'],
  ['Bug', '#AABB23'],
  ['Rock', '#BBAA66'],
  ['Ghost', '#6666BB'],
  ['Dragon', '#7766EE'],
  ['Dark', '#775545'],
  ['Steel', '#AAAABB'],
  ['Fairy', '#EE99EE'],
]);

export function getRegionalDex(id: number) {
  switch (id) {
    case 1:
      return kantoList;
    case 2:
      return johtoList;
    case 3:
      return hoennList;
    case 4:
      return sinnohList;
    case 5:
      return unovaList;
    case 6:
      return kalosList;
    case 7:
      return alolaList;
    case 8:
      return galarList;
    case 9:
      return [];
  }
}
