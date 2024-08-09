import { bench } from "vitest"
import { sum } from "."

bench("sum", () => {
    sum(1, 1)
})
