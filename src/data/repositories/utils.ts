export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const customHeaders = {
  headers: {
    "X-Auth-Token": "5f3ece105a1142af826ed06aa1872c0c",
  },
};
