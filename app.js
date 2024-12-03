
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];
let domainHacks = ['.es', '.it', '.us', '.io'];

function generateDomains() {
    let domains = [];

    for (let p of pronoun) {
        for (let a of adj) {
            for (let n of noun) {
                for (let ext of extensions) {
                    domains.push(`${p}${a}${n}${ext}`);
                }
                if (domainHacks.includes(n.slice(-2))) {
                    let hackedDomain = `${p}${a}${n.slice(0, -2)}.${n.slice(-2)}`;
                    domains.push(hackedDomain);
                }
            }
        }
    }

    console.log("Dominios generados:");
    domains.forEach(domain => console.log(domain));
}

generateDomains();
