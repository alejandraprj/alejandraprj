# revamping my website with react.js

## new steps: (from the src branch)

run the following to create a build and push it to main branch in private_web:

```npm run deploy```

from the alejandraprj repo, fetch and merge by:

```git fetch prod; git merge prod/main```

in alejandraprj, prod is the remote for private_web.

don't forget to ```push```! (in the alejandraprj repo, to see updates, no need to add/commit).

## set up

you want to run ```npm install``` and clone ```alejandraprj``` from [https://github.com/alejandraprj/alejandraprj](https://github.com/alejandraprj/alejandraprj). from the alejandraprj directory, add a remote for this private_web repository, to then fetch and merge with the main branch of this repository and update alejandraprj. 

to update you create a build in the main branch of private_web, and to do that, run the ```npm run deploy```, and then sync with the production repository by linking this repository to it, and then fetch and merge to main in private_web.
