
/* We use the npm install command to install new Node packages locally.
  The install command creates a folder called node_modules and copies that package files to it.
  The install command also installs all of the dependencies for the given package.

  We install Babel with the following two commands:
    $ npm install babel-cli -D
    $ npm install babel-present-env -D

  The babel-cli package includes command line Babel tools.
  The bable-present-env package has the code that maps any JavaScript feature, ES6 and above, to ES5.

  The -D flag instructs the npm to add each package to a property called devDependencies in package.json.
  Once the dependencies are listed in devDependencies, other developers can run your project without installing each package seperately, because npm install installs the package.json file
*/
