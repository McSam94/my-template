import { Button, Card } from '@mcsam/ui'

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Button>Test</Button>
			<Button variant="secondary">Test</Button>
			<Button variant="outline">Test</Button>
			<Card title="Testing" href="https://google.com">
				Enim dolor in quis aliqua aliquip magna laborum duis sit tempor elit duis eiusmod esse.
			</Card>
		</main>
	)
}
