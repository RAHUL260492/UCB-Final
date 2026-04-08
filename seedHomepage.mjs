import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "xcg6w47a",
  dataset: 'production',
  token: "skzlExMiusDioOe0KvQ3GiZDMa6bxZeEr6DeEhVFL8Ql8UrbusYhqsn8D6Df6YuoCIs4I9JtC7ndmBwoeSoEmqG7gYtqULQZXi1WZMMlA253nIwxgey3Ufvp2tGkdLSoARvHCsg95yFwjnOseArclHjwYvhxOyalO3EdYZ1RQHfkl4HBZpfx",
  useCdn: false,
  apiVersion: '2024-04-08'
});

async function run() {
    const doc = {
        _type: 'homepage',
        _id: 'homepage', // singleton id
        title: 'Homepage Settings',
        heroHeading: 'Flexible, affordable \\n online education for all.',
        heroTaglines: [
            "Your Future.",
            "Your Community.",
            "Your Opportunity.",
            "Your Success."
        ],
        heroDescription: 'The only accredited online college designed for working students, English Language Learners, and parents.\\n**Associate Degrees & Certificates for the Real World.**',
        financialAidTitle: 'Your Education, More Affordable Than You Think',
        financialAidDescription: "Urban College is dedicated to keeping education accessible. Through federal aid (Pell Grants), state scholarships, and institutional support, we ensure money isn't a barrier to your future.",
        financialAidHighlight: 'Most eligible Urban College students pay $0 out-of-pocket for tuition.',
    };

    try {
        console.log(`Uploading Homepage to Sanity...`);
        await client.createOrReplace(doc);
        console.log(`✅ Success`);
    } catch (err) {
        console.error(`❌ Failed:`, err.message);
    }
}

run();
