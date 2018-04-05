import mongoose from 'mongoose';
import Article from './src/models/article';

mongoose.connect('mongodb://localhost/a-typical-blog');

Article.create({
  _id: '2015-08-colombia-mass-surveillance',
  headline: 'Colombia is conducting widescale illegal surveillance',
  body:
`<div>
<div>
    <div>
        <figure>
            <img src="https://o.aolcdn.com/images/dims?quality=100&amp;image_uri=http%3A%2F%2Fo.aolcdn.com%2Fdims-shared%2Fdims3%2FGLOB%2Fcrop%2F5154x3098%2B0%2B0%2Fresize%2F1200x721%21%2Fformat%2Fjpg%2Fquality%2F85%2Fhttp%3A%2F%2Fhss-prod.hss.aol.com%2Fhss%2Fstorage%2Fmidas%2Fb0902280a914cf67b1849475c66528a4%2F202559991%2F7b2cb038b253448983baaa2089158649.jpeg&amp;client=cbc79c14efcebee57402&amp;signature=abfd48cf418b3fe3aa4d46cd1959ecd8b97f6fb1" />
        </figure>
    </div>
</div>
</div>

<div>
<div>
    <div>
        <div>
            <div>
                <a href="https://www.engadget.com/2015/08/31/colombia-mass-surveillance/"></a>
            </div>

            <p>Want to know why it's important to have <a href="https://www.engadget.com/2015/06/01/us-patriot-act-vote-fails/">checks on mass surveillance</a> programs? Colombia should serve as a good example. <em>Privacy International</em> <a href="https://privacyinternational.org/node/635">reports</a> that the country not only collects bulk internet and phone data on a grand scale, but violates the law in the process -- it's supposed to require judicial approval for <em>any</em> surveillance, but regularly ignores that oversight. Colombian agencies have also relied on controversial tools like <a href="https://www.engadget.com/2014/08/12/fcc-imsi-stingray/">IMSI catchers</a> (which scoop up nearby cellphone data) and <a href="https://www.engadget.com/2015/07/09/how-spyware-peddler-hacking-team-was-publicly-dismantled/">Hacking Team's</a> spyware, and they've sought to expand their powers rather than rein things in.</p>
        </div>
    </div>
</div>
</div>

<div>
<div>
    <div>
        <div>
            <div>

                <p>It's no secret that Colombia has a history of surveillance, fueled in no small part by its decades-long battles with rebels and drug cartels. And unfortunately, the pressure to keep an eye on communications isn't likely to drop anytime soon. A <a href="http://www.nytimes.com/2015/08/28/world/americas/colombians-flee-venezuelas-crackdown-on-immigrants.html?_r=3&amp;gwh=452C3A6E933A577CDD30E6DDC047AA3F&amp;gwt=pay">Venezuelan immigrant crackdown</a> has forced many Colombia-born residents back to their homeland, increasing tensions between the two countries. It may take a long while before the political climate is truly conducive to surveillance reform.</p>
                <p>[Image credit: AP Photo/Fernando Vergara]</p>

            </div>
        </div>
    </div>
</div>
</div>`,
  date: new Date('2015/08/31')
});

