import { describe, expect, it } from "vitest"
import { sum } from "."

describe("sum", () => {
    it("sum", () => {
        expect(sum(1, 1)).toBe(2)
    })
})
