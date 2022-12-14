import getFiles from "https://deno.land/x/getfiles@v1.0.0/fs.ts";

const title = Deno.env.get('TITLE');

const helpersPath = 'src/helpers/';
const helpers = getFiles({ root: '.', include: [helpersPath] })
  .map(file => file.path.match(new RegExp(`(?<=${helpersPath})(.*)(?=.ts)`))?.find(Boolean));
const validDescriptors = helpers.concat(['repo', 'deps', 'deps-dev']);

const prTitleHasValidDescriptor = title.match(new RegExp(`\((${validDescriptors.join('|')})\)`, 'g'));

if (!prTitleHasValidDescriptor) {
  console.error(`\nPR title is missing a valid descriptor inside parentheses. Must be one of the following:\n${validDescriptors.map(descriptor => `\n   • ${descriptor}`).join('\n')}`);
  Deno.exit(1);
}

console.info('PR title contains a valid descriptor!');
