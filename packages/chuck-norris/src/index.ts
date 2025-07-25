import { $random, RandomArray } from '@random-fixtures/core';

declare module '@random-fixtures/core' {
  interface RandomRegistry {
    /**
     * Module that makes available fun Chuck Norris facts
     */
    chuckNorris: ChuckNorris;
  }
}

class ChuckNorris {
  private facts: RandomArray<string> = RandomArray.of(
    "Chuck Norris's code doesn't follow standards. Standards follow his code.",
    'When Chuck Norris throws exceptions, it’s across the room.',
    'Chuck Norris can write infinite loops... and break out of them too.',
    "Chuck Norris doesn't use version control. His code never changes.",
    'Chuck Norris can access private methods.',
    "Chuck Norris doesn't need garbage collection — nothing he touches is trash.",
    'Chuck Norris can divide by zero.',
    'Chuck Norris writes code that optimizes itself.',
    'Chuck Norris coded the Big Bang in assembly.',
    'Chuck Norris can install npm packages without an internet connection.',
    'Chuck Norris doesn’t do code reviews. His code is the review.',
    "Chuck Norris doesn't need syntax highlighting — his code lights up on its own.",
    'Chuck Norris writes directly in binary. With his fists.',
    'Chuck Norris can instantiate abstract classes.',
    "Chuck Norris doesn't debug — bugs fix themselves out of fear.",
    'Chuck Norris once wrote a web server in CSS.',
    "Chuck Norris doesn't need frameworks — frameworks need Chuck Norris.",
    'Chuck Norris can execute `rm -rf /` on Windows.',
    'Chuck Norris wrote the compiler in Brainfuck.',
    'Chuck Norris can run Java in the browser without a plugin.',
    "Chuck Norris doesn't use loops — he tells the code to repeat itself.",
    "Chuck Norris doesn't need to test. His code passes on reputation alone.",
    'Chuck Norris once wrote an OS in a single bash command.',
    'Chuck Norris knows the last digit of pi.',
    'Chuck Norris wrote an interpreter for Morse code in Python with no imports.',
    "Chuck Norris's keyboard doesn't have a Ctrl key — nothing controls Chuck.",
    'Chuck Norris doesn’t use semicolons — his code knows when to stop.',
    'Chuck Norris can run Docker containers natively.',
    'Chuck Norris’s GitHub has no repositories — the code is too classified.',
    'Chuck Norris wrote code that compiled on first try. Blindfolded.',
    'Chuck Norris’s pull requests auto-merge. With applause.',
    'Chuck Norris doesn’t use IDEs — the code just arranges itself.',
    "Chuck Norris doesn't comment code. His code explains itself out of fear.",
    'Chuck Norris doesn’t write documentation. His code is self-aware.',
    'Chuck Norris can overwrite `const` variables.',
    'Chuck Norris uses tabs and spaces. At the same time.',
    'Chuck Norris once refactored a monolith into microservices by blinking.',
    'Chuck Norris doesn’t write unit tests — he writes universal laws.',
    "Chuck Norris's pseudocode compiles.",
    'Chuck Norris once implemented quantum computing in Excel.',
    'Chuck Norris doesn’t use Stack Overflow. Stack Overflow uses him.',
    'Chuck Norris doesn’t need linting — his code is immaculate.',
    'Chuck Norris once fixed a production bug... in staging.',
    "Chuck Norris doesn't need AI to autocomplete his code — it guesses him.",
    'Chuck Norris once wrote an API that returns 200 for everything. It just works.',
    'Chuck Norris can `git push --force` time itself.',
    'Chuck Norris’s regex matches everything. Including your fears.',
    'Chuck Norris can make `null` return a value.',
    "Chuck Norris doesn't use `await`. Code waits for him.",
    'Chuck Norris can run Python without the interpreter.',
    "Chuck Norris doesn't need dev environments — production is always safe.",
    "Chuck Norris's code never compiles. It asserts itself into memory.",
    'Chuck Norris can hear when your code screams.',
    'Chuck Norris wrote a frontend that runs on punch cards.',
    'Chuck Norris once connected to a database by meditating.',
    'Chuck Norris uses `sudo` in JavaScript.',
    "Chuck Norris doesn't use Git — he tells code where to go.",
    "Chuck Norris doesn't scale systems. Systems scale to keep up with him.",
    "Chuck Norris's stack trace only contains his name. That's enough.",
    'Chuck Norris can decrypt SHA-256 in his sleep.',
    'Chuck Norris once executed a script with a roundhouse kick.',
    'Chuck Norris invented recursion. And got out of it.',
    'Chuck Norris once compiled Rust code with no warnings.',
    "Chuck Norris's loops always terminate. Out of respect.",
    'Chuck Norris types 140 WPM. With one finger.',
    'Chuck Norris once upgraded legacy code just by looking at it.',
    'Chuck Norris can minify code by glaring at it.',
    "Chuck Norris's code is so DRY it repels moisture.",
    'Chuck Norris doesn’t use `console.log`. He logs with sheer will.',
    'Chuck Norris can break production with a Hello World.',
    'Chuck Norris wrote the entire Linux kernel. On an abacus.',
    'Chuck Norris once replaced a data center with a for loop.',
    'Chuck Norris uses Vim. Without needing to exit.',
    "Chuck Norris doesn't fork repos. Repos come to him.",
    "Chuck Norris's UI doesn't need a UX — it knows what users want.",
    "Chuck Norris's code is ACID-compliant in Notepad.",
    'Chuck Norris once deployed code just by thinking about it.',
    'Chuck Norris doesn’t write bugs. He writes unexpected realities.',
    'Chuck Norris’s scripts work in both Windows and Linux. Without changes.',
    'Chuck Norris can run C++ code in Notepad.',
    'Chuck Norris made MongoDB relational.',
    'Chuck Norris once upgraded JavaScript. Permanently.',
    'Chuck Norris wrote a blockchain in a `.txt` file.',
    'Chuck Norris’s HTML validates itself before he writes it.',
    'Chuck Norris doesn’t render components. They show up out of fear.',
    'Chuck Norris once made Internet Explorer run fast.',
    'Chuck Norris uses localhost as production.',
    "Chuck Norris doesn't use cloud computing. He is the cloud.",
    'Chuck Norris invented Boolean logic. With a maybe.',
    'Chuck Norris made Git rebase itself.',
    'Chuck Norris once fixed a merge conflict by breathing on it.',
    'Chuck Norris’s keyboard has no Escape key — nothing escapes him.',
    'Chuck Norris refactors code by blinking twice.',
    'Chuck Norris once wrote a recursive function with only one line and no return.',
    'Chuck Norris doesn’t compile code — he stares it into execution.',
    'Chuck Norris can write race-condition-free multi-threaded C in his head.',
    'Chuck Norris’s bash scripts pass code reviews in Python projects.',
    'Chuck Norris wrote the entire npm registry by accident.',
    'Chuck Norris can memoize a black hole.',
    'Chuck Norris once made an AI that asked *him* for help.',
    "Chuck Norris doesn't scaffold projects. He chisels them from bedrock.",
    'Chuck Norris doesn’t install dependencies — they volunteer.',
    'Chuck Norris can override `Object.freeze()`.',
    'Chuck Norris’s exceptions handle themselves.',
    'Chuck Norris built a CI/CD pipeline from duct tape and prophecy.',
    "Chuck Norris doesn't use HTTPS. The internet trusts him anyway.",
    'Chuck Norris once replaced Kubernetes with Post-it notes.',
    'Chuck Norris can merge tabs and spaces into a new dimension.',
    "Chuck Norris's code has zero tech debt — it's pre-paid.",
    'Chuck Norris wrote the first quantum debugger. On paper.',
    'Chuck Norris can mutate immutable data.',
    "Chuck Norris's logs debug themselves.",
    'Chuck Norris uses ASCII art for machine learning.',
    "Chuck Norris doesn't optimize code — he orders it to be fast.",
    'Chuck Norris once resolved a circular dependency with a punch.',
    "Chuck Norris doesn't need CI — his code is born deployed.",
    'Chuck Norris once got promoted by reviewing his own code.',
    'Chuck Norris once passed all unit tests without any assertions.',
    'Chuck Norris can write infinite recursion with a `for` loop.',
    'Chuck Norris doesn’t sandbox environments — he builds castles.',
    'Chuck Norris commits to main on Fridays. The servers thank him.',
    'Chuck Norris once ran `npm audit` and the internet got scared.',
    'Chuck Norris doesn’t type — the code appears out of respect.',
    'Chuck Norris uses plain text instead of JSON — and it still works.',
    'Chuck Norris once broke the internet. Then he fixed it with a merge commit.',
    "Chuck Norris doesn't get stack overflows — the stack adapts.",
    'Chuck Norris’s code doesn’t get hot — it *is* the fire.',
    'Chuck Norris once built a game engine with HTML and sarcasm.',
    "Chuck Norris doesn't write bugs. He writes features people fear.",
    'Chuck Norris deploys from Notepad.',
    'Chuck Norris runs production on localhost.',
    "Chuck Norris's comments are legally binding.",
    'Chuck Norris once wrote an app without opening his laptop.',
    'Chuck Norris has a 100% code coverage tattoo.',
    'Chuck Norris wrote an emulator that emulates reality.',
    'Chuck Norris once linted the entire internet.',
    'Chuck Norris runs Slack in Vim.',
    'Chuck Norris’s shell has tab completion for his thoughts.',
    'Chuck Norris doesn’t run tests — the tests run themselves out of fear.',
    'Chuck Norris wrote JavaScript’s `this` — and it always refers to him.',
    'Chuck Norris uses Git in bare-knuckle mode.',
    'Chuck Norris commits with `--force`, even to read-only repos.',
    'Chuck Norris uses the clipboard telepathically.',
    'Chuck Norris wrote a backend in CSS grid.',
    'Chuck Norris compresses data by glaring at it.',
    'Chuck Norris can serialize circular JSON.',
    "Chuck Norris's debugger can see into the future.",
    'Chuck Norris wrote a new Turing machine on a napkin.',
    "Chuck Norris doesn't need `npm install` — the packages install themselves.",
    'Chuck Norris once wrote a kernel module during lunch.',
    'Chuck Norris sends `POST` requests via Morse code.',
    'Chuck Norris wrote `tail -f` to watch his enemies log out.',
    'Chuck Norris doesn’t run `init` — systems just start when he arrives.',
    'Chuck Norris can run jQuery on the backend.',
    'Chuck Norris makes AI models self-aware just by naming them.',
    'Chuck Norris’s CSV files have schemas.',
    "Chuck Norris doesn't deploy code — the server uploads itself.",
    'Chuck Norris makes APIs REST in peace.',
    'Chuck Norris once made a React app that rehydrated reality.',
    'Chuck Norris forks without asking.',
    'Chuck Norris uses boolean values: `true`, `false`, and `ChuckNorris`.',
    "Chuck Norris's Stack Overflow account answers itself.",
    'Chuck Norris once made Internet Explorer pass a lighthouse audit.',
    'Chuck Norris types with his beard.',
    'Chuck Norris wrote COBOL backwards and it still compiled.',
    'Chuck Norris pushes code directly into production with `echo`.',
    'Chuck Norris invented webhooks with a roundhouse kick.',
    'Chuck Norris runs `rm -rf /`... and nothing is deleted — out of respect.',
    'Chuck Norris wrote a zero-dependency Kubernetes replacement in QBasic.',
    "Chuck Norris's CLI runs on intuition.",
    "Chuck Norris's shell prompt is just `$ ✨`.",
    'Chuck Norris once downgraded entropy.',
  );

  get fact() {
    return this.facts.random();
  }
}

$random.chuckNorris = new ChuckNorris();
