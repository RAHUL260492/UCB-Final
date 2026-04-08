import fs from 'fs';

const urls = [
"https://www.urbancollege.edu/ucb-news-events/2026/1/26/rising-together-how-education-fuels-service-leadership-and-uplifting-communities",
"https://www.urbancollege.edu/ucb-news-events/2026/1/21/education-that-fits-your-life-why-online-college-might-be-right-for-you",
"https://www.urbancollege.edu/ucb-news-events/2026/1/16/urban-colleges-dr-noemi-custodia-lora-receives-prestigious-fulbright-specialist-award",
"https://www.urbancollege.edu/ucb-news-events/2025/12/12/lighting-the-path-of-opportunity-a-night-to-remember-at-urban-college-of-boston",
"https://www.urbancollege.edu/ucb-news-events/2025/11/25/ai-may-be-reshaping-how-we-work-but-its-not-replacing-people-in-human-centered-careers",
"https://www.urbancollege.edu/ucb-news-events/2025/11/4/your-seat-at-the-table-stories-of-education-equity-and-transformation",
"https://www.urbancollege.edu/ucb-news-events/2025/11/6/urban-college-joins-forces-with-city-of-boston-to-empower-youth-focused-nonprofits",
"https://www.urbancollege.edu/ucb-news-events/2025/10/3/finish-your-degree-without-starting-over-at-urban-college-of-boston",
"https://www.urbancollege.edu/ucb-news-events/2025/5/28/we-speak-your-language-the-power-of-multilingual-education-at-urban-college",
"https://www.urbancollege.edu/ucb-news-events/2025/8/12/closing-the-middle-skills-gap-how-urban-college-of-boston-is-preparing-students-for-in-demand-careers",
"https://www.urbancollege.edu/ucb-news-events/2025/8/4/from-doubt-to-determination-krystal-jackson-rays-journey-to-graduation-and-beyond",
"https://www.urbancollege.edu/ucb-news-events/2025/6/27/from-t-stops-to-tornadoes-how-one-student-found-his-path-at-urban-college",
"https://www.urbancollege.edu/ucb-news-events/2025/6/10/congratulations-to-urban-college-of-bostons-2025-graduates",
"https://www.urbancollege.edu/ucb-news-events/2025/6/6/a-powerful-evening-of-leadership-and-legacy",
"https://www.urbancollege.edu/ucb-news-events/2025/6/3/celebrating-the-journey-of-ayesha-m-wilson-urban-college-alumna-and-city-councilor",
"https://www.urbancollege.edu/ucb-news-events/2025/5/28/unlocking-human-potential-urban-college-president-yves-inspiring-tedx-talk",
"https://www.urbancollege.edu/ucb-news-events/2025/5/13/meet-mariely-maldonado-an-early-childhood-education-alumn-from-urban-college",
"https://www.urbancollege.edu/ucb-news-events/2025/5/9/sustaining-hope-alumna-toy-burton-and-the-power-of-mental-health-access",
"https://www.urbancollege.edu/ucb-news-events/2025/4/30/the-flexibility-to-succeed-urban-college-meets-the-needs-of-todays-students",
"https://www.urbancollege.edu/ucb-news-events/2025/4/15/seraphina-taylor-driving-change-by-turning-pain-into-purposenbsp",
"https://www.urbancollege.edu/ucb-news-events/2025/4/7/urban-college-of-boston-faculty-member-deborah-finklestein-named-acls-community-college-faculty-research-fellow",
"https://www.urbancollege.edu/ucb-news-events/2025/3/26/urban-college-of-boston-celebrates-recent-graduates-with-inspiring-commencement-ceremony-in-may",
"https://www.urbancollege.edu/ucb-news-events/2025/3/21/meet-your-professor-elizabeth-maglio-2",
"https://www.urbancollege.edu/ucb-news-events/2025/2/22/invitation-for-public-comment",
"https://www.urbancollege.edu/ucb-news-events/2024/10/8/urban-college-of-boston-announces-board-chair-transition",
"https://www.urbancollege.edu/ucb-news-events/2024/10/3/in-the-news-rising-incomes-persistent-gaps-a-closer-look-at-wealth-inequality",
"https://www.urbancollege.edu/ucb-news-events/2024/8/30/urban-college-of-boston-proud-to-accept-workforce-development-grant-from-massachusetts-life-science-center-mlsc-to-boost-science-education",
"https://www.urbancollege.edu/ucb-news-events/2024/6/27/urban-college-of-boston-welcomes-two-new-board-members-constanza-cabello-and-jan-wyatt"
];

