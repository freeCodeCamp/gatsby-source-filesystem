const fileFinder = require(`../file-finder`)

describe(`file-finder`, () => {
  it(`will not mutate the "queue" if no files are found`, () => {
    expect.assertions(1)
    let queue = [`one/path/index.md`, `two/paths/index.md`]
    const before = queue.slice(0)
    fileFinder(`${__dirname}/fixtures/test-fs/empty`, queue)
    const after = queue.slice(0)

    expect(before).toEqual(after)
  })

  it(`will add file paths to the queue`, () => {
    let queue = []
    const expectedQueue = [
      `${__dirname}/fixtures/test-fs/index.md`,
      `${__dirname}/fixtures/test-fs/dirA/index.md`,
      `${__dirname}/fixtures/test-fs/dirB/index.md`,
      `${__dirname}/fixtures/test-fs/dirA/a/index.md`,
      `${__dirname}/fixtures/test-fs/dirA/a/A/index.md`,
      `${__dirname}/fixtures/test-fs/dirA/b/index.md`,
      `${__dirname}/fixtures/test-fs/dirA/b/A/index.md`,
      `${__dirname}/fixtures/test-fs/dirA/c/index.md`,
      `${__dirname}/fixtures/test-fs/dirA/c/A/index.md`,
    ]

    fileFinder(`${__dirname}/fixtures/test-fs`, queue)

    expect(queue.length).toBeGreaterThan(0)
    expect(queue.length).toEqual(expectedQueue.length)

    const hasAllFiles = expectedQueue.every(expected =>
      queue.some(item => item === expected)
    )
    expect(hasAllFiles).toBe(true)
  })
})
