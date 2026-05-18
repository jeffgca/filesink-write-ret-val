import { describe, test, expect, beforeAll, afterAll } from 'bun:test'
import { mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'

const TMP = join(import.meta.dir, 'tmp')

describe('fsink write', () => {
	beforeAll(async () => {
		await mkdir(TMP, { recursive: true })
	})

	afterAll(async () => {
		await rm(TMP, { recursive: true })
	})

	test('write to file', async () => {
		const path = join(TMP, 'filesink-count.txt')
		const writer = Bun.file(path).writer()
		const n = writer.write('hello')

		console.log('XXX n', n)

		expect(typeof n).toBeDefined()
		writer.end()
	})
})
