// import { describe, test, expect, beforeAll, afterAll } from 'bun:test'
// import { mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'

// const FIXTURES = join(import.meta.dir, 'fixtures')
const TMP = join(import.meta.dir, 'tmp')

console.log('TMP', TMP)

// const path = join(TMP, 'filesink-count.txt')
// const writer = Bun.file(path).writer()
// const n = writer.write('hello')
// expect(typeof n).toBeDefined()
// writer.end()
