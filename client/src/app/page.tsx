export default async function HomePage() {
  const response = await fetch(process.env.NODE_ENV === 'production' ? 'https://monorepodemo.vercel.app/api' : 'http://localhost:8000/api', { next: { revalidate: 10 } })


  return (
    <main>
      <h1>
      </h1>
    </main>
  )
}
