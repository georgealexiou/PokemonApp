import kantoList from "../../../assets/regions/kanto.json";
import johtoList from "../../../assets/regions/johto.json";
import hoennList from "../../../assets/regions/hoenn.json";
import sinnohList from "../../../assets/regions/sinnoh.json";
import unovaList from "../../../assets/regions/unova.json";
import kalosList from "../../../assets/regions/kalos.json";
import alolaList from "../../../assets/regions/alola.json";
import galarList from "../../../assets/regions/galar.json";
import paldeaList from "../../../assets/regions/paldea.json";

export function getRegionalDex(id) {
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
