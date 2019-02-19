;
(() => {
    class Progress {

        constructor(parentId) {
            this.$parent = $(parentId)
            this.$bar = this.$parent.find(".progress__bar")
            this.$text = this.$parent.find(".progress__text")
            this.percent = 0
            this.speed = 1000
            this.orange = 15
            this.yellow = 30
            this.green = 50
        }

        config = (obj) => {
            Object.assign(this, obj)
        }

        resetColors = () => {
            this.$bar
                .removeClass("progress__bar--green")
                .removeClass("progress__bar--yellow")
                .removeClass("progress__bar--orange")
        }

        setPercent = (percent) => {
            const { $text, $bar, green, speed, orange, yellow } = this

            $text.find("em").text(percent + "%");
            $bar.css({ width: percent + "%" });

            this.resetColors()

            if (percent >= green) {
                $bar.addClass("progress__bar--green");
            } else if (percent >= yellow) {
                $bar.addClass("progress__bar--yellow");
            } else if (percent >= orange) {
                $bar.addClass("progress__bar--orange");
            } else if (percent >= 100) {
                $progress.addClass("progress--complete");
                $bar.addClass("progress__bar--blue");
                $text.find("em").text("Complete");
            } else {
                // default red
            }
        }
    }

    const yearPassed = window.p3 = new Progress(".year-passed")
    const monthPassed = window.p2 = new Progress(".month-passed")
    const dayPassed = window.p1 = new Progress(".day-passed")

    setInterval(() => {

        const now = new Date()

        // 
        // year
        // 
        // 现在 - 今年开始
        // 除以
        // 明年开始 - 今年开始
        // 
        const currentYearBegin = new Date(`${now.getFullYear()}-1-1 00:00:00`)
        const nextYearBegin = new Date(`${now.getFullYear() + 1}-1-1 00:00:00`)
        const yearPassedPercent = (now - currentYearBegin) / (nextYearBegin - currentYearBegin) * 100

        // 
        // month
        // 
        // 现在 - 本月开始
        // 除以
        // 下月开始 - 本月开始
        // 
        const currentMonthBegin = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-1 00:00:00`)
        const nextMonthBegin = new Date(`${now.getFullYear()}-${now.getMonth() + 2}-1 00:00:00`)
        const monthPassedPrecent = (now - currentMonthBegin) / (nextMonthBegin - currentMonthBegin) * 100

        // 
        // day
        // 
        // 现在 - 今早开始
        // 除以
        // 明天开始 - 今早开始
        // 
        const currentDayBegin = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} 00:00:00`)
        const nextDayBegin = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1} 00:00:00`)
        const dayPassedPrecent = (now - currentDayBegin) / (nextDayBegin - currentDayBegin) * 100

        yearPassed.setPercent((100 - yearPassedPercent).toFixed(2))
        monthPassed.setPercent((100 - monthPassedPrecent).toFixed(2))
        dayPassed.setPercent((100 - dayPassedPrecent).toFixed(3))

    }, 300)
})();