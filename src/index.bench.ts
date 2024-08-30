import { bench, describe } from "vitest"
import { sum } from "."

describe("sum", () => {
    bench("sum", () => {
        sum(1, 1)
    })
})
