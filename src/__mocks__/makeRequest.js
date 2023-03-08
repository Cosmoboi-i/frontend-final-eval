import { mockSongList } from "./genrefilter";

export const mockReq = {
  body: {
    like: true,
  },
};

export const mockRes = {
  data: mockSongList,
};
