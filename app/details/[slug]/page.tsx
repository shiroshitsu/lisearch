// app/details/[slug]/page.tsx

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { details, findDetail } from '@/data/details'

export default async function DetailPage({
    params,
}: PageProps<'/details/[slug]'>) {
    const { slug } = await params
    const detail = findDetail(slug)

    if (!detail) {
        notFound()
    }

    return (
        <main>
            <h1>{detail.title}</h1>

            <p>{detail.text}</p>

            <Link href="/">close</Link>
        </main>
    )
}

export function generateStaticParams() {
    return details.map((detail) => ({
        slug: detail.slug,
    }))
}
