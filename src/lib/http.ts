export async function fetchApi<Type = unknown>(url: URL | RequestInfo, init?: globalThis.RequestInit | undefined) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, init)

  if (!result.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await result.json()

  return data as Type
}
