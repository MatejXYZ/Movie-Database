import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const favouriteMovieListState = atom<string[]>({
  key: "favouriteMovieListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
