function Price(params) {
  this.data = params || {};
  this.pair = params?.pair || "";
  this.quote = function () {
    return this.pair.substr(Math.max(this.pair.length - 3, 0));
  }
  this.mid = function () {
    const { buy, sell } = this.data;
    return (buy + sell) / 200;
  }
}

function DataSource({ source }) {
  this.opts = {
    source: source || "https://static.ngnrs.io/test/prices"
  }

  this.getPrices = async function () {
    const { source } = this.opts;

    try {
      const response = await fetch(source);
      const body = await response.json();
      const rawPrices = body?.data?.prices || [];

      return rawPrices.map(_ => new Price(_));
    } catch (error) {
      throw error;
    }
  }
}