Make sure you update the version of each package

    npm run bump

That all readme's are copied from the one in the root

    npm run copy-readme

And then run:

    npm publish --workspace @random-fixtures/core --access public
    npm publish --workspace @random-fixtures/address --access public
    npm publish --workspace @random-fixtures/ancient --access public
    npm publish --workspace @random-fixtures/chuck-norris --access public

To cleanup run 

    npm run remove-readme

Or do all by running:

    npm run release

Do not edit the Readme files in the packages, they will be overwritten and removed
