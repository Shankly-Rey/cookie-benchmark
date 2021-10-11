// requires
const aes256 = require("aes256")
const sqllib = require("./lib/sql")
const { PerformanceObserver, performance } = require('perf_hooks');

// funcs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var allCookies = []
var allTimes = []

sqllib.Query("SELECT * FROM cookies", function(err, res, col) {
    for(var i=0; i < res.length; i++) {
        allCookies[i] = res[i].cookie
    }

    var num=0;

    var avgTime = 0;

    console.clear()
    console.log("============= BENCHMARKING =============")

    process.stdout.write("Currently on cookie 0")
    function dothing() {
        process.stdout.write("\r\x1b[K")
        process.stdout.write("Currently on cookie " + num)

        var val = allCookies[num]

        var thisTime = performance.now();

        sqllib.Query("SELECT * FROM cookies WHERE cookie = ?", [val], function(err, res, col) {
            var cookie = res[0].cookie
            var decrypted = aes256.decrypt("pscYTnL5XBG49HHkeDNOLF1xxr6uhxIhWh1ZbMYxZS83rlZD7STAauLl6zbvbjIjs4RSuDhc9tVEacsivLfI93J7YZPnk8c9YJPFUe8yqQmOGaSZa95aEuPMgaGW54OSmsh9VuTwZ05NK9xUlkaFhYwkzfDZcl5R1CBWVVd8xRiqd0JnD2yq", cookie)

            var nowTime = performance.now()

            var timeResult = nowTime - thisTime;

            allTimes[num] = timeResult

            num = num + 1

            if (num >= allCookies.length) {
                var totalTime = 0

                allTimes.forEach(function(val) {
                    totalTime = totalTime + val
                })

                var avgTime = totalTime / allTimes.length
                process.stdout.write("\n");
                console.log("=============== RESULTS ===============")
                console.log("Cookies decrypted: " + allCookies.length)
                console.log("Average time for querying and decryption: " + avgTime + "ms")
                console.log("Total time taken: " + (totalTime / 1000) + " seconds")
                console.log("Average cookies per second: " + (1000 / avgTime) + " cookies")
                return
            } else {
                dothing()
            }
        })
    }

    dothing()
})

