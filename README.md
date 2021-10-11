# Overview
This program was used for the development of EN Talk, to benchmark the speed of querying and decrypting cookies.

# generate.js
generate.js is used to put 2000 records of cookies similar to that of what the end product will produce into a table in a MySQL database. This file is only ran once, as the records can then be used for as long as you want. You could even run it for another 2000 times if you wanted to.

# benchmark.js
benchmark.js is used to do the actual benchmarking. Running this will give you a console window which will display its current position in the table (it iterates through every cookie, querying and decrypting it synchronously). At the end, you get the results (Total cookies decrypted, total time taken, average cookies per second).

# Libraries used
* aes256
* mysql
