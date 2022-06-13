# Setup isquare CLI

![License](https://img.shields.io/github/license/SquareFactory/setup-isquare-cli?style=flat-square)
![Stars](https://img.shields.io/github/stars/SquareFactory/setup-isquare-cli?style=flat-square)
![Latest release](https://img.shields.io/github/v/release/SquareFactory/setup-isquare-cli?label=latest%20release&style=flat-square)
![Workflow status](https://img.shields.io/github/workflow/status/SquareFactory/setup-isquare-cli/Tests?style=flat-square)

Setup the isquare CLI in Github Actions.

## Usage

First you have to create an access token on the isquare platform.
Then, after adding your token to the GitHub Actions secrets of your repository,

```yaml
# In your job
- name: Setup isquare CLI
  uses: SquareFactory/setup-isquare-cli@main
  with:
    token: ${{ secrets.ISQUARE_TOKEN }}
- name: List the isquare models
  run: i2 models list
```
