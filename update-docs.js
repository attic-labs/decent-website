const fs = require('fs')
const path = require('path')
const git = require('nodegit')
const mkdirp = require('mkdirp')

const gitRepo = git.Repository
const gitClone = git.Clone

const REPO_URL = 'https://github.com/attic-labs/noms'
const REPO_DIR = './tmp/noms'

async function fetchNoms() {
  // Get latest noms
  const hasNoms = fs.existsSync(REPO_DIR)
  if (hasNoms) {
    const repo = await gitRepo.open(REPO_DIR)
    await repo.fetchAll()
    return repo.mergeBranches('master', 'origin/master')
  }
  return gitClone(REPO_URL, REPO_DIR)
}

function copy(from, to) {
  let done = false
  mkdirp.sync(path.dirname(to))
  return new Promise((resolve, reject) => {
    const complete = cb => {
      return value => {
        if (!done) {
          done = true
          cb(value)
        }
      }
    }
    const r = fs.createReadStream(from)
    const w = fs.createWriteStream(to)
    console.log(`${from} -> ${to}`)
    r.on('error', complete(reject))
    w.on('error', complete(reject))
    w.on('close', complete(resolve))
    r.pipe(w)
  })
}

async function updateDocs(pages, out) {
  await fetchNoms()
  console.log(pages, pages.assets)
  const copyPages = pages.map(p => copy(path.join(REPO_DIR, p.src), path.join(out, p.src)))
  const copyAssets = pages.assets.map(a => copy(path.join(REPO_DIR, a), path.join(out, a)))
  await Promise.all(copyPages, copyAssets)
  return pages
}

if (require.main === module) {
  const args = process.argv.slice(2)
  const outFolder = args.length ? args[0] : 'tmp/md'
  updateDocs(require('./page-map'), outFolder).catch(err => {
    throw err
  })
} else {
  module.exports = updateDocs
}
