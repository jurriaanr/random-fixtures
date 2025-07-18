# random-fixtures

This library can be used to generate random data (as the name suggest for use in fixtures or for example tests). 
It is inspired by the http client library in any Jetbrains IDE which also has a $random variable that can be used 
to generate all kinds of data (Which is also probably a Java library by itself). This library is very much a work 
in progress as more modules and features will be added. For the time being use at your own discretion.

There are multiple modules that can be included as separate packages:

* address (Streets, cities, countries and country codes)
* ancient (Greek gods, heroes, titans)
* chuck norris (Chuck Norris programming facts)

Examples:

    import { $random } from '@random-fixtures/core'

    console.log($random.number.int(100, 1000)) // A number between 100 and 1000 inclusive


Or using one of the modules


    import { $random } from '@random-fixtures/core'
    import '@random-fixtures/chuck-norris'

    console.log($random.chuckNorris.fact) // A truthful fact about chuck norris
