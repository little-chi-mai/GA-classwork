const Crawler = require('crawler');

// Predicate function to decide if we want to add a URL to the queue.
const isCrawlable = (url) => {
  if (! url) return false;
  if (! url.startsWith('http')) return false;
  // if (url.includes('archive.md')) return false;

  const terribleSites = ['archive.md', 'microsoft.com', 'github.com', 'medium.com', 'discord.com', 'instagram.com', 'kraken.com']

  // Heavy magic:
  return ! terribleSites.some(awfulSite => url.includes(awfulSite));

  // // Magic:
  // const terribleSiteDetected = terribleSites.some((awfulSite) => {
  //   if (url.includes(awfulSite)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // if (terribleSiteDetected) return false;

  // let awfulSiteDetected = false;
  // terribleSites.forEach((awfulSite) => {
  //   if (url.includes(awfulSite)) {
  //     awfulSiteDetected = true;
  //   }
  // });
  //
  // if (awfulSiteDetected) return false;



  return true;
}

const c = new Crawler({
  rateLimit: 1000, // Enhance your calm
  callback: (err, res, done) => { // error first pattern
    if (typeof res.$ === 'function') {
      const title = res.$('title').text();
      console.log(title);
      console.log(res.request.uri.href); // Current URL
      console.log(); // Create some space

      const $links = res.$('a'); //Cheerio - jquery out side of browser // find all the links
      $links.each(function() { // for each link, have to be traditional function
        const href = res.$(this).attr('href');
        if (isCrawlable(href)) {
          c.queue(href); // add link to the queue
        }
      })
    }
    done(); // call to keep going
  }
})



c.queue(process.argv[2] || 'https://lobste.rs/'); // argv: argument on command line
