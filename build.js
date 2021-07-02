"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("              Diego Pérez"),
  handle: chalk.grey("Angular and SFCC developer"),
  work: chalk.white("Lead SFCC Developer at ") + chalk.yellow("Tempur Sealy"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("i_maka"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~imaka"),
  github: chalk.gray("https://github.com/") + chalk.black("imaka"),
  devto: chalk.gray("https://dev.to/") + chalk.white("i_maka"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("dperezmartinez"),
  npx: chalk.red("npx") + " " + chalk.white("i_maka"),
  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelDevTo: chalk.white.bold("     Dev.to:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelCard: chalk.white.bold("       Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ᛞ ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const devtoing = `${data.labelDevTo}  ${data.devto}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  newline + // data.labelOpenSource + data.opensource
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  devtoing +
  newline + // data.labelDevTo + data.devto
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.cyan(boxen(output, options))
);
