import { addPath, getInput, info, setFailed } from '@actions/core';
import { downloadTool } from '@actions/tool-cache';
import { chmod } from 'fs/promises';
import { dirname, join } from 'node:path';
import { homedir } from 'os';

export default async function download() {
  const base = 'https://storage.googleapis.com/isquare-artifacts';
  const rawVersion = getInput('version');
  const version = rawVersion === '' ? 'latest' : rawVersion;
  let name: string;
  let extension = '';

  switch (process.platform) {
    case 'linux':
      name = 'i2-linux';
      break;
    case 'darwin':
      name = 'i2-macos';
      break;
    case 'win32':
      name = 'i2-win.exe';
      extension = '.exe';
      break;
    default:
      const error = new Error(`Unsupported platform: ${process.platform}`);
      setFailed(error);
      throw error;
  }

  const url = `${base}/${version}/${name}`;
  const cli = await downloadTool(url, join(homedir(), 'isquare', 'bin', `i2${extension}`));
  await chmod(cli, 0o775);

  info(cli);
  addPath(dirname(cli));

  return cli;
}
