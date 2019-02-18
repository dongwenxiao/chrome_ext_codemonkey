// app start
;
(() => {
    $(function() {
        init()
    })

    function init() {

        // topsites

        const sites = [{
            name: "Github",
            link: "https://github.com/dongwenxiao",
            icon: "http://bpic.588ku.com/element_origin_min_pic/01/54/84/75574739874192a.jpg"
        }, {
            name: "Product Hunt",
            link: "https://www.producthunt.com/",
            icon: "https://cdn0.iconfinder.com/data/icons/picons-social/57/76-producthunt-512.png"
        }, {
            name: "Cheetah Mobile OA",
            link: "https://oa.cmcm.com/",
            icon: "https://www.cmcm.com/dist/images/cmcm-680.png"
        }, ]
        $("#topsites").html(sites.map(site => `
            <li class="site-link">
                <a href="${site.link}">
                    <img class="site-icon" src="${site.icon}" alt="${site.name}">
                    <span class="site-txt">${site.name}</span>
                </a>
            </li>
        `))

        // trees

        const trees = Array.from(new Array(42).keys())

        $("#tress").html(trees.map(tree => `
            <div>
                <span></span>
            </div>
        `))

        // hills

        const hills = Array.from(new Array(5).keys())

        $("#hills").html(hills.map(hill => `<div></div>`))

        // clock ticks

        const ticks = Array.from(new Array(60).keys())
        const numbers = Array.from(new Array(12).keys())

        $("#ticks")
            .html("")
            .append(ticks.map(tick => `<div class="tick t-${tick + 1}"></div>`))
            .append($("<div>").addClass("numbers").append(numbers.map(num => `<div class="number n-${num + 1}">${num + 1}</div>`)))
            .append(`
                <div class="second hand"></div>
                <div class="minute hand"></div>
                <div class="hour hand"></div>
                <div class="pivot"></div>
            `)
    }
})();