import { getInput } from '@actions/core';
import { exec } from '@actions/exec';
import download from './download';

async function main() {
  const cli = await download();

  console.log(cli);

  // Login to isquare if the user provided a token
  const token = getInput('token');
  if (token) {
    await exec(`${cli} token ${token}`);
  }
}

main().catch(console.error);
