# Downgrade your node version if meet npm EINTEGRITY issue

If you met some simlar issue like below when run ```npm install```.

```bash
npm ERR! code EINTEGRITY
npm ERR! sha1-Ppz8p24IMzIm82W8+HD3ffvVQs0= integrity checksum failed when using sha1: wanted sha1-Ppz8p24IMzIm82W8+HD3ffvVQs0= but got sha1-Aw5ElVYJsWBoK0sZbA2EUFuTz1k=. 
```

That's probably you are using latest node version, and there's a known issue for latest npm. See [Issue#16861](https://github.com/npm/npm/issues/16861) and [Issue#17146](https://github.com/npm/npm/issues/17146).
You need to downgrade your node version to use the LTS version.
One way is to use [nvm](https://github.com/creationix/nvm) to manage your node version.
Just run below commands when you installed nvm.

```bash
nvm install --lts
nvm use --lts
nvm alias default node
```
