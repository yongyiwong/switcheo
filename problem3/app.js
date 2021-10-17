document.addEventListener('DOMContentLoaded', function () {

    const ds = new DataSource({ source: "https://static.ngnrs.io/test/prices" });

    ds.getPrices()
        .then(prices => {
            prices.forEach(price => {
                console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`);
            });
        }).catch(error => {
            console.err(error);
        });
}, false);