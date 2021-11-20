const contentfulImport = require('contentful-import');

require('dotenv').config({ path: '.env.development' });

const accessToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const spaceId = process.env.CONTENTFUL_SPACE_ID;

if (!accessToken) {
  throw new Error(
    'CONTENTFUL_MANAGEMENT_TOKEN environment variable must be defined'
  );
}
if (!spaceId) {
  throw new Error('CONTENTFUL_SPACE_ID environment variable must be defined');
}

const options = {
  contentFile: './contentful/export.json',
  spaceId,
  managementToken: accessToken,
};

contentfulImport(options)
  .then(() => {
    console.log('Data imported successfully');
  })
  .catch((err) => {
    console.log('Oh no! Some errors occurred!', err);
  });
