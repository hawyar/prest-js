import superagent from "superagent";


class Client {
  constructor(url) {
    this.url = url;
    this.client = superagent(this.url);
  }

  client() {
    return this.client;
  }
}

function createClient(url) {
  if (typeof url !== "string" || url.length === 0)
    throw new Error("Invalid pREST url");
  return new Client(url);
}

export { createClient };
