import kantoList from "../../../assets/regions/kanto.json";
import johtoList from "../../../assets/regions/johto.json";
import hoennList from "../../../assets/regions/hoenn.json";
import sinnohList from "../../../assets/regions/sinnoh.json";
import unovaList from "../../../assets/regions/unova.json";
import kalosList from "../../../assets/regions/kalos.json";
import alolaList from "../../../assets/regions/alola.json";
import galarList from "../../../assets/regions/galar.json";
import paldeaList from "../../../assets/regions/paldea.json";

export const typeColors = new Map([
  ["Normal", "#A8A77A"],
  ["Fire", "#EE8130"],
  ["Water", "#6390F0"],
  ["Electric", "#F7D02C"],
  ["Grass", "#7AC74C"],
  ["Ice", "#96D9D6"],
  ["Fighting", "#C22E28"],
  ["Poison", "#A33EA1"],
  ["Ground", "#E2BF65"],
  ["Flying", "#A98FF3"],
  ["Psychic", "#F95587"],
  ["Bug", "#A6B91A"],
  ["Rock", "#B6A136"],
  ["Ghost", "#735797"],
  ["Dragon", "#6F35FC"],
  ["Dark", "#705746"],
  ["Steel", "#B7B7CE"],
  ["Fairy", "#D685AD"],
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
