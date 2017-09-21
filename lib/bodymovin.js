let BM
export default async function bodymovin() {
  if (BM) return BM
  BM = await import('bodymovin')
  return BM
}
