import axios from "axios";

export const PostRequest = (
  url: string,
  data: any,
  next: (res: any) => void,
  ifError: (err: any) => void
) => {
  axios
    .post(url, data)
    .then((res) => {
      next(res);
    })
    .catch((err) => {
      ifError(err);
    });
};

export const GetRequest = (
  url: string,
  next: (res: any) => void,
  ifError: (err: any) => void
) => {
  axios
    .get(url)
    .then((res) => {
      next(res);
    })
    .catch((err) => {
      ifError(err);
    });
};
