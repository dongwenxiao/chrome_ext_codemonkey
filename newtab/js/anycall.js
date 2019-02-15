// app start
! function() {
    // body keypress
    document.getElementById('root').addEventListener('keyup', function(e) {
        if (e.keyCode == 191) {
            const search = document.getElementById('search')
            if (document.activeElement != search) {
                search.value = ''
                search.focus()
            }
        }
    })

    // search input
    document.getElementById('search').addEventListener('keyup', function(e) {
        e.keyCode == 13 && robot.think(e.target.value)
    })
}()

const robot = {
    think: (query) => {

        // analysis & do
        const useSkills = robot.skills.filter(skill => {
            return skill.analyze(query)
        })
        useSkills.forEach(skill => {
            const handler = skill.analyze(query)
            skill.do(handler)
        })

        // miss match
        if (useSkills.length == 0)
            robot.google(query)
    },
    skills: [
        // weather
        {
            analyze: (query) => {
                const words = [
                    "weather",
                    "today weather",
                    "what weather",
                    "how weather",
                    "how about today",
                ]
                if (words.includes(query)) {
                    let city = "101010100" // 北京
                    return city
                }
            },
            do: (handler = "101010100") => {
                $.get(`http://t.weather.sojson.com/api/weather/city/${handler}`, (res) => {
                    const weather = res.cityInfo.city + res.data.forecast[0].high + res.data.forecast[0].notice
                    alert(weather)
                })
            }
        },
        // github followers
        {
            analyze: (query) => {
                const words = [
                    "github",
                    "my followers",
                    "github followers"
                ]
                if (words.includes(query)) {
                    let user = "dongwenxiao"
                    return user
                }
            },
            do: (handler = "dongwenxiao") => {
                $.get(`https://api.github.com/users/${handler}/followers`, (res) => {
                    alert(`You have ${res.length} followers.`)
                })
            }
        }
    ],

    google: (query) => {
        window.open("https://www.google.com/search?q=" + query, "_self");
    }
}