async function fetchBlog(u) {
    try {
        const res = await fetch(u);
        const html = await res.text();
        
        let titleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
        let imgMatch = html.match(/<meta property="og:image" itemprop="image" content="(.*?)"/);
        if(!imgMatch) imgMatch = html.match(/<meta property="og:image" content="(.*?)"/);
        
        // If still no image, try looking for the first image in the HTML body (data-src for squarespace)
        if (!imgMatch || imgMatch[1].includes('format=1500w') === false && imgMatch[1].includes('unsplash') === false) {
             const inlineImgMatch = html.match(/<img[^>]*data-src="([^"]+)"/);
             if (inlineImgMatch) {
                 imgMatch = [null, inlineImgMatch[1]];
             } else {
                 const srcMatch = html.match(/<img[^>]*src="([^"]+)"/);
                 if (srcMatch && !srcMatch[1].includes('favicon') && !srcMatch[1].includes('logo')) {
                     imgMatch = [null, srcMatch[1]];
                 }
             }
        }
        
        let descMatch = html.match(/<meta property="og:description" content="(.*?)"/);
        if(!descMatch) {
            descMatch = html.match(/<p>([\s\S]*?)<\/p>/); // first p
        }
        
        const parts = u.split('/');
        const year = parts[4];
        const month = parts[5];
        const day = parts[6];
        const slug = parts[7];

        // get actual content
        let content = '';
        const bodyMatch = html.match(/<div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-.*?">.*?<div class="sqs-block-content">([\s\S]*?)<\/div><\/div>/gi);
        
        if (bodyMatch) {
          content = bodyMatch.join("\n");
        } else {
            console.log("No body match for:", slug);
        }

        let titleStr = titleMatch ? titleMatch[1].replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec)) : slug.replace(/-/g, ' ');
        if(titleStr.endsWith(' — Urban College of Boston')) titleStr = titleStr.replace(' — Urban College of Boston', '');
        
        let descStr = descMatch ? descMatch[1].replace(/<[^>]*>?/gm, '') : '';
        descStr = descStr.replace(/&#(\d+);/g, (m,d) => String.fromCharCode(d)).substring(0, 200) + '...';

        const fallbacks = [
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1513258496099-48162124560a?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
        ];
        const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const defaultFallback = fallbacks[hash % fallbacks.length];

        return {
            title: titleStr,
            image: imgMatch && imgMatch[1] && !imgMatch[1].includes('favicon') ? imgMatch[1] : defaultFallback,
            description: descStr,
            date: `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`,
            slug: slug,
            url: u,
            content: content
        };
    } catch (e) {
        console.error("Failed", u);
        return null;
    }
}

async function run() {
    console.log("Fetching", urls.length, "blogs...");
    const promises = urls.map(u => fetchBlog(u));
    const results = await Promise.all(promises);
    const validBlogs = results.filter(b => b !== null);
    
    // sorting logic
    validBlogs.sort((a,b) => new Date(b.date) - new Date(a.date));

    // Ensure src/data exists
    if (!fs.existsSync('src/data')) {
        fs.mkdirSync('src/data', { recursive: true });
    }
    
    fs.writeFileSync('src/data/blogs.json', JSON.stringify(validBlogs, null, 2));
    console.log("Saved to src/data/blogs.json with", validBlogs.length, "entries");
}

run();
