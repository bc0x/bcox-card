'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// Text + chalk definitions
const data = {
  name: chalk.white.bold('               Brandon Cox'),
  handle: chalk.white('@bcox'),
  work:
    chalk.white.bold('Software Engineer') +
    chalk.white(' @ ') +
    chalk.red.bold.bgBlack('RedVentures'),
  opensource: chalk.white('TODO ') + chalk.green('⬢'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('bcox_tech'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~bcox'),
  github: chalk.gray('https://github.com/') + chalk.green('bc0x'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') +
    chalk.blue('brandon-cox-1039116a/'),
  web: chalk.cyan('https://bcox.tech'),
  npx: chalk.red('npx') + ' ' + chalk.white('bcox'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${chalk.gray('|')} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  newline + // data.labelOpenSource + data.opensource
  githubing +
  newline + // data.labelGitHub + data.github
  webing +
  newline +
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.cyan(boxen(output, options)),
);
