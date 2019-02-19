;
(function() {
    function Drop() {
        this.x,
            this.y,
            this.radius,
            this.distance,
            this.color,
            this.speed,
            this.vx,
            this.vy
    }

    function draw_frame() {
        ctx.clearRect(0, 0, width, height),
            collection.forEach(function(t) {
                ctx.globalAlpha = (t.distance + 1) / 10,
                    t.draw(ctx),
                    ctx.globalAlpha = 1,
                    t.x += t.vx,
                    t.y += t.vy;
                var i = t.vx + windforce;
                i < maxspeed && i > 1 - maxspeed && (t.vx = i),
                    t.y > (t.distance + 1) / 10 * height && (t.y = Math.random() * -t.radius * (num_drops / 10),
                        t.x = t.random_x()),
                    t.x > width * (1 + gutter) && (t.x = 1 - width * gutter),
                    t.x < 1 - width * gutter && (t.x = width * (1 + gutter))
            })
    }

    function animate() {
        requestAnimFrame(animate),
            draw_frame()
    }

    function windtimer() {
        windforce = Math.random() > .5 ? windmultiplier : -windmultiplier,
            setTimeout(windtimer, 3e4 * Math.random())
    }

    function init() {
        for (collection = []; num_drops--;) {
            var t = new Drop;
            t.color = "rgba(255, 255, 255, 0.5)",
                t.distance = 10 * Math.random() | 0,
                t.speed = Math.random() * (t.distance / 10) + gravity,
                t.vx = 0,
                t.vy = Math.random() * t.speed + t.speed / 2,
                t.radius = (t.distance + 1) / 16 * 3,
                t.x = t.random_x(),
                t.y = Math.random() * height,
                collection.push(t)
        }
        windtimer(),
            animate(),
            window.onresize = function() {
                height = canvas.height = document.body.offsetHeight,
                    width = canvas.width = document.body.offsetWidth;
            }
    }
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        window.setTimeout(t, 1e3 / 60)
    };
    var canvas = document.getElementById("cvs"),
        ctx = canvas.getContext("2d"),
        height = canvas.height = document.body.offsetHeight,
        width = canvas.width = document.body.offsetWidth,
        collection = [],
        num_drops = 700,
        gravity = .8,
        windforce = 1,
        windmultiplier = 0,
        maxspeed = 5,
        gutter = 0;
    Drop.prototype = {
            constructor: Drop,
            random_x: function() {
                var t = width * (1 + gutter);
                return 1 - (1 + gutter) + Math.random() * t
            },
            draw: function(t) {
                t.fillStyle = this.color,
                    t.beginPath(),
                    t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1),
                    t.closePath(),
                    t.fill()
            }
        },
        init();

})();