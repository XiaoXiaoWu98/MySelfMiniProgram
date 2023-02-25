const timerMap: { [key: string]: any } = {}

let callbacks: Function[] = []
let timeId: NodeJS.Timer | null = null
const MAX_CALLBACK = 10000

const lib = {
    /**
     * sleep for async/await
     * @export Function
     * @param {number} ms time for sleep
     * @returns Function
     */
    sleep(ms: number, label?: string) {
        return new Promise(resolve => {
            let timer = setTimeout(resolve, ms)

            if (label) {
                timerMap[label] = {
                    timer: timer,
                    resolve: resolve
                }
            }
        })
    },
    // 取消睡眠，并继续
    wakeup(label: string) {
        let timer = timerMap[label]
        if (timer) {
            clearTimeout(timer.timer)
            timer.resolve()
            delete timerMap[label]
        }
    },
    // 取消睡眠
    die(label: string) {
        let timer = timerMap[label]
        if (timer) {
            clearTimeout(timer.timer)
            delete timerMap[label]
        }
    },

    register(callback: Function) {
        callbacks.push(callback)
        lib.autoHold()
    },

    unregister(callback: Function) {
        let index = callbacks.indexOf(callback)
        if (index < 0) {
            return
        }
        callbacks.splice(index, 1)
        if (callbacks.length === 0) {
            lib.stop()
        }
    },

    autoHold() {
        if (callbacks.length && timeId === null) {
            timeId = setInterval(() => {
                callbacks.forEach(v => {
                    v()
                })
                // console.log('timer: ', callbacks.length)
                if (callbacks.length > MAX_CALLBACK) {
                    callbacks.splice(
                        Math.floor(callbacks.length / 2) - 1,
                        callbacks.length / 2
                    )
                }
            }, 1000)
        }
    },

    start() {
        lib.autoHold()
    },

    stop() {
        if (timeId) {
            clearInterval(timeId)
            timeId = null
        }
    }

}

export default lib
