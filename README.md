# pack-builder
Tool to build Mrpack files out of yaml declaration, thanks to the Modrinth API

## What does it use?
The API documentation can be found [here](https://docs.modrinth.com/api/).

## What does it do?
It is supposed to generate an mrpack file, which has few sources about its real specification, [even though this could help](https://support.modrinth.com/en/articles/8802351-modrinth-modpack-format-mrpack).

We want to use it to export existing mrpack files, create new ones, and manage to do functional verifications (depedencies, incompaibilities, and fill/manage those out).

We also want to just have to change a version number on the conf file and have the tool manage everything all by itself!
